let appName = "Password Strength Checker";
function passwordCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
const counter = passwordCounter();
function isPalindrome(password){
    let reverse = password.split("").reverse().join("");
    return password === reverse;
}
const displayResult = function(message, color){
    const result = document.getElementById("result");
    result.innerHTML = message;
    result.style.color = color;
    if(color === "green"){
        result.style.background = "#e8f9ee";
        result.style.border = "2px solid #28a745";
    }
    else if(color === "red"){
        result.style.background = "#ffe8e8";
        result.style.border = "2px solid #dc3545";
    }
    else{
        result.style.background = "#fff4d6";
        result.style.border = "2px solid #ff9800";
    }
};
const updateCount = ()=>{
    document.getElementById("count").innerHTML =
    "Passwords Checked : " + counter();
};
function checkPassword(){
    try{
        let password = document.getElementById("password").value;
        if(password.trim()==""){
            throw "Password cannot be empty.";
        }
        if(password.length < 4){
            throw "Password must contain at least 4 characters.";
        }
        if(isPalindrome(password)){
            displayResult(
                "Weak Password (Palindrome Password)",
                "red"
            );
        }
        else{
            displayResult(
                "Strong Password (Not a Palindrome)",
                "green"
            );
        }
        updateCount();
    }
    catch(error){
        displayResult(error,"orange");
    }
}