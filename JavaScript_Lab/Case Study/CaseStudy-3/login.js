const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    const studentName = document.getElementById("studentName").value.trim();
    const prn = document.getElementById("prn").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    message.innerHTML = "";

    if(studentName === ""){
        message.innerHTML = "Please enter Student Name.";
        return;
    }
    if(prn === ""){
        message.innerHTML = "Please enter PRN Number.";
        return;
    }

    if(!/^[0-9]+$/.test(prn)){
        message.innerHTML = "PRN should contain only digits.";
        return;
    }
    if(password.length < 8){
        message.innerHTML =
        "Password must contain at least 8 characters.";
        return;
    }
    if(!/[A-Z]/.test(password)){
        message.innerHTML =
        "Password must contain at least one uppercase letter.";
        return;
    }
    if(!/[a-z]/.test(password)){
        message.innerHTML =
        "Password must contain at least one lowercase letter.";
        return;
    }
    if(!/[0-9]/.test(password)){
        message.innerHTML =
        "Password must contain at least one number.";
        return;
    }
    if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
        message.innerHTML =
        "Password must contain at least one special character.";
        return;
    }
    const student = {
        name: studentName,
        prn: prn
    };
    localStorage.setItem(
        "loggedInStudent",
        JSON.stringify(student)
    );
    window.location.href = "index.html";
});