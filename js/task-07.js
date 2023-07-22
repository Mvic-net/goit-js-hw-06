const refs = {
  getInput: document.querySelector("#font-size-control"),
  getSpan: document.querySelector("#text"),
};

console.log(refs.getInput.value);

refs.getSpan.style.fontSize = `${refs.getInput.value}px`;

refs.getInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.getSpan.style.fontSize = `${event.target.value}px`;
}
