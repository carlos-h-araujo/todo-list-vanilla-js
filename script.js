const tasks = [];

const STATUS = {
  PENDING: "pending",
  DOING: "doing",
  DONE: "done",
};

const addTask = (task) => {
  const newTask = {
    id: Date.now(),
    text: task,
    status: STATUS.PENDING,
  };

  tasks.push(newTask);

  return newTask;
};
