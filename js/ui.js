export const renderTasks = (tasks, container) => {
  if (!tasks.length) {
    container.innerHTML = "<p>Нет задач</p>";
    return;
  }

  container.innerHTML = tasks.map(task => `
    <div class="task-card">
      <span>${task.stack}</span>
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <button data-id="${task.id}" class="delete-btn">Удалить</button>
    </div>
  `).join("");
};