const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

console.log(listIngredients);

const itemIngredients = ingredients.map((ingredient) => {
  const liEL = document.createElement("li");
  liEL.classList.add("item");

  const liText = (liEL.textContent = ingredient);

  listIngredients.appendChild(liEL);
});

document.body.appendChild(listIngredients);
