const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypal = document.getElementById("paypal");
const myCheckbox = document.getElementById("myCheckbox");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = `Thanks for subscribed`;
  } else {
    subResult.textContent = `You're not subscribed`;
  }
  if (visabtn.checked) {
    paymentResult.textContent = `You are using visacard for payment`;
  } else if (mastercardbtn.checked) {
    paymentResult.textContent = `You are using mastercard for payment`;
  } else if (paypal.checked) {
    paymentResult.textContent = `You are using paypal for payment`;
  } else {
    paymentResult.textContent = `Please select payment option!`;
  }
};
