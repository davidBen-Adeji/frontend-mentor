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
       array.forEach(array => {
        // reset rating back to default color if it had been selected before
        if (array.style.backgroundColor == 'var(--light-grey)' && array.style.color == 'var(--white)') {
            array.style.backgroundColor = '';
            array.style.color = '';
        } 
       })

    //    add new color and background color
       rating.style.backgroundColor = 'var(--light-grey)';
       rating.style.color = 'var(--white)';
    //    store the rating value
       selectedRating = rating.dataset.value;
    })
})

submitButton.addEventListener('click', () => {
    // tell 
    if (selectedRating == null) {
        noRating.style.display = 'block'
        return;
    }

    ratingState.style.display = 'none';
    thankYouState.style.display = 'block';
    resultOutput.innerText = selectedRating
})

returnButton.addEventListener('click', () => {
    thankYouState.style.display = 'none';
    ratingState.style.display = 'block';
    noRating.style.display = 'none';
    selectedRating = null

    ratings.forEach(rating => {
        rating.style.backgroundColor = '';
        rating.style.color = '';
    })
})