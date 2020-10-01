function newItem() {
  let e = $("<li></li>"),
    t = $("#input").val();
  e.append(t),
    "" === t ? alert("Please enter an action.") : $("#list").append(e),
    e.on("dblclick", function () {
      e.toggleClass("strike");
    });
  let n = $("<deleteButton></deleteButton>");
  n.append(document.createTextNode("x")),
    e.append(n),
    n.on("click", function () {
      e.addClass("delete");
    }),
    $("#list").sortable();
}
