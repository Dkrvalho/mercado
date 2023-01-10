// Seleção de Elementos (onde selecionarems todos eles)
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInput;

// Funções
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();
};

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (text) => {
    const todos = document.querySelector(".todo")

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        console.log(todoTitle, text)

        if (todoTitle.innerText == oldInput) {
            todoTitle.innerText = text;
        }
    })
}

// Eventos
todoForm.addEventListener("submit", (e) => { 
    e.preventDefault();

    const inputValue = todoInput.value;
    if (inputValue) {
        saveTodo(inputValue);
    }
})

document.addEventListener("click", (e) => {
    const targetElement = e.target;
    const parentElement = targetElement.closest("div");
    let todoTitle;

    if (parentElement && parentElement.querySelector("h3")) {
        todoTitle = parentElement.querySelector("h3").innerText;
    }

    if (targetElement.classList.contains("finish-todo")) {
        parentElement.classList.toggle("done"); //"add" somente adiciona enquanto o "toggle" adiciona se não tem e retira se tem.
    }

    if (targetElement.classList.contains("remove-todo")) {
        parentElement.remove();
    }

    if (targetElement.classList.contains("edit-todo")) {
        toggleForms();

        editInput.value = todoTitle;
        oldInput = todoTitle;
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault(); //evento para não enviar formulário

    toggleForms();
})

editForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const editInput = editInput.value;

    if (editInput) {
        updateTodo(editInput);
    }

    toggleForms();
})