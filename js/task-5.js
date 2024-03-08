function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const txtColorOutput = document.querySelector('.color');

changeColorBtn.addEventListener('click', (e) => {
  const currentColor = getRandomHexColor();
  bodyElement.style.backgroundColor = currentColor;
  txtColorOutput.innerHTML = currentColor;
})