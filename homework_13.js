let formSignUp = document.getElementById("signupForm");

formSignUp.addEventListener("submit", function(event) {
    event.preventDefault();

    // список полей 

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    // блок для ошибок 

    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    // сброс текста в ошибке   и стилей 

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    username.style.borderColor = "";
    email.style.borderColor = "";
    password.style.borderColor = "";
    confirmPassword.style.borderColor = "";

    let isValid = true;

    if (!username.value) {
        usernameError.textContent = "Введите имя пользователя";
        username.style.borderColor = "red";
        isValid = false;
    } else if (username.value.length < 4 ) {  // вообще я бы сделал не менее двух символов ( есть имя Ян )
        usernameError.textContent = "Имя должен быть не менее 4 символов";
        username.style.borderColor = "red";
        isValid = false;
    } else {
        username.style.borderColor = "green";
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value) {
        emailError.textContent = "Введите email";
        email.style.borderColor = "red";
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Некорректный email";
        email.style.borderColor = "red";
        isValid = false;
    } else {
        email.style.borderColor = "green";
    }


    if (!password.value) {
        passwordError.textContent = "Введите пароль";
        password.style.borderColor = "red";
        isValid = false;
    } else if (password.value.length < 6 ) {
        passwordError.textContent = "Пароль должен быть не менее 6 символов";
        password.style.borderColor = "red";
        isValid = false;
    } else {
        password.style.borderColor = "green";
    }

    if (!confirmPassword.value) {
        confirmPasswordError.textContent = "Подтвердите пароль";
        confirmPassword.style.borderColor = "red";
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Пароли не совпадают";
        confirmPassword.style.borderColor = "red";
        isValid = false;
    } else {
        confirmPassword.style.borderColor = "green";
    }
    
    if (isValid) {
        alert("форма отправлена успешно!");
    }
});

