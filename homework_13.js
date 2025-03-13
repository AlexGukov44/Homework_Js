let formSignUp = document.getElementById("signupForm");

formSignUp.addEventListener("submit", function(event) {
    event.preventDefault();

    // список полей 

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // блок для ошибок 

    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    // сброс текста в ошибке

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let isValid = true;

    if (!username) {
        usernameError.textContent = "Введите имя пользователя";
        isValid = false;
    } else if (password.length < 4 ) {  // вообще я бы сделал не менее двух символов ( есть имя Ян )
        usernameError.textContent = "Имя должен быть не менее 4 символов";
        username.style.borderColor = "red";
        isValid = false;
    }

    const emailPattern = /^[s@]+@[^\s@]+.[^\s@]+$/;

    if (!email) {
        emailError.textContent = "Введите email";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Некорректный email";
        isValid = false;
    }

    if (!password) {
        passwordError.textContent = "Введите пароль";
        isValid = false;
    } else if (password.length < 6 ) {
        passwordError.textContent = "Пароль должен быть не менее 6 символов";
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "подтвердите пароль";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "пароли не совпадают";
        isValid = false;
    }
    
    if (isValid) {
        alert("форма отправлена успешно!");
    }
});

