document.addEventListener("DOMContentLoaded", function () {
  const priorityForm = document.getElementById("priority-form");
  const todoForm = document.getElementById("todo-form");
  const meetingForm = document.getElementById("meeting-form");
  const tomorrowForm = document.getElementById("tomorrow-form");
  const prioritiesSection = document.getElementById("priorities");
  const todosSection = document.getElementById("todos");
  const meetingsSection = document.getElementById("meetings");
  const tomorrowsSection = document.getElementById("tomorrows");
  const notesTextarea = document.getElementById("notes");

  function createTask(text, section) {
    const task = document.createElement("p");
    task.classList.add("task");
    const spanText = document.createElement("span");
    spanText.innerText = text;
    const actionsSpan = document.createElement("span");
    actionsSpan.classList.add("actions");
    const deleteSpan = document.createElement("span");
    deleteSpan.innerHTML = "<i class='fa-solid fa-trash'></i>";
    const doneSpan = document.createElement("span");
    doneSpan.innerHTML = "<i class='fa-regular fa-circle-check'></i>";
    task.appendChild(spanText);
    task.appendChild(actionsSpan);
    actionsSpan.appendChild(deleteSpan);
    actionsSpan.appendChild(doneSpan);
    section.appendChild(task);

    task.addEventListener("click", function (e) {
      const target = e.target;
      if (target.classList.contains("fa-trash")) {
        task.remove();
      }
      if (target.classList.contains("fa-circle-check")) {
        task.classList.toggle("completed");
      }
    });
  }

  priorityForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = priorityForm.querySelector("input").value.trim();
    if (text === "") return;
    createTask(text, prioritiesSection);
    priorityForm.reset();
  });

  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = todoForm.querySelector("input").value.trim();
    if (text === "") return;
    createTask(text, todosSection);
    todoForm.reset();
  });

  meetingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = meetingForm.querySelector("input").value.trim();
    if (text === "") return;
    createTask(text, meetingsSection);
    meetingForm.reset();
  });

  tomorrowForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = tomorrowForm.querySelector("input").value.trim();
    if (text === "") return;
    createTask(text, tomorrowsSection);
    tomorrowForm.reset();
  });
});
