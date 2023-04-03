const btn = document.querySelector('[data-btn]');
const item = document.querySelectorAll('[data-item]');
const notificationNum = document.querySelector('[data-num]');

btn.addEventListener('click', () => {
    item.forEach(item => {
        item.classList.add('read');
    })

    notificationNum.innerText = '0';
})