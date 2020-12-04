var icon_error = document.querySelector(".error-icon");
var text_error = document.querySelector(".error-text");
const form = document.querySelector('.container form');
const email = document.querySelector('.container form input[type = email]');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = email.value;
    console.log(email.value);


    // if email successfully validated
    if (validateEmail(emailValue)) {
        icon_error.style.display = "none";
        text_error.style.display = "none";
        email.classList.remove('border-error');
    }
    else {
        icon_error.style.display = "block";
        text_error.style.display = "block";
        email.classList.add('border-error');
    }
});


// Regex for email validation
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

