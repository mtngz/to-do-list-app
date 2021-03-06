function newItem() {
  // jQuery code

  // Add an item to the list
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  // add alert for empty inputValue
  if (inputValue === "") {
    alert("Please enter an action.");
  } else {
    $("#list").append(li);
  }

  // Cross out item with toggle
  function crossOut() {
    li.toggleClass("strike");
  }

  // add event double-click to crosds out item
  li.on("dblclick", crossOut());

  // add delete button
  let deleteButton = $("<deleteButton></deleteButton>");
  deleteButton.append(document.createTextNode("x"));
  li.append(deleteButton);

  function deleteListItem() {
    li.addClass("delete");
  }

  // add event click to delete List Item
  deleteButton.on("click", deleteListItem());

  // reorder items
  $("#list").sortable(); // same as in javascript
}
