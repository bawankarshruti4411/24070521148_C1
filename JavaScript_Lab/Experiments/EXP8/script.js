const form = document.getElementById("gymForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const age = document.getElementById("age");
const plan = document.getElementById("plan");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const mobileError = document.getElementById("mobileError");
const ageError = document.getElementById("ageError");
const planError = document.getElementById("planError");
const successMessage = document.getElementById("successMessage");
function validateName() {
    const name = fullName.value.trim();
    if (name === "") {
        nameError.textContent =
            "Please enter your full name.";
        fullName.classList.add("invalid");
        fullName.classList.remove("valid");
        return false;
    }
    if (name.length < 3) {
        nameError.textContent =
            "Name must contain at least 3 characters.";
        fullName.classList.add("invalid");
        fullName.classList.remove("valid");
        return false;
    }
    if (!/^[A-Za-z ]+$/.test(name)) {
        nameError.textContent =
            "Name can contain only letters and spaces.";
        fullName.classList.add("invalid");
        fullName.classList.remove("valid");
        return false;
    }
    nameError.textContent = "";
    fullName.classList.remove("invalid");
    fullName.classList.add("valid");
    return true;
}
function validateEmail() {
    const emailValue =
        email.value.trim();
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === "") {
        emailError.textContent =
            "Please enter your email address.";
        email.classList.add("invalid");
        email.classList.remove("valid");
        return false;
    }
    if (!emailPattern.test(emailValue)) {
        emailError.textContent =
            "Please enter a valid email address.";
        email.classList.add("invalid");
        email.classList.remove("valid");
        return false;
    }
    emailError.textContent = "";
    email.classList.remove("invalid");
    email.classList.add("valid");
    return true;
}
function validateMobile() {
    const mobileValue =
        mobile.value.trim();
    if (mobileValue === "") {
        mobileError.textContent =
            "Please enter your mobile number.";
        mobile.classList.add("invalid");
        mobile.classList.remove("valid");
        return false;
    }
    if (!/^[0-9]{10}$/.test(mobileValue)) {
        mobileError.textContent =
            "Mobile number must contain exactly 10 digits.";
        mobile.classList.add("invalid");
        mobile.classList.remove("valid");
        return false;
    }
    mobileError.textContent = "";
    mobile.classList.remove("invalid");
    mobile.classList.add("valid");
    return true;
}
function validateAge() {
    const ageValue =
        Number(age.value);
    if (age.value === "") {
        ageError.textContent =
            "Please enter your age.";
        age.classList.add("invalid");
        age.classList.remove("valid");
        return false;
    }
    if (ageValue < 10 || ageValue > 100) {
        ageError.textContent =
            "Age must be between 10 and 100.";
        age.classList.add("invalid");
        age.classList.remove("valid");
        return false;
    }
    ageError.textContent = "";
    age.classList.remove("invalid");
    age.classList.add("valid");
    return true;
}
function validatePlan() {
    if (plan.value === "") {
        planError.textContent =
            "Please select a membership plan.";
        plan.classList.add("invalid");
        plan.classList.remove("valid");
        return false;
    }
    planError.textContent = "";
    plan.classList.remove("invalid");
    plan.classList.add("valid");
    return true;
}
fullName.addEventListener(
    "input",
    validateName
);
email.addEventListener(
    "input",
    validateEmail
);
mobile.addEventListener(
    "input",
    validateMobile
);
age.addEventListener(
    "input",
    validateAge
);
plan.addEventListener(
    "change",
    validatePlan
);
form.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        const nameValid =
            validateName();
        const emailValid =
            validateEmail();
        const mobileValid =
            validateMobile();
        const ageValid =
            validateAge();
        const planValid =
            validatePlan();
        if (
            nameValid &&
            emailValid &&
            mobileValid &&
            ageValid &&
            planValid
        ) {
            successMessage.textContent =
                "✓ Welcome to FitZone! Your admission form has been submitted successfully.";
            successMessage.classList.add("show");e
            console.log("===== GYM ADMISSION =====");
            console.log(
                "Full Name:",
                fullName.value
            );
            console.log(
                "Email:",
                email.value
            );
            console.log(
                "Mobile Number:",
                mobile.value
            );
            console.log(
                "Age:",
                age.value
            );
            console.log(
                "Membership Plan:",
                plan.value
            );
            form.reset();
            fullName.classList.remove("valid");
            email.classList.remove("valid");
            mobile.classList.remove("valid");
            age.classList.remove("valid");
            plan.classList.remove("valid");
            setTimeout(function() {
                successMessage.classList.remove("show");
            }, 5000);
        } else {
            successMessage.classList.remove("show");
        }
    }
);