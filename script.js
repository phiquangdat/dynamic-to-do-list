$(document).ready(function () {
  $("#add-task").on("click", function () {
    $(".add-task-input").removeAttr("hidden");
  });

  $("#submit-task").on("click", function () {
    let task = $("#new-task").val();
    let component = `
    <div class="task-container">
      <div class="task-info">
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${task}</span>
      </div>
      <div class="task-icons">
        <i style="font-size:24px" class="fa task-edit">&#xf040;</i>
        <i style="font-size:24px" class="fa task-remove">&#xf1f8;</i>
      </div>
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

  $(document).on("click", ".task-edit", function () {
    let replacedText = $(this).closest(".task-container").find(".task-text");
    let currentText = replacedText.text();
    replacedText.replaceWith(
      `<input type="text" value="${currentText}" class="task-edit-input">`
    );
  });

  $(document).on("blur", ".task-edit-input", function () {
    let updatedText = $(this).val();
    $(this).replaceWith(`<span class="task-text">${updatedText}</span>`);
  });
});
