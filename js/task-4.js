class UserDataStorage {
    setData(key, value) {
        this[key] = value;
    }
}
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = new UserDataStorage();
    const formInputs = e.target.elements;
    for (const input of formInputs) {
        if (input.nodeName !== 'INPUT') {
            continue;
        } else if (!input.value.trim().length) {
            alert('All form fields must be filled in');
            return;
        }
        userData.setData(input.name, input.value.trim());
    }
    e.target.reset();

    console.log(userData);
})
