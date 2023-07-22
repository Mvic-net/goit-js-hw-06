function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  getColorButton: document.querySelector(".change-color"),
  colorSpan: document.querySelector(".color"),
};

refs.getColorButton.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  refs.colorSpan.textContent = randomColor;
});
