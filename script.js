const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add a new task
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if(taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Toggle completed
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'deleteBtn';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

// Allow Enter key to add task
taskInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addBtn.click();
    }
});
