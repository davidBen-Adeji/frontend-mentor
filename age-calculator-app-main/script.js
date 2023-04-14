let inputs = document.querySelectorAll('[data-input]');
let errors = document.querySelectorAll('[data-error]');
let results = document.querySelectorAll('data-result');
let inputDay = document.querySelector('[data-day-input]');
let inputMonth = document.querySelector('[data-month-input]');
let inputYear = document.querySelector('[data-year-input]');
let errorDay = document.querySelector('[data-error-day]');
let errorMonth = document.querySelector('[data-error-month]');
let errorYear = document.querySelector('[data-error-year]');
let inputGroups = document.querySelectorAll('[data-group]')
let resultDay = document.querySelector('[data-result-day]');
let resultMonth = document.querySelector('[data-result-month]');
let resultYear = document.querySelector('[data-result-year]');
let form = document.querySelector('[data-form]');

let isEmpty = false;
let isInRange = true;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputGroups.forEach(inputGroup => {
        let input = inputGroup.querySelector('[data-input]')
        let error = inputGroup.querySelector('[data-error]')

        input.classList.remove('error__input')
        error.innerText = '';
        
        if (input.value === '') {
            input.classList.add('error__input')
            error.innerText = 'This field is required';
            isEmpty = true;
        }
    })

    if (isEmpty) {
        isEmpty = false;
        return;
    }

    let dayInput = parseFloat(inputDay.value);
    let monthInput = parseFloat(inputMonth.value);
    let yearInput = parseFloat(inputYear.value);

    let dob = new Date(`${monthInput}/${dayInput}/${yearInput}`);
    let currentDate = new Date();
    let age = {};

    if (yearInput > currentDate.getFullYear()) {
        isInRange = false;
        inputYear.classList.add('error__input');
        errorYear.innerText = 'Must be in the past';
    }
    else if (yearInput < 1) {
        inputYear.classList.add('error__input');
        errorYear.innerText = 'Must be a valid year';
        return;
    }
    else if ((dob.getFullYear() >= currentDate.getFullYear())
            && (dob.getMonth() >= currentDate.getMonth())
            && (dob.getDate() > currentDate.getDate())) {
                inputYear.classList.add('error__input');
                errorYear.innerText = 'Must be in the past';
                return;
            }

    if (monthInput - 1 !== dob.getMonth()) {
        isInRange = false;
        errorMonth.innerText = 'Must be a valid month';
    }

    if (dayInput < 1 || dayInput > 31) {
        isInRange = false;
        errorDay.innerText = 'Must be a valid day';
    }
    else if (dayInput !== dob.getDate()) {
        isInRange = false;
        errorDay.innerText = 'Must be a valid date';
    }

    if (!isInRange) {
        isInRange = true;
        return;
    }

    age.year = currentDate.getFullYear() - yearInput;

    if (currentDate.getMonth() >= dob.getMonth())
        age.month = currentDate.getMonth() - dob.getMonth();
    else {
        age.year = age.year - 1;
        age.month = 12 + currentDate.getMonth() - dob.getMonth();
    }

    if (currentDate.getDate() >= dob.getDate()) {
        age.days = currentDate.getDate() - dob.getDate();
    }
    else {
        age.month = age.month - 1;
        age.days = 31 + currentDate.getDate() - dob.getDate();

        if (age.month < 0) {
            age.month = 11;
            age.year = age.year - 1;
        }
    }

    resultYear.innerText = age.year.toLocaleString('en', {maximumFractionDigits: 0});
    resultMonth.innerText = age.month;
    resultDay.innerText = age.days;
})