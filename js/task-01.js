
const categoriesEL = document.querySelector('#categories');

console.log(`В списке ${categoriesEL.children.length} категории.`);

const itemEl = document.querySelectorAll('.item');

itemEl.forEach( elem => {
    console.log(`Категория: ${elem.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${elem.lastElementChild.childElementCount}`);
});