const refs = {
  nameInput: document.getElementById("name-input"),
  nameOutput: document.getElementById("name-output"),
};

// refs.nameInput.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   refs.nameOutput.textContent = event.currentTarget.value;
// }

refs.nameInput.addEventListener("input", () => {
  const inputValue = refs.nameInput.value;

  if (inputValue !== "") {
    refs.nameOutput.textContent = inputValue;
  } else {
    refs.nameOutput.textContent = "Anonymous";
  }
});
