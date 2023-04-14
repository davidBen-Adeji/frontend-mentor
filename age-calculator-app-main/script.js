const inputDay = document.querySelector('[data-day-input]');
const inputMonth = document.querySelector('[data-month-input]');
const inputYear = document.querySelector('[data-year-input]');
const errorDay = document.querySelector('[data-error-day]');
const errorMonth = document.querySelector('[data-error-month]');
const errorYear = document.querySelector('[data-error-year]');
const inputGroups = document.querySelectorAll('[data-group]')
const resultDay = document.querySelector('[data-result-day]');
const resultMonth = document.querySelector('[data-result-month]');
const resultYear = document.querySelector('[data-result-year]');
const form = document.querySelector('[data-form]');

let isEmpty = false;
let isInRange = true;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputGroups.forEach(inputGroup => {
        const input = inputGroup.querySelector('[data-input]')
        const error = inputGroup.querySelector('[data-error]')

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

    const dayInput = parseFloat(inputDay.value);
    const monthInput = parseFloat(inputMonth.value);
    const yearInput = parseFloat(inputYear.value);

    const dob = new Date(`${monthInput}/${dayInput}/${yearInput}`);
    const currentDate = new Date();
    const age = {};

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

    let a = 0, b = 0, c = 0;
    const yearInterval = setInterval(function (){
        resultYear.innerText = a.toLocaleString('en', {maximumFractionDigits: 0});

        if (a >= age.year) {
            a = 0
            clearInterval(yearInterval);
        }
        a++;
    }, 50);

    const monthInterval = setInterval(function (){
        resultMonth.innerText = b.toLocaleString('en', {maximumFractionDigits: 0});

        if (b >= age.month) {
            b = 0
            clearInterval(monthInterval);
        }
        b++;
    }, 50);

    const dayInterval = setInterval(function (){
        resultDay.innerText = c.toLocaleString('en', {maximumFractionDigits: 0});

        if (c >= age.days) {
            c = 0
            clearInterval(dayInterval);
        }
        c++;
    }, 50);
})