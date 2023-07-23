const refs = {
  getInput: document.querySelector("#validation-input"),
};

refs.getInput.addEventListener("blur", () => {
  const lengthInput = refs.getInput.dataset.length;
  const valueLength = refs.getInput.value.trim().length;

  if (valueLength === Number(lengthInput)) {
    refs.getInput.classList.add("valid");
    refs.getInput.classList.remove("invalid");
  } else {
    refs.getInput.classList.add("invalid");
    refs.getInput.classList.remove("valid");
  }

  console.log(lengthInput);
  console.log(Number(lengthInput));
  console.log(valueLength);
});
