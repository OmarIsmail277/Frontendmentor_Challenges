const burger = document.getElementById('burger');
const nl = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links li');



burger.addEventListener('click', () => {
    burger.classList.toggle('show');
    nl.classList.toggle('show');
     links.forEach(link => {
        link.classList.toggle('fade');
    })
});

