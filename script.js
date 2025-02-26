$(document).ready(function () {
  let button = $("#add-task");
  button.on("click", function () {
    let task = $("#new-task").val();
    console.log(task);
    let component = `<li>${task}</li>`;
    $("#task-list").append(component);
    $("#new-task").val("");
  });
});
