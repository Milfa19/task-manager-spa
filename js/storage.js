const KEY = "tasks";

export const getTasks = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem(KEY, JSON.stringify(tasks));
};