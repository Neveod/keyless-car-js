let css = document.querySelector("h2");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function changeBackgroundColor() {
  body.style.backgroundColor =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", changeBackgroundColor);
color2.addEventListener("input", changeBackgroundColor);

function checkID(props) {
  age = prompt("How old are you");
  if (Number(age) < 16) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 16) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 16) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}

let driveButton = document.querySelector("button");
driveButton.addEventListener("click", checkID);
