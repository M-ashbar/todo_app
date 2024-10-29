var idCount = 1;

function addTodo() {
    var todos = document.getElementById('todos');
    var inpVal = document.getElementById('inp');

    // Check if input is empty
    if (inpVal.value.trim() === "") {
        alert("Please enter a todo!");
        return;
    }

    var element = document.createElement('div');
    element.setAttribute('id', idCount);
    element.setAttribute('class', "todo");

    element.innerHTML = `
        <p>${inpVal.value}</p> 
        <button onclick="deleteTodo(${idCount})">Delete</button> 
        <button onclick="updateTodo(${idCount})">Update</button>
    `;

    todos.appendChild(element);

    // Clear the input field
    inpVal.value = "";

    idCount++;
}

function deleteTodo(id) {
    var deletedItem = document.getElementById(id);
    if (deletedItem) {
        deletedItem.remove();
    }
}

function updateTodo(id) {
    var inpVal = document.getElementById('inp');
    var todoItem = document.getElementById(id);

    // Update todo item with the current input value
    if (todoItem) {
        todoItem.innerHTML = `
            <p>${inpVal.value}</p> 
            <button onclick="deleteTodo(${id})">Delete</button> 
            <button onclick="updateTodo(${id})">Update</button>
        `;
    }
}