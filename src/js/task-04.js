const btn = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  btn.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  btn.span.textContent = counterValue;
};

btn.sub.addEventListener("click", increment);
btn.add.addEventListener("click", decrement);