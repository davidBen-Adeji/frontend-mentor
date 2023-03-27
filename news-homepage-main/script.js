'use strict';

const openMenu = document.querySelector('[data-open-menu]');
const mobile = document.querySelector('[data-mobile]');
const closeMenu = document.querySelector('[data-close-menu]');

openMenu.addEventListener('click', () => {
    mobile.classList.add('reveal');
})

closeMenu.addEventListener('click', () => {
    mobile.classList.remove('reveal');
})