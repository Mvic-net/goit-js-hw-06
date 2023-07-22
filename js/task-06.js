const refs = {
  getInput: document.querySelector("#validation-input"),
};

refs.getInput.addEventListener("blur", () => {
  const lengthInput = refs.getInput.dataset.length;
  const valueLength = refs.getInput.value.length;

  if (valueLength === Number(lengthInput)) {
    refs.getInput.classList.add("valid");
    refs.getInput.classList.remove("invalid");
  } else {
    refs.getInput.classList.add("invalid");
  }
});
