document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
  
    // Function to add a new task
    const addTask = () => {
      const taskValue = taskInput.value.trim();
      if (taskValue === '') {
        alert('Please enter a task');
        return;
      }
  
      // Create a new list item (task)
      const newTask = document.createElement('li');
      newTask.textContent = taskValue;
  
      // Create a delete button for each task
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(newTask);
      });
  
      // Append the delete button to the task
      newTask.appendChild(deleteButton);
  
      // Add the new task to the task list
      taskList.appendChild(newTask);
  
      // Clear the input field after adding the task
      taskInput.value = '';
    };
  
    // Add event listener to the "Add Task" button
    addTaskButton.addEventListener('click', addTask);
  
    // Optional: Add task on pressing the Enter key
    taskInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  });
  