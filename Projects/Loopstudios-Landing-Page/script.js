const burger = document.getElementById('burger');
const closy = document.getElementById('closy');
const nl = document.getElementById('navy');
// const links = document.querySelectorAll('.nav-links li');



burger.addEventListener('click', () => {
    nl.classList.toggle('open');
    //  links.forEach(link => {
    //     link.classList.toggle('fade');
    // })
});

closy.addEventListener('click', () => {
    nl.classList.toggle('open');
});

