/* Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
  после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй
document.createElement().
 */
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsCont = document.querySelector("#ingredients");

const ingredientsMakeEl = ingredients => {
  return ingredients.map( ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    return item;
  });
};

const elem = ingredientsMakeEl(ingredients);
ingredientsCont.append(...elem);