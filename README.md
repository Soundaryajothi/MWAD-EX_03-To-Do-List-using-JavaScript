# MWAD-EX_03-To-Do-List-using-JavaScript
## Date:21.09.2025
## NAME: SOUNDARYA J
## REG NO:212223220108

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
## index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List App</title>
    <link rel="stylesheet" href="sytle.css">
</head>
<body>
    <div class="container">
        <h1>🌈 My To-Do List</h1>
        <div class="input-section">
            <input type="text" id="taskInput" placeholder="Add a new task...">
            <button id="addBtn">Add</button>
        </div>
        <ul id="taskList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
## Style.css
```
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #f6d365, #fda085);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    transition: background 0.5s ease;
}

.container {
    background-color: rgba(255, 255, 255, 0.95);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    width: 400px;
    max-width: 90%;
    transition: transform 0.3s ease;
}
.container:hover {
    transform: scale(1.02);
}

h1 {
    text-align: center;
    margin-bottom: 25px;
    color: #ff6f61;
    text-shadow: 1px 1px 2px #fff;
}

.input-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
}

#taskInput {
    flex: 1;
    padding: 12px;
    border: 2px solid #ff6f61;
    border-radius: 8px;
    transition: border-color 0.3s ease;
}
#taskInput:focus {
    border-color: #6a11cb;
    outline: none;
}

#addBtn {
    padding: 12px 25px;
    background-color: #6a11cb;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-left: 10px;
    transition: background 0.3s ease, transform 0.2s ease;
}
#addBtn:hover {
    background-color: #2575fc;
    transform: scale(1.05);
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 10px;
    background: linear-gradient(90deg, #fddb92, #d1fdff);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: transform 0.2s ease, background 0.3s ease;
}
li:hover {
    transform: translateY(-3px);
    background: linear-gradient(90deg, #ff9a9e, #fad0c4);
}

li.completed {
    text-decoration: line-through;
    color: #aaa;
    background: #d3d3d3;
}

.deleteBtn {
    background-color: #ff4b5c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 6px 12px;
    transition: background 0.3s ease, transform 0.2s ease;
}
.deleteBtn:hover {
    background-color: #ff1e3c;
    transform: scale(1.1);
}
```
## script.js
```
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
```


## OUTPUT
<img width="1906" height="966" alt="Screenshot 2025-09-21 215413" src="https://github.com/user-attachments/assets/499be12f-52c0-41c3-8993-99acc5c8b348" />

<img width="1914" height="967" alt="Screenshot 2025-09-21 215537" src="https://github.com/user-attachments/assets/37b230cb-d554-4074-80a6-6176df9750ee" />


## RESULT
The program for creating To-do list using JavaScript is executed successfully.
