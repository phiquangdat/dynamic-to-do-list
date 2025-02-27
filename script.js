$(document).ready(function () {
  $("#add-task").on("click", function () {
    $(".add-task-input").removeAttr("hidden");
  });
  $("#submit-task").on("click", function () {
    let task = $("#new-task").val();
    let component = `<li>${task}</li>`;
    $("#task-list").append(component);
    $("#new-task").val("");
  });
});
