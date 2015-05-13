var inputOne = document.getElementById("num_one");
var inputTwo = document.getElementById("num_two");
var additionBtn = document.getElementById("additionBtn");
var subtractionBtn = document.getElementById("subtractionBtn");
var multiplicationBtn = document.getElementById("multiplicationBtn");
var divisionBtn = document.getElementById("divisionBtn");
var answer = document.getElementById("answer");

function add() {
  var numOne = Number(inputOne.value);
  var numTwo = Number(inputTwo.value);
  var sum = numOne + numTwo;
  answer.innerHTML = sum.toString();
}

function subtract() {
  var numOne = Numgber(inputOne.value);
  var numTwo = Number(inputTwo.value);
  var sum = numOne - numTwo;
  answer.innerHTML = sum.toString();
}

function multiply() {
  var numOne = Number(inputOne.value);
  var numTwo = Number(inputTwo.value);
  var sum = numOne * numTwo;
  answer.innerHTML = sum.toString();
}

// function divide() {
//   var numOne = Number(inputOne.value);
//   var numTwo = Number(inputTwo.value);
//   var sum = numOne / numTwo;
//   answer.innerHTML = sum.toString(sum.value);
// }

additionBtn.addEventListener("click", add);
subtractionBtn.addEventListener("click", subtract);
multiplicationBtn.addEventListener("click", multiply);
// divisionBtn.addEventListener("click", divide);