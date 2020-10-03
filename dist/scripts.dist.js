function newItem() {
  let e = $("<li></li>"),
    t = $("#input").val();
  e.append(t),
    "" === t ? alert("Please enter an action.") : $("#list").append(e),
    e.on("dblclick", void e.toggleClass("strike"));
  let l = $("<deleteButton></deleteButton>");
  l.append(document.createTextNode("x")),
    e.append(l),
    l.on("click", void e.addClass("delete")),
    $("#list").sortable();
}
