const $gameField = document.querySelector(".game__field");
const filedRect = $gameField.getBoundingClientRect();
const PlayBtn = document.querySelector(".playboard__button");
const gameTimer = document.querySelector(".playboard__timer");
const gameScore = document.querySelector(".playboard__score");

let started = false;
let score = 0;
let timer = undefined;

const CarrotSize = 80;
const CarrotCount = 5;
const BugCount = 5;

PlayBtn.addEventListener("click", () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
  started = !started;
});

function startGame() {
  init();
  giveMEstopBtn();
  showTimerandScroe();
}

function giveMEstopBtn() {
  const icon = document.querySelector(".fa-play");
  icon.classList.remove("fa-play");
  icon.classList.add("fa-stop");
}

function showTimerandScroe() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

function stopGame() {}

function init() {
  addItem("carrot", CarrotCount, "img/carrot.png");
  addItem("bug", BugCount, "img/bug.png");
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = filedRect.width - CarrotSize;
  const y2 = filedRect.height - CarrotSize;
  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    $gameField.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
