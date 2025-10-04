const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Handle form submit
function handleSubmit(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
}

// Check required inputs
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            input.name === 'password2'
            ? showError(input, 'Passwords do not match')
            : showError(input, `${capitalize(input.name)} is required`);
        }
    });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${capitalize(input.name)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${capitalize(input.name)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');

    const small = formControl.querySelector('small');
    small.textContent = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

// Check if email is valid
function isValidEmail(email) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return String(email).toLowerCase().match(regEx);
}

// Capitalize
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// Event listeners
form.addEventListener('submit', handleSubmit);