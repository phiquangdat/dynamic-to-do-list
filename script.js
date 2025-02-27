$(document).ready(function () {
  $("#add-task").on("click", function () {
    $(".add-task-input").removeAttr("hidden");
  });

  $("#submit-task").on("click", function () {
    let task = $("#new-task").val();
    let component = `
    <label>
      <input type="checkbox">
      <span></span>
      ${task}
    </label>
    `;
    $("#task-list").append(component);
    $("#new-task").val("");
  });
});
