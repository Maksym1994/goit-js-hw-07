
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsCont = document.querySelector("#ingredients");

const ingredientList = ingredients.reduce(
  (string, item) => string + `<li>${item}</li>`, ""
);

ingredientsCont.innerHTML = ingredientList;
