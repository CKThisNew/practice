const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN_ClasName = "hidden";
const localStorageKey = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_ClasName);
  const username = loginInput.value;
  localStorage.setItem(localStorageKey, username);
  painGreetings(username);
}

function painGreetings(username) {
  greeting.classList.remove(HIDDEN_ClasName);
  greeting.innerText = `hello ${username}`;
}

const savedusername = localStorage.getItem(localStorageKey);

if (savedusername === null) {
  loginForm.classList.remove(HIDDEN_ClasName);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  painGreetings(savedusername);
}
