let submitButton = document.querySelector('.submit');
let returnButton = document.querySelector('.return__icon')
let ratings = Array.from(document.querySelectorAll('.rating__button'));
let noRating = document.querySelector('.no--rating');
let ratingState = document.querySelector('.rating--state');
let thankYouState = document.querySelector('.thank-you--state');
let resultOutput = document.querySelector('.result__span');
let selectedRating = null;

// add new styles to selected rating and store the rating value
ratings.forEach((rating, index, array) => {
    rating.addEventListener('click', () => {
        // reset rating back to default color if it had been selected before
        if (selectedRating !== null) {
            selectedRating.style.backgroundColor = '';
            selectedRating.style.color = '';
        } 
       
    //    add new color and background color
       rating.style.backgroundColor = 'var(--light-grey)';
       rating.style.color = 'var(--white)';
    //    store the rating value
       selectedRating = rating;
    })
})

submitButton.addEventListener('click', () => {
    // tell user to select a rating value if none has been selected
    if (selectedRating === null) {
        noRating.style.display = 'block'
        return;
    }

    // display rating value selected
    ratingState.style.display = 'none';
    thankYouState.style.display = 'block';
    resultOutput.innerText = selectedRating.dataset.value
})

// return to select another rating
returnButton.addEventListener('click', () => {
    thankYouState.style.display = 'none';
    ratingState.style.display = 'block';
    noRating.style.display = 'none';
    selectedRating.style.backgroundColor = '';
    selectedRating.style.color = '';
    selectedRating = null;
})

