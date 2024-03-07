const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formValues = [];
    const formInputs = e.target.elements;
    for (const input of formInputs) {
        if (input.nodeName.toLowerCase() !== 'input') {
            continue;
        } else if (!input.value.trim().length) {
            alert('All form fields must be filled in');
        }
        formValues[input.name] = input.value.trim();
    }
    e.target.reset();

    console.log(formValues);
})
