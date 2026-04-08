import { getTasks } from "./storage.js";
import { createTask, removeTask } from "./tasks.js";
import { renderTasks } from "./ui.js";
import { filterTasks } from "./filters.js";

const container = document.querySelector(".tasks");
const form = document.querySelector("form");
const buttons = document.querySelectorAll(".filter-btn");

let currentFilter = "all";

const update = () => {
  const tasks = getTasks();
  const filtered = filterTasks(tasks, currentFilter);
  renderTasks(filtered, container);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = form.title.value.trim();
  const stack = form.stack.value.trim();
  const description = form.description.value.trim();

  if (!title || !stack) return alert("Заполни поля");

  createTask({
    id: Date.now(),
    title,
    stack,
    description
  });

  form.reset();
  update();
});

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    if (!confirm("Удалить задачу?")) return;

    removeTask(Number(e.target.dataset.id));
    update();
  }
});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.type;
    update();
  });
});

update();