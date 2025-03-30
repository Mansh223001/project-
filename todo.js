// Load tasks from localStorage when the page loads
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = createTaskElement(taskText);
    taskList.appendChild(li);

    saveTask(taskText);
    taskInput.value = '';
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = taskText;
    span.onclick = function() {
        li.classList.toggle('completed');
        updateTaskStatus(taskText, li.classList.contains('completed'));
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        li.remove();
        deleteTask(taskText);
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    return li;
}

// LocalStorage functions
function saveTask(taskText) {
    let tasks = getTasks();
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = getTasks();
    const taskList = document.getElementById('taskList');
    tasks.forEach(task => {
        const li = createTaskElement(task.text);
        if (task.completed) {
            li.classList.add('completed');
        }
        taskList.appendChild(li);
    });
}

function updateTaskStatus(taskText, completed) {
    let tasks = getTasks();
    tasks = tasks.map(task => 
        task.text === taskText ? { ...task, completed } : task
    );
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(taskText) {
    let tasks = getTasks();
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}