var fn = document.forms["myForm"]["first-name"].value;
var icon_fn = document.querySelector(".error-fn");
var text_fn = document.querySelector(".text-fn");
const first = document.querySelector('.container .right form input[name = first-name]');

var ln = document.forms["myForm"]["last-name"].value;
var icon_ln = document.querySelector(".error-ln");
var text_ln = document.querySelector(".text-ln");
const last = document.querySelector('.container .right form input[name = last-name]');

var pw = document.forms["myForm"]["password"].value;
var icon_pw = document.querySelector(".error-pw");
var text_pw = document.querySelector(".text-pw");
const pass = document.querySelector('.container .right form input[name = password]');

var em = document.forms["myForm"]["email"].value;
var icon_email = document.querySelector(".error-email");
var text_email = document.querySelector(".text-email");
const email = document.querySelector('.container .right form input[type = email]');

const form = document.querySelector('.container .right form');



function validateForm() {

    if (fn == "" || fn == null) {
        icon_fn.style.display = "block";
        text_fn.style.display = "block";
        first.classList.remove('original-border');
        first.classList.add('border-error');

    }
    else {
        icon_fn.style.display = "none";
        text_fn.style.display = "none";
        first.classList.remove('border-error');
        first.classList.add('original-border');
    }
    if (ln == "" || ln == null) {
        icon_ln.style.display = "block";
        text_ln.style.display = "block";
        last.classList.remove('original-border');
        last.classList.add('border-error');

    }
    else {
        icon_ln.style.display = "none";
        text_ln.style.display = "none";
        last.classList.remove('border-error');
        last.classList.add('original-border');
    }
    if (pw == "" || pw == null) {
        icon_pw.style.display = "block";
        text_pw.style.display = "block";
        pass.classList.remove('original-border');
        pass.classList.add('border-error');

    }
    else {
        icon_pw.style.display = "none";
        text_pw.style.display = "none";
        pass.classList.remove('border-error');
        pass.classList.add('original-border');
    }

    let emailValue = email.value;

    // if email successfully validated
    if (validateEmail(emailValue)) {
        icon_email.style.display = "none";
        text_email.style.display = "none";
        email.classList.remove('border-error');
        email.classList.add('original-border');
    }
    else {
        icon_email.style.display = "block";
        text_email.style.display = "block";
        email.classList.remove('original-border');
        email.classList.add('border-error');
    }


    return false;
}

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let emailValue = email.value;

//     // if email successfully validated
//     if (validateEmail(emailValue)) {
//         icon_email.style.display = "none";
//         text_email.style.display = "none";
//         email.classList.remove('border-error');
//         email.classList.add('original-border');
//     }
//     else {
//         icon_email.style.display = "block";
//         text_email.style.display = "block";
//         email.classList.remove('original-border');
//         email.classList.add('border-error');
//     }
// });

// // Regex for email validation
// function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }



