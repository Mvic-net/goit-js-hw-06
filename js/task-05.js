const refs = {
  nameInput: document.getElementById("name-input"),
  nameOutput: document.getElementById("name-output"),
};

refs.nameInput.addEventListener("input", () => {
  const inputValue = refs.nameInput.value.trim();

  if (inputValue !== "") {
    refs.nameOutput.textContent = inputValue;
  } else {
    refs.nameOutput.textContent = "Anonymous";
  }
});
