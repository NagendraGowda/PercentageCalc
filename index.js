let number1 = document.getElementById("num1");
let number2 = document.getElementById("num2");
let number3 = document.getElementById("num3");
let number4 = document.getElementById("num4");
let number5 = document.getElementById("num5");
let number6 = document.getElementById("num6");
let maxMarks = document.getElementById("max");
let name = document.getElementById("name");
let btn = document.querySelector(".button");
let output = document.getElementById("para");

function clicked() {
  let sum =
    ((parseInt(number1.value) +
      parseInt(number2.value) +
      parseInt(number3.value) +
      parseInt(number4.value) +
      parseInt(number5.value) +
      parseInt(number6.value)) *
      100) /
    parseInt(maxMarks.value);

  output.innerHTML = "Hey " + name.value + " your percentage is " + sum + "%";
}
btn.addEventListener("click", clicked);
