function performBasicOperations() {
    let str = document.getElementById("basicString").value;
    let result = document.getElementById("basicResult");
    if (str.trim() === "") {
        result.style.display = "block";
        result.innerHTML = "⚠️ Please enter a string.";
        return;
    }
    let substring = str.substring(0, 5);
    let position = str.indexOf("JavaScript");
    let words = str.split(" ");
    let replaced = str.replace("JavaScript", "World");
    result.style.display = "block";
    result.innerHTML = `
        <strong>Original String:</strong> ${str}<br>
        <strong>Length:</strong> ${str.length}<br>
        <strong>Uppercase:</strong> ${str.toUpperCase()}<br>
        <strong>Lowercase:</strong> ${str.toLowerCase()}<br>
        <strong>substring(0, 5):</strong> ${substring}<br>
        <strong>indexOf("JavaScript"):</strong> ${position}<br>
        <strong>split(" "):</strong> ${words.join(" | ")}<br>
        <strong>replace():</strong> ${replaced}
    `;
}
function reverseString() {
    let str = document.getElementById("reverseInput").value;
    let result = document.getElementById("reverseResult");
    if (str.trim() === "") {
        result.style.display = "block";
        result.innerHTML = "⚠️ Please enter a string.";
        return;
    }
    let reversed = str.split("").reverse().join("");
    result.style.display = "block";
    result.innerHTML = `
        <strong>Original String:</strong> ${str}<br>
        <strong>Reversed String:</strong> ${reversed}
    `;
}
function countVowels() {
    let paragraph = document.getElementById("paragraphInput").value;
    let result = document.getElementById("vowelResult");
    if (paragraph.trim() === "") {
        result.style.display = "block";
        result.innerHTML = "⚠️ Please enter a paragraph.";
        return;
    }
    let count = 0;
    for (let character of paragraph.toLowerCase()) {
        if ("aeiou".includes(character)) {
            count++;
        }
    }
    result.style.display = "block";
    result.innerHTML = `
        <strong>Number of vowels:</strong> ${count} 🎉
    `;
}