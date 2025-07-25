var button = document.querySelector("button");
var box = document.getElementById("changeMe");

function changeColor() {
  if (box.style.background == "red") {
    box.style.background = "blue"
    document.querySelector("#UserName").value = "The box is now blue."
    document.querySelector("#userName").style.background = "green"
  } else {
    box.style.background = "red"
    document.querySelector("#pwd").style.background = "yellow"}
}

