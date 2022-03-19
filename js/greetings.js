const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const STORAGE_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(STORAGE_KEY, username);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(STORAGE_KEY);
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (localStorage.getItem(STORAGE_KEY) === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
