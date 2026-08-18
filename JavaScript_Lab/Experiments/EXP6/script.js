function analyzeText() {
    const text =
        document.getElementById("textInput").value;
    const searchText =
        document.getElementById("searchInput").value;
    document.getElementById("uppercase").textContent =
        text.toUpperCase();
    document.getElementById("lowercase").textContent =
        text.toLowerCase();
    document.getElementById("length").textContent =
        "Number of characters: " + text.length;
    if (searchText.trim() === "") {
        document.getElementById("includes").textContent =
            "Please enter something to search.";
    } else {
        const found =
            text.toLowerCase()
                .includes(searchText.toLowerCase());
        if (found) {
            document.getElementById("includes").innerHTML =
                `<span class="valid">
                    "${searchText}" was found in the text.
                </span>`;
        } else {
            document.getElementById("includes").innerHTML =
                `<span class="invalid">
                    "${searchText}" was not found in the text.
                </span>`;
        }
    }
    const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const tokens =
        text.trim() === ""
            ? []
            : text.trim().split(/\s+/);
    let validEmails = [];
    let invalidEmails = [];
    tokens.forEach(function(token) {
        const email =
            token.replace(/[.,!?;:()]+$/, "");
        if (email.includes("@")) {
            if (emailRegex.test(email)) {
                validEmails.push(email);
            } else {
                invalidEmails.push(email);
            }
        }
    });
    const totalEmails =
        validEmails.length + invalidEmails.length;
    document.getElementById("emailSummary").innerHTML = `
        <div class="count-box">
            <div class="count">
                <strong>Total Emails:</strong>
                ${totalEmails}
            </div>
            <div class="count valid">
                Valid Emails:
                ${validEmails.length}
            </div>
            <div class="count invalid">
                Invalid Emails:
                ${invalidEmails.length}
            </div>
        </div>
    `;
    const validContainer =
        document.getElementById("validEmails");
    validContainer.innerHTML = "";
    if (validEmails.length === 0) {
        validContainer.innerHTML =
            '<span class="invalid">No valid emails found.</span>';
    } else {
        validEmails.forEach(function(email) {
            const span =
                document.createElement("span");
            span.className = "email";
            span.textContent = email;
            validContainer.appendChild(span);
        });
    }
    const invalidContainer =
        document.getElementById("invalidEmails");
    invalidContainer.innerHTML = "";
    if (invalidEmails.length === 0) {
        invalidContainer.innerHTML =
            '<span class="valid">No invalid emails found.</span>';
    } else {
        invalidEmails.forEach(function(email) {
            const span =
                document.createElement("span");
            span.className = "invalid-email";
            span.textContent = email;
            invalidContainer.appendChild(span);
        });
    }
    const words =
        text.trim() === ""
            ? []
            : text.trim().split(/\s+/);
    document.getElementById("wordCount").textContent =
        "Total words: " + words.length;
    const wordContainer =
        document.getElementById("words");
    wordContainer.innerHTML = "";
    words.forEach(function(word) {
        const span =
            document.createElement("span");
        span.className = "word";
        span.textContent = word;
        wordContainer.appendChild(span);
    });
}