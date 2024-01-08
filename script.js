// Get form input values
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
checkRequired([username,email,password,password2]);
checkLength(username, 3, 15);
checkLength(password, 6, 25);
checkEmail(email);
validatePassword(password);
matchPasswords(password,password2);

});

function showError(field, message) {
    const inputField = document.getElementById(field);
    const errorMessage = inputField.nextElementSibling;

    inputField.classList.add('invalid');
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

function showSuccess(field) {
    const inputField = document.getElementById(field);
    inputField.classList.remove('invalid');
    inputField.classList.add('valid');
}

// You can add additional functions or modify the existing ones based on your needs.
function checkRequired (inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input.id, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input.id);
        }
    });
}

function checkLength (input, min, max) {
    if (input.value.length < min) {
        showError(input.id, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input.id, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input.id);
    }
}
const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1); // Capitalize the first letter of input id and remove 'id' suffix.Example:'username' becomes 'Username'
}

function checkEmail(email) {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError('email', 'Invalid email format');
    } else {
        showSuccess('email');
    }
}

function validatePassword(password){

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password.value.trim())) {
        showError('password', 'Invalid password (minimum 8 characters, uppercase, special character, digit)');
    } else {
        showSuccess('password');
    }
}

function matchPasswords(password1,password2){

    // Validate password match
    if (password1 !== password2.value.trim()) {
        showError('password2', 'Passwords do not match');
    } else {
        showSuccess('password2');
    }
}