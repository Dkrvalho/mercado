// Seleção de Elementos (onde selecionarems todos eles)
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Funções
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    doneBtn.appendChild(doneBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("edit-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    deleteBtn.appendChild(deleteBtn)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    doneBtn.appendChild(doneBtn)
}

// Eventos
todoForm.addEventListener("submit", (e) => { 
    e.preventDefault();

    const inputValue = todoInput.value;
    if (inputValue) {
        saveTodo(inputValue);
    }
})