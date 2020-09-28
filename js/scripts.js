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
  li.on("dbclick", function crossOut() {
    li.toggleClass("strike");
  });
}
