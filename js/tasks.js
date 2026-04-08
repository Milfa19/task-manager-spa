import { getTasks, saveTasks } from "./storage.js";

export const createTask = task => {
  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);
  return tasks;
};

export const removeTask = id => {
  const tasks = getTasks().filter(t => t.id !== id);
  saveTasks(tasks);
  return tasks;
};