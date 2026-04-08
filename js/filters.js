export const filterTasks = (tasks, type) => {
  if (type === "all") return tasks;
  return tasks.filter(t => t.stack === type);
};