import { getTasks } from "./storage.js";
import { createTask, removeTask } from "./tasks.js";
import { renderTasks } from "./ui.js";
import { filterTasks } from "./filters.js";

const form = document.getElementById("task-form");
const container = document.querySelector(".tasks");
const buttons = document.querySelectorAll(".filter-btn");

let currentFilter = "all";

const updateUI = () => {
  const tasks = getTasks();
  const filtered = filterTasks(tasks, currentFilter);
  renderTasks(filtered, container);
};

form.addEventListener("submit", e => {
  e.preventDefault();
  const title = form.title.value.trim();
  const stack = form.stack.value.trim();
  const description = form.description.value.trim();
  if (!title || !stack) return alert("Заполните поля");
  createTask({ id: Date.now(), title, stack, description });
  form.reset();
  updateUI();
});

container.addEventListener("click", e => {
  if (e.target.classList.contains("delete-btn")) {
    if (!confirm("Удалить задачу?")) return;
    removeTask(Number(e.target.dataset.id));
    updateUI();
  }
});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.type;
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    updateUI();
  });
});

updateUI();