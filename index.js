const mybutton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylabel");

let min = 50;
let max = 100;

let randomNum;

mybutton.onclick = function () {
  randomNum = Math.floor(Math.random() * (max - min)) + min;
  mylabel.textContent = randomNum;
};
