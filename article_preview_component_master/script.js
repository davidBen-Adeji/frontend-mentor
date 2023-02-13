let display = document.querySelector('.content__footer--icon');
let shareIcon = document.querySelector('.content__footer--icon img')
let hide = document.querySelector('.content__share--icon');
let socialsSection = document.querySelector('.content__share');
let toggleIcon = true

display.addEventListener('click', () => {
    // make social media icons visible
    socialsSection.classList.toggle('content__share--visible');
    
    // add new styles to share icon. Remove style if toggleIcon variable is false
    if (toggleIcon) {
        display.style.backgroundColor = 'var(--desaturated-dark-blue)';
        shareIcon.style.filter = 'brightness(0) invert(1)';
        toggleIcon = false 
    }
    else {
        display.style.backgroundColor = '';
        shareIcon.style.filter = '';
        toggleIcon = true
    }
})

hide.addEventListener('click', () => {
    // remove social media icons
    socialsSection.classList.remove('content__share--visible');
})