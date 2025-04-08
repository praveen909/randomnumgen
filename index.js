const mybutton = document.getElementById("mybutton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

let min = 1;
let max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

mybutton.onclick = function () {
  randomNum1 = Math.floor(Math.random() * (max - min)) + min;
  label1.textContent = randomNum1;
  randomNum2 = Math.floor(Math.random() * (max - min)) + min;
  label2.textContent = randomNum2;
  randomNum3 = Math.floor(Math.random() * (max - min)) + min;
  label3.textContent = randomNum2;
};
