var inputOne = document.getElementById("num_one");
var inputTwo = document.getElementById("num_two");
var calculateBtn = document.getElementById("calculateBtn");
var answer = document.getElementById("answer");

function add() {
  var numOne = Number(inputOne.value);
  var numTwo = Number(inputTwo.value);
  var sum = numOne + numTwo;
  answer.innerHTML = sum.toString();
}

calculateBtn.addEventListener("click", add);