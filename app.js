document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Function to create a new task element
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const span = document.createElement('span');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // Add task text to the span element
        span.textContent = taskText;

        // Add event listener for checkbox
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        // Add event listener for delete button
        deleteButton.addEventListener('click', function () {
            li.remove();
        });

        // Append elements to the list item
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        return li;
    }

    // Function to add a new task
    window.addTask = function () {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskElement = createTaskElement(taskText);

        // Add the new task to the task list
        taskList.appendChild(taskElement);

        // Clear the input field
        taskInput.value = '';
    };
});
