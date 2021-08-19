const loginform = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hidden_classname = "hidden";
const USERNAME_KEy = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginform.classList.add(hidden_classname);
  const username = logininput.value;
  localStorage.setItem(USERNAME_KEy, username);
  paintgreeting(username);
}
loginform.addEventListener("submit", onLoginSubmit);

function paintgreeting(username) {
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(hidden_classname);
}

const savedusername = localStorage.getItem(USERNAME_KEy);
console.log(savedusername);

if (savedusername === null) {
  loginform.classList.remove(hidden_classname);
  loginform.addEventListener("submit", onLoginSubmit);
} else {
  paintgreeting(savedusername);
}
