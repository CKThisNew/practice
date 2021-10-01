const $gameField = document.querySelector(".game__field");
const filedRect = $gameField.getBoundingClientRect();
const PlayBtn = document.querySelector(".playboard__button");
const gameTimer = document.querySelector(".playboard__timer");
const gameScore = document.querySelector(".playboard__score");
const resultBox = document.querySelector(".resultbox");
const resultMessage = document.querySelector(".resultbox__message");
const restartBtn = document.querySelector(".resultbox__re");

let started = false;
let score = 0;
let timer = undefined;

const CarrotSize = 80;
const CarrotCount = 5;
const BugCount = 5;
const Playtime = 5;

$gameField.addEventListener("click", onFiledClick);

PlayBtn.addEventListener("click", () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});

restartBtn.addEventListener("click", () => {
  startGame();
  resultBox.classList.add("resultbox__hide");
});

function startGame() {
  started = true;
  init();
  giveMEstopBtn();
  showTimerandScroe();
  startGameTimer();
}

function giveMEstopBtn() {
  const icon = document.querySelector(".fas");
  icon.classList.remove("fa-play");
  icon.classList.add("fa-stop");
}

function showTimerandScroe() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

function startGameTimer() {
  let remainTime = Playtime;
  updateTimerText(remainTime);
  timer = setInterval(() => {
    if (remainTime <= 0) {
      clearInterval(timer);
      finishGame(CarrotCount === score);
      return;
    }
    updateTimerText(--remainTime);
  }, 1000);
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.textContent = `${seconds}`;
}

function stopGame() {
  started = false;
  stopGameTimer();
}

function finishGame(win) {
  started = false;
  PlayBtn.style.visibility = "hidden";
  showResultBox(win ? "성공" : "ㄹㅇㅋㅋ");
}

function stopGameTimer() {
  clearInterval(timer);
  PlayBtn.style.visibility = "hidden";
  showResultBox("다시?");
}

function showResultBox(text) {
  resultBox.classList.remove("resultbox__hide");
  resultMessage.textContent = text;
}

function hideResultBox() {
  resultBox.classList.add("resultbox__hide");
}

function init() {
  $gameField.innerHTML = "";
  gameScore.textContent = CarrotCount;
  addItem("carrot", CarrotCount, "img/carrot.png");
  addItem("bug", BugCount, "img/bug.png");
}

function onFiledClick(event) {
  if (!started) {
    return;
  }
  const target = event.target;
  if (target.matches(".carrot")) {
    target.remove();
    score++;
    gameScore.textContent = CarrotCount - score;
    if (score == CarrotCount) {
      finishGame(true);
    }
  } else if (target.matches(".bug")) {
    stopGameTimer();
    finishGame(false);
  }
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
