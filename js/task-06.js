const input = document.querySelector("#validation-input");
input.addEventListener("blur", function () {
  const inputDataLength = Number(input.getAttribute("data-length"));
  const inputValueLength = input.value.length;
  if (inputDataLength === inputValueLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});