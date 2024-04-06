// Get the input field, add button, and task list
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  // Get the value from the input field
  const taskText = taskInput.value;

  // Create a new list item element
  const newTask = document.createElement("li");
  newTask.textContent = taskText;

  // Add event listener to remove task when clicked
  newTask.addEventListener("click", function() {
    this.remove();
  });

  // Append the new task to the task list
  taskList.appendChild(newTask);

  // Clear the input field
  taskInput.value = "";
}

// Add event listener to the add button
addButton.addEventListener("click", addTask);

// Add event listener to the input field to allow adding task by pressing Enter key
taskInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});



// Get the selected priority level when a task is added
const prioritySelect = document.getElementById("priority-select");
const priority = prioritySelect.value;

// Store the priority level along with the task
const Tasklist = {
  name: "Task name",
  priority: priority
};

// Display the priority level in the task list
const tasklist = document.getElementById("task-list");
const taskItem = document.createElement("li");
taskItem.textContent = `Task name - Priority: ${task.priority}`;
taskList.appendChild(taskItem);

// Get the selected due date when a task is added
const dueDateInput = document.getElementById("due-date-input");
const dueDate = dueDateInput.value;

// Store the due date along with the task
const task = {
  name: "Task name",
  dueDate: dueDate
};

// Implement a reminder system to notify users
const currentDate = new Date();
if (currentDate > new Date(task.dueDate)) {
  // Task is overdue
  console.log("Task is overdue!");
} else {
  // Task is not yet due
  console.log("Task is not yet due.");
}

// Get the entered category when a task is added
const categoryInput = document.getElementById("category-input");
const category = categoryInput.value;

// Store the category along with the task
const Task = {
  name: "Task name",
  category: category
};

// Implement filters or search functionality
const filteredTasks = tasks.filter(task => task.category === "Category name");

