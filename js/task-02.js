const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

// console.log(listIngredients);

const itemIngredients = ingredients.map((ingredient) => {
  const liEL = document.createElement("li");
  liEL.classList.add("item");

  liEL.textContent = ingredient;

  // console.dir(liEL);
  // console.log(liEL.textContent);

  return liEL;
});
// console.log(itemIngredients);

listIngredients.prepend(...itemIngredients);
