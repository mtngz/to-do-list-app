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
}
