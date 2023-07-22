const refs = {
  getInput: document.querySelector("#font-size-control"),
  getSpan: document.querySelector("#text"),
};

console.log(refs.getInput.value);

// refs.getSpan.style.fontSize = `${refs.getInput.value}px`;

function onInputChange() {
  refs.getSpan.style.fontSize = `${refs.getInput.value}px`;
}
refs.getInput.addEventListener("input", onInputChange);
console.log();

onInputChange();
