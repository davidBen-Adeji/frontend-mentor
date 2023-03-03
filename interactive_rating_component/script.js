let submitButton = document.querySelector('.submit');
let returnButton = document.querySelector('.return__icon')
let ratings = Array.from(document.querySelectorAll('.rating__button'));
let noRating = document.querySelector('.no--rating');
let ratingState = document.querySelector('.rating--state');
let thankYouState = document.querySelector('.thank-you--state');
let resultOutput = document.querySelector('.result__span');
let selectedRating = null;

// add new styles to selected rating and store the rating value
ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        // reset rating back to default color if it had been selected before
        if (selectedRating !== null) {
            selectedRating.classList.remove('rating__button--active');
        } 
       
    //    add new color and background color
        rating.classList.add('rating__button--active');

    //    store the rating value
        selectedRating = rating;
    })
})

submitButton.addEventListener('click', () => {
    // tell user to select a rating value if none has been selected
    if (selectedRating === null) {
        noRating.classList.remove('d-none');
        return
    }

    // display rating value selected
    ratingState.classList.add('d-none');
    thankYouState.classList.remove('d-none')
    resultOutput.innerText = selectedRating.dataset.value
})

// return to select another rating
returnButton.addEventListener('click', () => {
    thankYouState.classList.add('d-none');
    ratingState.classList.remove('d-none');
    noRating.classList.add('d-none');
    selectedRating.classList.remove('rating__button--active');
    selectedRating = null;
})