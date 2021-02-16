document.getElementById('button').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const todo = document.createElement('li');
    todo.innerHTML = `${input}<span><button id="edit-todo">Edit</button></span><span><button id="delete-todo">Delete</button></span>`;
    document.getElementById('todo-section').appendChild(todo);
})

