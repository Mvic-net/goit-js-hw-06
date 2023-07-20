const ulElements = document.querySelectorAll(".item");
console.log("Number of categories:", ulElements.length);

ulElements.forEach(function (element, index) {
  const title = element.querySelector("h2");
  const liElements = element.querySelectorAll("li");

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${liElements.length}`);
});
