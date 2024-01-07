
const form = document.getElementById("userForm");


form.addEventListener("submit",e=>{
    e.preventDefault();
    validateForm();
})

const validateForm = ()=>{
    const username = document.getElementById("username").value,
          email = document.getElementById("email").value,
          password = document.getElementById("password").value,
        errorMessage = document.getElementById("error-message");

    // Resetting the error message
    errorMessage.textContent = "";

//     validate username
    if (username === "" || username.length < 3) {
        errorMessage.textContent += "Username must be at least 3 characters long.\n";
    }

//     validate email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent += "Invalid email format.\n";
    }

// validate password
    if (password === "" || password.length < 8) {
        errorMessage.textContent += "Password must be at least 8 characters long.\n";
    }
};