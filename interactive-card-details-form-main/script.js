'use strict';
const formParent = document.querySelector('.form-state');
const form = document.querySelector('.form');
const cvcOutput = document.querySelector('[data-cvc-output]');
const numOutput = document.querySelector('[data-num-output]');
const nameOutput = document.querySelector('[data-name-output]');
const expOutput = document.querySelector('[data-exp-output]');
const inputDivs = document.querySelectorAll('[data-input-div]');
const inputNums = document.querySelectorAll['[data-input-num]'];

form.addEventListener('submit', function (e){
    // check if input field is empty
    for (const inputDiv of inputDivs) {
        const inputFields = inputDiv.querySelectorAll('[data-input-field]');
        // const inputNums = inputDiv.querySelectorAll('[data-input-num]');
        const errorMessage = inputDiv.querySelector('[data-error-message]');

        for (const inputField of inputFields) {
            const input = inputField.value.trim()
            if (!input) {
                errorMessage.textContent = "Can't be blank";
                e.preventDefault();
            }
            else
                errorMessage.textContent = '';
        }

        // check if a valid number is entered
        // for (const inputNum of inputNums) {
        //     const input = inputNum.value * 1;

        //     if (input === 0) {
        //         errorMessage.textContent = "Can't be blank";
        //         e.preventDefault();
        //     }
        //     else if (isNaN(input)) {
        //         errorMessage.textContent = 'invalid input';
        //         e.preventDefault();
        //     }
        //     else
        //         errorMessage.textContent = '';
        // }
    }
})