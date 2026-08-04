let appName = "Palindrome Checker";
function visitCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = visitCounter();
function isPalindrome(text) {
    let cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}
const displayMessage = function(message, color) {
    const result = document.getElementById("result");
    result.innerHTML = message;
    result.style.color = color;

};
const updateCounter = () => {
    document.getElementById("counter").innerHTML =
        "Checked " + counter() + " time(s)";
};
function checkPalindrome() {
    try {
        let input = document.getElementById("word").value;
        if (input.trim() === "") {
            throw "Input cannot be empty.";
        }
        if (isPalindrome(input)) {
            displayMessage(
                `"${input}" is a Palindrome`,
                "green"
            );
        } else {
            displayMessage(
                `"${input}" is NOT a Palindrome`,
                "red"
            );
        }
        updateCounter();
    }
    catch(error) {
        displayMessage(error, "orange");
    }
}