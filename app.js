let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const newTask = {
            text: taskText,
            completed: false,
            priority: 'medium' // Default priority
        };
        tasks.push(newTask);
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskElement);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

renderTasks();




