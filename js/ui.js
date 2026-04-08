export const renderTasks = (tasks, container) => {
  if (!tasks.length) {
    container.innerHTML = "<p>Нет задач</p>";
    return;
  }

  container.innerHTML = tasks.map(task => `
    <div class="task-card">
      <h3>${task.title}</h3>
      <span>${task.stack}</span>
      <p>${task.description}</p>
      <button data-id="${task.id}" class="delete-btn">Удалить</button>
    </div>
  `).join("");
};