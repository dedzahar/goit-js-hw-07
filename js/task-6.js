function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const createdDiv = document.createElement('div');
    createdDiv.style.width = `${boxSize + i * 10}px`;
    createdDiv.style.height = `${boxSize + i * 10}px`;
    createdDiv.style.backgroundColor = getRandomHexColor();
    outputElement.append(createdDiv);
  }
}

function destroyBoxes() {
  outputElement.innerHTML = '';
}

const minValue = 1;
const maxValue = 100;
const boxSize = 30;
const inputElement = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const outputElement = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const blocksCnt = inputElement.value * 1;
  if (blocksCnt < minValue || blocksCnt > maxValue) {
    return;
  };
  destroyBoxes();
  createBoxes(blocksCnt);
  inputElement.value = '';
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
})
