let form = document.querySelector('.subscribe__form');
let texts = document.querySelectorAll('.text')
let email = document.getElementById('email');
let errorEmail = document.querySelector('.error__email');
let password = document.getElementById('password');
let errorPassword = document.querySelector('.error__password')
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (event) => {
    // display error if any text input is empty
    texts.forEach(text => {
        let textInput = text.querySelector('input').value.trim();
        let error = text.querySelector('.error');

        if (!(textInput)) {
            error.style.display = 'block';
            event.preventDefault();
        } else {
            error.style.display = 'none';
        }
    })

    // display error if any email input is empty
    if(!(email.value.match(validRegex))) {
        errorEmail.style.display = 'block';
        event.preventDefault();
    } else {
        errorEmail.style.display = 'none';
    }

    // display error if any password input is empty
    if (!(password.value)) {
        errorPassword.style.display = 'block';
        event.preventDefault();
    } else {
        errorPassword.style.display = 'none';
    }
})