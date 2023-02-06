// 2.8125
let sections = Array.from(document.querySelectorAll('.faq__section'));

sections.forEach(section => {
    let question = section.querySelector('.faq__question')
    question.addEventListener('click', () => {
        let answer = section.querySelector('.faq__answer');
        answer.classList.toggle('faq__answer--visible')
    })
})