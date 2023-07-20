let counterValue = 0;

const refs = {
  incr: document.querySelector("button[data-action='increment']"),
  decr: document.querySelector("button[data-action='decrement']"),
  value: document.querySelector("#value"),
};

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}

refs.decr.addEventListener("click", decrement);
refs.incr.addEventListener("click", increment);
