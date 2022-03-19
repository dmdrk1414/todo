const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginDelete_Form = document.querySelector(".user-delete-container ");
const loginDelete_button = document.querySelector(
  ".user-delete-container .user-delete-button"
);
const greeting = document.querySelector("#greeting");

const USER_STORAGE_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  const username = loginInput.value;
  localStorage.setItem(USER_STORAGE_KEY, username);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USER_STORAGE_KEY);
  greeting.classList.add("greeting");
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (localStorage.getItem(USER_STORAGE_KEY) === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}

if (localStorage.getItem(USER_STORAGE_KEY) !== null) {
  loginDelete_Form.classList.remove(HIDDEN_CLASSNAME);
}

function userDeleteHandler(event) {
  localStorage.removeItem(USER_STORAGE_KEY);
}
loginDelete_Form.addEventListener("submit", userDeleteHandler);
