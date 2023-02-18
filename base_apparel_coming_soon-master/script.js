let form = document.querySelector('.hero__form');
let email = document.querySelector('.email');
let error = document.querySelector('.error');
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (event) => {
    // if email is not valid return display error
    if (!(email.value.match(validRegex))) {
        error.classList.add('error--visible');
        event.preventDefault();
    }
})