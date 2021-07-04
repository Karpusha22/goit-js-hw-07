const controlSize = document.getElementById("font-size-control");

const text = document.getElementById("text");

controlSize.oninput = function () {
  text.style.fontSize = controlSize.value + "px";
};