let btn = document.getElementById("submit-btn");
btn.addEventListener("click", getTask);

function getTask(){
  let task = document.getElementById("task").value;
  let task_container = document.querySelector(".task-container");
  task_container.innerHTML += task;

}