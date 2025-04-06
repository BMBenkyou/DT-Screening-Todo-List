let btn = document.getElementById("submit-btn");
btn.addEventListener("click", getTask);

let taskInput = document.getElementById("task");
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getTask();
  }
});

function getTask() {
  let task = document.getElementById("task").value;
  if (task.trim() === "") return; 

  let taskContainer = document.querySelector(".task-container");

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const delBtn = document.createElement('button');
  let btnText = document.createTextNode("Delete");
  delBtn.appendChild(btnText);


  checkbox.addEventListener("change", function(){
    if(this.checked){
      taskText.style.textDecoration = "line-through";
    }
  })

  let taskItem = document.createElement("div");
  taskItem.classList.add("task");

  let taskText = document.createElement("span");
  taskText.textContent = task;

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(delBtn);
  delBtn.addEventListener("click", function (){
    taskItem.remove();
  });

  taskContainer.appendChild(taskItem);
  
  document.getElementById("task").value = "";
}

