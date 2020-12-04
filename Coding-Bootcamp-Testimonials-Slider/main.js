const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');
const buttons = document.querySelector('.buttons');
const parag = document.querySelector('.p-end');

let index = 0;

function nextSlide() {
    index++;

    // if (index > slides.length - 1) {
    //     index = 0;
    // }
    if (index === slides.length - 1) {
        next.style.display = 'none';
        buttons.style.transform = 'scale(1.75)';
        parag.style.visibility = 'hidden';
    }
    else if (index !== slides.length - 1) {
        next.style.display = 'inline-block';
    }

    // ----
    if (index === 0) {
        prev.style.display = 'none';
    }
    else if (index !== 0) {
        prev.style.display = 'inline-block';
    }

    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'flex';
}
function prevSlide() {
    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    if (index === 0) {
        prev.style.display = 'none';
    }
    else if (index !== 0) {
        prev.style.display = 'inline-block';
    }

    // ------

    if (index === slides.length - 1) {
        next.style.display = 'none';
    }
    else if (index !== slides.length - 1) {
        next.style.display = 'inline-block';
    }

    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'flex';
}



next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);