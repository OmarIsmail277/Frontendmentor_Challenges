const form = document.querySelector('.right form');
const inputs = document.querySelectorAll('.right form input');

var icon_fn = document.querySelector(".error-fn");
var text_fn = document.querySelector(".text-fn");

var icon_ln = document.querySelector(".error-ln");
var text_ln = document.querySelector(".text-ln");

var icon_email = document.querySelector(".error-email");
var text_email = document.querySelector(".text-email");

var icon_pw = document.querySelector(".error-pw");
var text_pw = document.querySelector(".text-pw");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach(input => {

        if (!input.value) {
            console.log(input.id);
            if (input.id == 'first-name') {
                icon_fn.style.display = 'block';
                text_fn.style.display = "block";
                inputs[0].classList.add('border-error');
                inputs[0].classList.remove('original-border');
            }
            else if (input.id === 'last-name') {
                icon_ln.style.display = 'block';
                text_ln.style.display = "block";
                inputs[1].classList.add('border-error');
                inputs[1].classList.remove('original-border');
            }

            else if (input.id === 'password') {
                icon_pw.style.display = 'block';
                text_pw.style.display = "block";
                inputs[3].classList.add('border-error');
                inputs[3].classList.remove('original-border');
            }
        }

        else if (input.value) {
            if (input.id == 'first-name') {
                icon_fn.style.display = 'none';
                text_fn.style.display = "none";
                inputs[0].classList.remove('border-error');
                inputs[0].classList.add('original-border');
            }
            else if (input.id === 'last-name') {
                icon_ln.style.display = 'none';
                text_ln.style.display = "none";
                inputs[1].classList.remove('border-error');
                inputs[1].classList.add('original-border');
            }

            else if (input.id === 'password') {
                icon_pw.style.display = 'none';
                text_pw.style.display = "none";
                inputs[3].classList.remove('border-error');
                inputs[3].classList.add('original-border');
            }
        }

        if (input.id === 'email') {
            if (validateEmail(input.value)) {
                icon_email.style.display = 'none';
                text_email.style.display = "none";
                inputs[2].classList.remove('border-error');
                inputs[2].classList.add('original-border');
            }
            else {
                icon_email.style.display = 'block';
                text_email.style.display = "block";
                inputs[2].classList.add('border-error');
                inputs[2].classList.remove('original-border');
            }
        }
    })
});

// Regex for email validation
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

