// 'use strict';
const formState = document.querySelector('[data-form-state]');
const form = document.querySelector('[data-form]');
const card = {
    num: document.querySelector('[data-num-output]'),
    name: document.querySelector('[data-name-output]'),
    expDate: document.querySelector('[data-exp-output]'),
    cvc: document.querySelector('[data-cvc-output]'),
}
const formDeets = {
    inputDivs: document.querySelectorAll('[data-input-div]'),
    inputFields: document.querySelectorAll('[data-input-field]'),
    errorMessages: document.querySelectorAll('[data-error-message]'),
    nameField: document.querySelector('[data-name-field]'),
    nameInput: document.querySelector('[data-input-name]'),
    telephoneNum: document.querySelector('[data-input-cNum]'),
    telephoneNumError: document.querySelector('[data-cNum-error]'),
    numInputs: document.querySelectorAll('[data-input-num]'),
    numErrors: document.querySelectorAll('[data-num-error]'),
    monthInput: document.querySelector('[data-input-month]'),
    yearInput: document.querySelector('[data-input-year]'),
    monthYearError: document.querySelector('[data-exp-error]'),
    cvcInput: document.querySelector('[data-input-cvc]'),
    cvcError: document.querySelector('[data-cvc-error]'),
}
let isCardDetailsComplete;

document.addEventListener('DOMContentLoaded', () => {
    form.removeAttribute('novalidate');
})

const formValidation = e => {
    e.preventDefault();

    // checkIfBlank(formDeets.inputDivs);
    nameValidation(formDeets.nameField);
}

form.addEventListener('submit', formValidation)

// const checkIfBlank = (inputDivs) => {
//     for (const inputDiv of inputDivs) {
//         const inputs = inputDiv.querySelectorAll('[data-input-field]');
//         const errorMessage = inputDiv.querySelector('[data-error-message]');
    
//         for (const input of inputs) {
//             if (!input.value.trim()) {
//                 errorMessage.textContent = "Can't be blank";
//                 input.classList.add('error');
//             }
//             else {
//                 errorMessage.textContent = '';
//                 input.classList.remove('error');
//             }
//         }
//     }
// }

const checkIfBlank = (input, errorMessage) => {
    if (!input.value.trim()) {
        errorMessage.textContent = "Can't be blank";
        input.classList.add('error');
    }
    else {
        errorMessage.textContent = '';
        input.classList.remove('error');
    }
}

const nameValidation = (nameField) => {
    const input = nameField.querySelector('input');
    const errorMessage = nameField.querySelector('[data-name-error]');

    // should return true or false
    checkIfBlank(input, errorMessage);
}