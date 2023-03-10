let submitForm = document.querySelector('[data-form]');
let email = document.querySelector('[data-email]');
let error = document.querySelector('[data-error]');
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submitForm.addEventListener('submit', (event) => {
    if (email.value == '') {
        error.classList.remove('d-none')
        error.innerText = 'Whoops! It looks like you forgot to add your email';
        email.classList.add('intro__form__input--error');
        email.value = '';
        event.preventDefault();
    }
    else if (!(email.value.match(validRegex))) {
        error.classList.remove('d-none')
        error.innerText = 'Please provide a valid email';
        email.classList.add('intro__form__input--error');
        event.preventDefault();
    }
})
