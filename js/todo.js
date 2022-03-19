const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

function savedToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  const li_ID = li.id;

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li_ID));
  savedToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add("todo_li");
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.classList.add("todo_span");
  const div = document.createElement("div");
  div.classList.add("todo-list_button");

  const button = document.createElement("button");
  button.classList.add("todolist_delete_button");
  button.addEventListener("click", deleteToDo);
  button.innerText = "❌";

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  savedToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDoss = localStorage.getItem(TODOS_KEY);

if (savedToDoss !== null) {
  const parseToDos = JSON.parse(savedToDoss); // localStorage에 받은것들을 배열로 저장
  toDos = parseToDos;
  parseToDos.forEach(paintToDo); // parseToDos 의 배열 원소들 하나하나 함수로 받기 가능 / paintToDo의 매개변수로 원소들이 들어간다.
  // paintToDo({text: "a", id:12121212})
}
