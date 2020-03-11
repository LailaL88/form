const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");
const classn = document.getElementsByClassName("form-control");
form.addEventListener("submit", (e) => {
    checkInputs();
    for (item of classn) {
        if (item.className === "form-control error") {
            e.preventDefault();
        }
    }
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if (usernameValue === "") {
        setError(username, "Username can not be blank");
    } else {
        setSuccess(username);
    }

    if (emailValue === "") {
        setError(email, "Email can not be blank");
    } else if (!isEmail(emailValue)) {
        setError(email, "Email is not valid");
    } else {
        setSuccess(email);
    }

    if (passwordValue === "") {
        setError(password, "Password can not be blank");
    } else if (passwordValue.length < 5) {
        setError(password, "Password can not be less than 5 characters")
    } else if (passwordValue === "password") {
        setError(password, 'Password can not be "password"')
    } else {
        setSuccess(password);
    }

    if (passwordCheckValue === "") {
        setError(passwordCheck, "This field can not be blank");
    } else if (passwordValue !== passwordCheckValue) {
        setError(passwordCheck, "Passwords dont match");
    } else {
        setSuccess(passwordCheck);
    }

}

function setError(element, message) {
    const formControl = element.parentElement;
    const p = formControl.querySelector("p");

    p.innerText = message;

    formControl.className = "form-control error";

}

function setSuccess(element) {
    const formControl = element.parentElement;
    formControl.className = "form-control success";

}

function isEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}