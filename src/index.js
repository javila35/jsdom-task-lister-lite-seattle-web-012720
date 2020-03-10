function addTask(newTask) {
  let task = document.createElement("li");
  task.innerHTML = `<li>${newTask}</li>`;
  document.querySelector("ul").appendChild(task);
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event.target);
    const tasktoAdd = event.target["new-task-description"].value;
    addTask(tasktoAdd);
  });
  
});
