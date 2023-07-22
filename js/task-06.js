const refs = {
  getInput: document.querySelector("#validation-input"),
};

refs.getInput.addEventListener("blur", () => {
  const lengthInput = refs.getInput.dataset.length;
  const valueLength = refs.getInput.value.trim().length;

  if (valueLength == lengthInput) {
    refs.getInput.classList.add("valid");
    refs.getInput.classList.remove("invalid");
  } else {
    refs.getInput.classList.add("invalid");
    refs.getInput.classList.remove("valid");
  }

  console.log(lengthInput);
  console.log(valueLength);
});
