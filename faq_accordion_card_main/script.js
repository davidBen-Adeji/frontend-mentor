let sections = Array.from(document.querySelectorAll('.faq__section'));

sections.forEach(section => {
    let question = section.querySelector('.faq__question');
    let isCollapsed = true;
    
    question.addEventListener('click', () => {
        let answer = section.querySelector('.faq__answer');
        

        if (isCollapsed) {
            question.style.color = 'var(--very-dark-desaturated-blue)';
            isCollapsed = false
        } else {
            question.style.color = '';
            isCollapsed = true
        }

        question.classList.toggle('faq__question--rotate');
        question.classList.toggle('faq__question--bold');
        answer.classList.toggle('faq__answer--visible');
    })
})