const bodyEl = document.body;
// console.log(bodyEl);

const firstChildEl = bodyEl.firstElementChild;
// console.log(firstChildEl);

const ulElement = firstChildEl.nextElementSibling;
// console.log(ulElement);

const categories = ulElement.children;
// console.log(categories);
console.log("Number of categories:", categories.length);

const categoriesArr = Array.from(categories);
// console.log(categoriesArr);

categoriesArr.forEach(function (element, index) {
  const title = element.firstElementChild;
  const liElements = element.lastElementChild;
  const liElementsItems = liElements.children;

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${liElementsItems.length}`);
});
