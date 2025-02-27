$(document).ready(function () {
  $("#add-task").on("click", function () {
    $(".add-task-input").removeAttr("hidden");
  });

  $("#submit-task").on("click", function () {
    let task = $("#new-task").val();
    let component = `
    <label>
      <input type="checkbox" class="task-checkbox">
      <span></span>
      ${task}
    </label>
    `;
    $("#task-list").append(component);
    $("#new-task").val("");
  });

  $(document).on("change", ".task-checkbox", function () {
    $(this).closest("label").toggleClass("completed");
  });
});
