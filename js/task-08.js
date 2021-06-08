
const refs = {
  renderEl: document.querySelector('[data-action="render"]'),
  destroyEl: document.querySelector('[data-action="destroy"]'),
  inputEl: document.querySelector('input'),
  boxesEl: document.querySelector('#boxes'),
};

refs.renderEl.addEventListener('click', createBoxes);
refs.destroyEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {

  amount = refs.inputEl.value;
  const elementBox = document.createElement('div');

  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const elem = document.createElement('div');

    boxSize += 10;

    elem.style.width = `${boxSize}px`;
    elem.style.height = `${boxSize}px`;
    elem.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;

    elementBox.append(elem);
  }

  refs.boxesEl.append(...elementBox.children);
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}