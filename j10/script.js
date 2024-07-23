document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log("you clicked on submit");

    // if(validemail && validusername && validphone &&validpassword){
    //     console.log('phone,email,password and username are valid. Submitting the form')
    // }
    // else{
    //     console.log('one of phone,email,password or users are not valid. Hence not submitting the form.please correct the errors and try again')
    // }


    // Clear previous errors
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmpasswordError").textContent = "";
    document.getElementById("phoneError").textContent = "";

    // Get form values
    const name = document.getElementById('#name').value;
    const email = document.getElementById('#email').value;
    const password = document.getElementById('#password').value;
    const confirmPassword = document.getElementById('#confirmPassword').value;
    const phone = document.getElementById('phone').value;

    // Validation patterns
    const username = /^[a-zA-Z0-9_]{3,}$/
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const passwordpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
    const phonepattern = /^\d{1,10}$/

    let isvalid = true;

    // Name validation
    if (username.test(name)) {
        document.getElementById('nameError').textContent = `Name must contain only letters ${name}`;
        isvalid = false;
    }

    // Email validation
    if (emailpattern.test(email)) {
        document.getElementById('emailError').textContent = `Invalid email format ${email}`;
        isvalid = false;
    }
    // Password validation
    if (passwordpattern.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        isvalid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isvalid = false;
    }

    // Phone validation
    if (!phonepattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits.';
        isvalid = false;
    }
    if (isvalid) {
        alert("successfully registered")
    }
});

