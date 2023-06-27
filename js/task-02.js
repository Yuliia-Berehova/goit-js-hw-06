const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const listEL = ingredients.map((element) => {
  const liEL = document.createElement("li");
  liEL.classList.add("item");
  liEL.textContent = element;
  return liEL;
})

ingredientsEl.append(...listEL);