const DayNumber = document.querySelector(".daynum");
const HourNumber = document.querySelector(".hournum");
const MinNumber = document.querySelector(".minnum");
const SecNumber = document.querySelector(".secnum");
const DateWord = document.querySelector(".date");
const HourWord = document.querySelector(".hour");
const MinWord = document.querySelector(".min");
const SecWord = document.querySelector(".sec");

const NewYear = new Date("2022-01-01:00:00:00+0900");
const Today = new Date();
const gap = NewYear - Today;
