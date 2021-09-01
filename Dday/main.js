const DayNumber = document.querySelector(".daynum");
const HourNumber = document.querySelector(".hournum");
const MinNumber = document.querySelector(".minnum");
const SecNumber = document.querySelector(".secnum");
const DateWord = document.querySelector(".date");
const HourWord = document.querySelector(".hour");
const MinWord = document.querySelector(".min");
const SecWord = document.querySelector(".sec");

function Ddaybot() {
  const NewYear = new Date("2022-01-01:00:00:00+0900");
  const Today = new Date();
  const gap = NewYear - Today;
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  DayNumber.innerText = day;

  HourNumber.innerText = `${hours < 10 ? `0${hours}` : hours}`;

  MinNumber.innerText = `${minute < 10 ? `0${minute}` : minute}`;

  SecNumber.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`;
}

function Newyeardaywillbe() {
  Ddaybot();
  setInterval(Ddaybot, 1000);
}
Newyeardaywillbe();
