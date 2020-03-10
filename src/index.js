const taskList = document.getElementById("tasks")

function addTask(newTask) {
  let task = document.createElement("li");
  let button = document.createElement("button")
  button.innerText = "X";
  button.id= `${newTask}`;
  task.innerHTML = `${newTask}`;
  taskList.appendChild(task);
  task.appendChild(button);
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const tasktoAdd = event.target["new-task-description"].value;
    addTask(tasktoAdd);
  });
});