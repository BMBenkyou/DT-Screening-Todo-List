let btn = document.getElementById("submit-btn");
btn.addEventListener("click", getTask);

// Add event listener for the Enter key
let taskInput = document.getElementById("task");
taskInput.addEventListener("keypress", function(event) {
  // Check if the key pressed was Enter (key code 13)
  if (event.key === "Enter") {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the getTask function
    getTask();
  }
});

function getTask() {
  let task = document.getElementById("task").value;
  if (task.trim() === "") return; 

  let taskContainer = document.querySelector(".task-container");

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

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

  taskContainer.appendChild(taskItem);
  
  // Clear the input field after adding the task
  document.getElementById("task").value = "";
}