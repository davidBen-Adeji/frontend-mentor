let submitButton = document.querySelector('.submit');
let ratings = Array.from(document.querySelectorAll('.rating__button'));
let selectedRating = null;

ratings.forEach((rating, index, array) => {
    rating.addEventListener('click', () => {
       array.forEach(array => {
        if (array.style.backgroundColor == 'var(--light-grey)' && array.style.color == 'var(--white)') {
            array.style.backgroundColor = '';
            array.style.color = '';
        } 
       })
       rating.style.backgroundColor = 'var(--light-grey)';
       rating.style.color = 'var(--white)';
       selectedRating = rating.dataset.value;
    })
})
