// create an array of each question and answer section
let sections = Array.from(document.querySelectorAll('.faq__section'));

sections.forEach(section => {
    // select question under parent element
    let question = section.querySelector('.faq__question');
    let isCollapsed = true;

    question.addEventListener('click', () => {
        let answer = section.querySelector('.faq__answer');
        
        // add color when clicked, will retur to default color is isCollaped variable is false
        if (isCollapsed) {
            question.style.color = 'var(--very-dark-desaturated-blue)';
            isCollapsed = false
        } else {
            question.style.color = '';
            isCollapsed = true
        }

        // rotate arrow
        question.classList.toggle('faq__question--rotate');
        // increase font weight of question
        question.classList.toggle('faq__question--bold');
        // make the answer visible
        answer.classList.toggle('faq__answer--visible');
    })
})