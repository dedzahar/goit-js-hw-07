const nameInput = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

nameInput.addEventListener('input', (e) => {
    const text = e.target.value.trim();
    if (text.length) {
        outputElement.innerHTML = text;
    } else {
        outputElement.innerHTML = 'Anonymous';
    }
})