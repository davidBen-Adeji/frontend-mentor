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
    monthYearDiv: document.querySelector('[data-month-year-div]'),
    cvcDiv: document.querySelector('[data-cvc-div]'),
}

const formState = document.querySelector('[data-form-state]');
const form = document.querySelector('[data-form]');

let isCardDetailsComplete;

document.addEventListener('DOMContentLoaded', () => {
    form.setAttribute('novalidate', '');
})

const formValidation = e => {
    e.preventDefault();

    nameValidation(formDetails.nameDiv);
    monthAndYearValidation(formDetails.monthYearDiv);
}

form.addEventListener('submit', formValidation)

const nameValidation = (nameDiv) => {
    const input = nameDiv.querySelector('[data-input-name]');
    const errorMessage = nameDiv.querySelector('[data-name-error]');

    if (isInputFieldBlank(input, errorMessage)) {
        isCardDetailsComplete = false;
        card.name.textContent = 'jane appleseed';
    }
    else {
        isCardDetailsComplete = true;
        card.name.textContent = input.value.trim();
    } 
}

const monthAndYearValidation = (monthYearDiv) => {
    const monthInput = monthYearDiv.querySelector('[data-input-month]');
    const yearInput = monthYearDiv.querySelector('[data-input-year]');
    const errorMessage = monthYearDiv.querySelector('[data-month-year-error]');
    let isMonthOrYearBlank;
    let isMontOrYearValidNum;
    let isMonthOrYearInRange;

    const blankField = (output) => {
        isCardDetailsComplete = false;
        errorMessage.textContent = "Can't be blank";
        output.textContent = '00';
    }

    const invalidInput = (output) => {
        isCardDetailsComplete = false;
        errorMessage.textContent = 'Invalid Input';
        output.textContent = '00';
    }

    const invalidRange = (output) => {
        isCardDetailsComplete = false;
        errorMessage.textContent = 'Invalid Range';
        output.textContent = '00';
    }

    // returns true if number is between 1 and 12
    const isMonthInRange = (input) => {
        const num = input.value * 1;

        if (num >= 1 && num <= 12) return true;

        return false;
    }

    // returns true if number is between 0 and 99
    const isYearInRange = (input) => {
        const num = input.value * 1;

        if (num >= 0 && num <= 99) return true;

        return false;
    }

    if (isInputFieldBlank(monthInput, errorMessage)) {
        isMonthOrYearBlank = true;
        blankField(card.monthExpDate);
    }
    if (isInputFieldBlank(yearInput, errorMessage)) {
        isMonthOrYearBlank = true;
        blankField(card.yearExpDate);
    }
    if (isMonthOrYearBlank) return;



    if (!isMonthInRange(monthInput)) {
        console.log('not in range')
        isMonthOrYearInRange = false;
        invalidRange(card.monthExpDate);
    }
    if (!isYearInRange(yearInput)) {
        isMonthOrYearInRange = false;
        invalidRange(card.yearExpDate);
    }
    if (!isMonthOrYearInRange) return; 


    
    if (!isValidNum(monthInput)) {
        isMontOrYearValidNum = false;
        invalidInput(card.monthExpDate);
    }
    if (!isValidNum(yearInput)) {
        isMontOrYearValidNum = false;
        invalidInput(card.yearExpDate);
    }
    if (!isMontOrYearValidNum) return;   
}

// returns true if input field is blank
const isInputFieldBlank = (input, errorMessage) => {
    if (!input.value.trim()) {
        errorMessage.textContent = "Can't be blank";
        input.classList.add('error');
        return true;
    }

        errorMessage.textContent = '';
        input.classList.remove('error');
        return false;
}

// returns true if number is valid
const isValidNum = (input) => {
    const num = input.value * 1;
    if (isNaN(num) || num % 1 !== 0) {
        input.classList.add('error');
        return false;
    }

    input.classList.remove('error');
    return true;
}