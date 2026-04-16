const tasks = [];

const STATUS = {
  PENDING: "pending",
  DOING: "doing",
  DONE: "done",
};

const addTask = (task, status) => {
  const newTask = {
    id: Date.now(),
    text: task,
    status,
  };

  tasks.push(newTask);

  return newTask;
};

const taskInput = document.querySelectorAll(".task-input");

console.log(taskInput);

taskInput.forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      let actualStatus;
      if (input.classList.contains("pending-input")) {
        actualStatus = STATUS.PENDING;
      } else if (input.classList.contains("doing-input")) {
        actualStatus = STATUS.DOING;
      } else {
        actualStatus = STATUS.DONE;
      }

      const status = document.querySelector(`#${actualStatus}-list`);

      const task = document.createElement("li");

      task.textContent = input.value;

      status.append(task);

      addTask(input.value, actualStatus);

      input.value = "";
    }
  });
});
