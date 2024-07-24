



document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("phoneError").textContent = "";

    // Get form values
    const namev = document.getElementById('username').value;
    const emailv = document.getElementById('email').value;
    const passwordv = document.getElementById('password').value;
    const confirmPasswordv = document.getElementById('confirmPassword').value;
    const phonev = document.getElementById('phone').value;

    // Validation patterns
    const usernamePattern = /^[a-zA-Z0-9_]{3,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const phonePattern = /^\d{10}$/;

    let isValid = true;

    // Username validation
    if (!usernamePattern.test(namev)) {
        document.getElementById('usernameError').textContent = "Username must contain only letters, numbers, and underscores and be at least 3 characters long.";
        document.getElementById('usernameError').style.display = "block";
        isValid = false;
    }

    // Email validation
    if (!emailPattern.test(emailv)) {
        document.getElementById('emailError').textContent = "Invalid email format.";
        document.getElementById('emailError').style.display = "block";
        isValid = false;
    }

    // Password validation
    if (!passwordPattern.test(passwordv)) {
        document.getElementById('passwordError').textContent = "Password must be at least 6 characters long, contain at least one number, one lowercase and one uppercase letter.";
        document.getElementById('passwordError').style.display = "block";
        isValid = false;
    }

    // Confirm Password validation
    if (passwordv !== confirmPasswordv) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
        document.getElementById('confirmPasswordError').style.display = "block";
        isValid = false;
    }

    // Phone validation
    if (!phonePattern.test(phonev)) {
        document.getElementById('phoneError').textContent = "Phone number must be 10 digits.";
        document.getElementById('phoneError').style.display = "block";
        isValid = false;
    }

    if (isValid) {
        alert("Successfully registered");
    }
});
