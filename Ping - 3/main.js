var message_error = document.querySelector(".error-message");
const form = document.querySelector('.container form');
const email = document.querySelector('.container form input[type = email]');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = email.value;
    console.log(email.value);


    // if email successfully validated
    if (validateEmail(emailValue)) {
        message_error.style.display = "none";
        email.classList.remove('error');
    }
    else {
        message_error.style.display = "block";
        email.classList.add('error');
    }
});


// Regex for email validation
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

