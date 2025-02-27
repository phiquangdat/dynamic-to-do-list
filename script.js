$(document).ready(function () {
  $("#add-task").on("click", function () {
    $(".add-task-input").removeAttr("hidden");
  });

  $("#submit-task").on("click", function () {
    let task = $("#new-task").val();
    let component = `
    <div class="task-container">
      <input type="checkbox" class="task-checkbox">
      <span class="task-text">${task}</span>
    </div">
    `;
    $("#task-list").append(component);
    $("#new-task").val("");
  });

  $(document).on("change", ".task-checkbox", function () {
    $(this).closest(".task-container").toggleClass("completed");
  });

  $(document).on("click", ".task-text", function () {
    $(this).closest(".task-container").toggleClass("completed");

    // Toggle the checkbox's checked property
    let checkbox = $(this).siblings(".task-checkbox");
    checkbox.prop("checked", !checkbox.prop("checked"));
  });
});
