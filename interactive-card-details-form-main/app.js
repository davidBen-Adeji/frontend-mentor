// 'use strict';
const card = {
    num: document.querySelector('[data-num-output]'),
    name: document.querySelector('[data-name-output]'),
    monthExpDate: document.querySelector('[data-month-exp]'),
    yearExpDate: document.querySelector('[data-year-exp]'),
    cvc: document.querySelector('[data-cvc-output]'),
}

const formDetails = {
    nameDiv: document.querySelector('[data-name-div]'),
    cardNumberDiv: document.querySelector('[data-cNum-div]'),
    monthDiv: document.querySelector('[data-month-div]'),
    yearDiv: document.querySelector('[data-year-div]'),
    cvcDiv: document.querySelector('[data-cvc-div]'),
}

const formState = document.querySelector('[data-form-state]');
const form = document.querySelector('[data-form]');

let isCardDetailsComplete;
let monthHasError;

document.addEventListener('DOMContentLoaded', () => {
    form.setAttribute('novalidate', '');
})


// returns true if input field is blank
const isInputFieldBlank = (input, errorMessage) => {
    if (!input.value.trim()) {
        errorMessage.textContent = "Can't be blank";
        input.classList.add('error');
        return true;
    }

        input.classList.remove('error');
        return false;
}

// returns true if number is valid
const isValidNum = (input, errorMessage) => {
    const num = input.value * 1;
    if (isNaN(num) || num % 1 !== 0) {
        input.classList.add('error');
        errorMessage.textContent = 'Invalid input'
        return false;
    }

    input.classList.remove('error');
    return true;
}

const nameValidation = (div) => {
    const input = div.querySelector('[data-input-name]');
    const errorMessage = div.querySelector('[data-name-error]');

    // check if input is blank
    if (isInputFieldBlank(input, errorMessage)) {
        isCardDetailsComplete = false;
        card.name.textContent = 'jane appleseed';
    }
    else {
        isCardDetailsComplete = true;
        card.name.textContent = input.value.trim();
        errorMessage.textContent = '';
    } 
}


const monthValidation = (div) => {
    const input = div.querySelector('[data-input-month]');
    const errorMessage = div.querySelector('[data-month-error]');

    const inputError = () => {
        monthHasError = true;
        isCardDetailsComplete = false;
        card.monthExpDate.textContent = '00';
    }

    const isValueInRange = (input, errorMessage) => {
        const num = input.value * 1;

        if (num >= 1 && num <= 12 ) {
            input.classList.remove('error');
            return true;
        }

        input.classList.add('error');
        errorMessage.textContent = 'Invalid input';
        return false;
    }

    //check if input is blank
    if (isInputFieldBlank(input, errorMessage)) {
        inputError();
        return;
    }


    // check if number is not valid (has decimal or NaN)
    if (!isValidNum(input, errorMessage)) {
        inputError();
        return;
    }


    // check if it's not in range
    if (!isValueInRange(input, errorMessage)) {
        inputError();
        return;
    }

    monthHasError = false;
    isCardDetailsComplete = true;
    const num = input.value * 1;
    card.monthExpDate.textContent = num.toString().padStart(2, '0');
    errorMessage.textContent = '';
}

const yearValidation = (div) => {
    const input = div.querySelector('[data-input-year]');
    const errorMessage = div.querySelector('[data-year-error]');

    const inputError = () => {
        isCardDetailsComplete = false;
        card.yearExpDate.textContent = '00';
    }

    const isLengthEqualsTwo = (input, errorMessage) => {
        if (input.value.length !== 2) {
            input.classList.add('error');
            errorMessage.textContent = 'Invalid input';
            return false;
        }

        input.classList.remove('error');
        return true;
    }

    const isValueInRange = (input, errorMessage) => {
        const num = input.value * 1;

        if (num >= 0 && num <= 99 ) {
            input.classList.remove('error');
            return true;
        }

        input.classList.add('error');
        errorMessage.textContent = 'Invalid input';
        return false;
    }

    // check if input is blank
    if (isInputFieldBlank(input, errorMessage)) {
        inputError();
        return;
    }

    // check if the string length is not 2
    if (!isLengthEqualsTwo(input, errorMessage)) {
        inputError();
        return;
    }

    // check if it's not a valid num (has decimal or NaN)
    if (!isValidNum(input, errorMessage)) {
        inputError();
        return;
    }

    // check if it's not in range
    if (!isValueInRange(input, errorMessage)) {
        inputError();
        return;
    }

    // check if there's an error in month input
    if (monthHasError) return;

    isCardDetailsComplete = true;
    const num = input.value * 1;
    card.yearExpDate.textContent = num.toString().padStart(2, '0')
    errorMessage.textContent = '';
}

const formValidation = e => {
    e.preventDefault();

    nameValidation(formDetails.nameDiv);
    monthValidation(formDetails.monthDiv);
    yearValidation(formDetails.yearDiv);
}
form.addEventListener('submit', formValidation)
