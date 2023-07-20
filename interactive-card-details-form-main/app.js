// 'use strict';
alert('testin testin 1 2 3')
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
const cardNumInput = formDetails.cardNumberDiv.querySelector('[data-input-cNum]')

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


const isLengthValid = (input, errorMessage, length) => {
    if (input.value.length !== length) {
        input.classList.add('error');
        errorMessage.textContent = 'Invalid input';
        return false;
    }

    input.classList.remove('error');
    return true;
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

const isValueInRange = (input, errorMessage, min, max) => {
    const num = input.value * 1;

    if (num >= min && num <= max ) {
        input.classList.remove('error');
        return true;
    }

    input.classList.add('error');
    errorMessage.textContent = 'Invalid input';
    return false;
}

const isValidCreditCard = (input) => {
    // Remove any spaces or dashes from the input
    let cardNumber = input.replace(/[\s-]/g, "");
  
    // Define the regular expression for credit card format
    let regex = /^(?:3[47]\d{13}|(?:4\d|5[1-5]|65)\d{14}|(?:6011|(?:2131|1800|35\d{3})\d{11}))$/;
  
    // Check if the input matches the regular expression
    return regex.test(cardNumber);
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

const cardNumValidation = (div) => {
    const input = div.querySelector('[data-input-cNum]');
    const errorMessage = div.querySelector('[data-cNum-error]');
         

    const inputError = () => {
        isCardDetailsComplete = false
        card.num.textContent = '0000 0000 0000 0000';
    }

    if (isInputFieldBlank(input, errorMessage)) {
        inputError();
        return;
    }

    if (!isValidCreditCard(input.value)) {
        inputError();
        input.classList.add('error');
        errorMessage.textContent = 'Please Input a valid Credit Card Number';
        return;
    }

    isCardDetailsComplete = true;
    input.classList.remove('error');
    errorMessage.textContent = '';
    card.num.textContent = input.value;
}

const monthValidation = (div) => {
    const input = div.querySelector('[data-input-month]');
    const errorMessage = div.querySelector('[data-month-error]');

    const inputError = () => {
        monthHasError = true;
        isCardDetailsComplete = false;
        card.monthExpDate.textContent = '00';
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
    if (!isValueInRange(input, errorMessage, 1, 12)) {
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

    // check if input is blank
    if (isInputFieldBlank(input, errorMessage)) {
        inputError();
        return;
    }

    // check if the string length is not 2
    if (!isLengthValid(input, errorMessage, 2)) {
        inputError();
        return;
    }

    // check if it's not a valid num (has decimal or NaN)
    if (!isValidNum(input, errorMessage)) {
        inputError();
        return;
    }

    // check if it's not in range
    if (!isValueInRange(input, errorMessage, 0, 99)) {
        inputError();
        return;
    }

    // check if there's an error in month input
    if (monthHasError) return;

    isCardDetailsComplete = true;
    card.yearExpDate.textContent = input.value;
    errorMessage.textContent = '';
}

const cvcValidation = (div) => {
    const input = div.querySelector('[data-input-cvc]');
    const errorMessage = div.querySelector('[data-cvc-error]');

    const inputError = () => {
        isCardDetailsComplete = false;
        card.cvc.textContent = '000';
    }

    // check if blank
    if (isInputFieldBlank(input, errorMessage)) {
        inputError();
        return;
    }

    // check if length is 3
    if (!isLengthValid(input, errorMessage, 3)) {
        inputError();
        return;
    }

    // check if num is valid
    if (!isValidNum(input, errorMessage)) {
        inputError();
        return;
    }

    // check if in range
    if (!isValueInRange(input, errorMessage, 0, 999)) {
        inputError();
        return;
    }

    isCardDetailsComplete = true;
    card.cvc.textContent = input.value;
    errorMessage.textContent = '';
}

const formValidation = e => {
    e.preventDefault();

    nameValidation(formDetails.nameDiv);
    cardNumValidation(formDetails.cardNumberDiv);
    monthValidation(formDetails.monthDiv);
    yearValidation(formDetails.yearDiv);
    cvcValidation(formDetails.cvcDiv);

    if (isCardDetailsComplete) {
        formState.innerHTML = `
                                <div class="complete__state">
                                    <img src="./images/icon-complete.svg" alt="check mark">
                                    <h1>THANK YOU</h1>
                                    <p>We've added your card details</p>
                                    <a href="index.html">Continue</a>
                                </div>`;
    }
}
form.addEventListener('submit', formValidation);

cardNumInput.addEventListener('input', () => {
      const cc_format = (value) => {
        let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        let matches = v.match(/\d{4,16}/g);
        let match = matches && matches[0] || ''
        let parts = []
    
        for (i=0, len=match.length; i<len; i+=4) {
            parts.push(match.substring(i, i+4))
        }
    
        if (parts.length) {
            return parts.join(' ')
        } else {
            return value
        }
    }
      
      cardNumInput.value = cc_format(cardNumInput.value);
})


