const PickNumber = document.querySelector("#picknumber");
const AnswerNumber = document.querySelector("#answernumber");
const playbtn = document.querySelector("button");
const CompareNumber = document.querySelector("#compare");
const ShowResult = document.querySelector("#result");

function LetsPlayGame(event) {
  event.preventDefault();
  if (PickNumber.vaule > 99 || !PickNumber || PickNumber < 0) {
    alert("plz!!!!! wake up!!!!");
  } else {
    const random = Math.floor(Math.random() * PickNumber.value + 1);
    Gameresult(random);
  }
}

function Gameresult() {
  const random = Math.floor(Math.random() * PickNumber.value + 1);
  if (parseInt(AnswerNumber.value, 10) === random) {
    CompareNumber.innerText = `당신이 입력한 숫자 ${AnswerNumber.value}, 컴퓨터가 선택한 숫자 ${random}`;
    ShowResult.innerText = `정답입니다!!!`;
    alert("승리!!!");
  } else if (parseInt(AnswerNumber.value, 10) < 0) {
    alert("똑바로 입력해라^^");
  } else {
    CompareNumber.innerText = `당신이 입력한 숫자 ${AnswerNumber.value}, 컴퓨터가 선택한 숫자 ${random}`;
    ShowResult.innerText = `땡 ~~~ 메롱메롱~~~`;
  }
}

playbtn.addEventListener("click", LetsPlayGame);
