const saveBtn =
    document.getElementById("saveBtn");
const clearBtn =
    document.getElementById("clearBtn");
const resetLink =
    document.getElementById("resetLink");
const message =
    document.getElementById("message");
const currentTheme =
    document.getElementById("currentTheme");
const currentStorage =
    document.getElementById("currentStorage");
const statusText =
    document.getElementById("statusText");
function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}
saveBtn.addEventListener("click", function () {
    const theme =
        document.querySelector(
            'input[name="theme"]:checked'
        );
    const storage =
        document.querySelector(
            'input[name="storage"]:checked'
        );
    if (!theme || !storage) {
        message.textContent =
            "Please select a theme and storage method.";
        message.style.color = "#d9534f";
        return;
    }
    const selectedTheme =
        theme.value;
    const selectedStorage =
        storage.value;
    if (selectedStorage === "local") {
        localStorage.setItem(
            "theme",
            selectedTheme
        );
        sessionStorage.removeItem("theme");
        currentStorage.textContent =
            "Local Storage";
    }
    else {
        sessionStorage.setItem(
            "theme",
            selectedTheme
        );
        localStorage.removeItem("theme");
        currentStorage.textContent =
            "Session Storage";
    }
    applyTheme(selectedTheme);
    if (selectedTheme === "dark") {
        currentTheme.textContent = "Dark";
    } else {
        currentTheme.textContent = "Light";
    }
    message.textContent =
        "Preference saved successfully!";
    message.style.color = "#45a66d";
    statusText.textContent =
        "Preferences saved";
});
function loadPreference() {
    let savedTheme = null;
    let savedStorage = null;
    const localTheme =
        localStorage.getItem("theme");
    const sessionTheme =
        sessionStorage.getItem("theme");
    if (localTheme !== null) {
        savedTheme = localTheme;
        savedStorage = "Local Storage";
    }
    else if (sessionTheme !== null) {
        savedTheme = sessionTheme;
        savedStorage = "Session Storage";
    }
    if (savedTheme !== null) {
        applyTheme(savedTheme);
        currentTheme.textContent =
            savedTheme === "dark"
                ? "Dark"
                : "Light";
        currentStorage.textContent =
            savedStorage;
        document.querySelector(
            `input[name="theme"][value="${savedTheme}"]`
        ).checked = true;
        const storageValue =
            savedStorage === "Local Storage"
                ? "local"
                : "session";
        document.querySelector(
            `input[name="storage"][value="${storageValue}"]`
        ).checked = true;
    }
}
function clearPreference() {
    localStorage.removeItem("theme");
    sessionStorage.removeItem("theme");
    applyTheme("light");
    currentTheme.textContent =
        "Not selected";
    currentStorage.textContent =
        "Not selected";
    document.querySelectorAll(
        'input[name="theme"]'
    ).forEach(function (radio) {
        radio.checked = false;
    });
    document.querySelectorAll(
        'input[name="storage"]'
    ).forEach(function (radio) {
        radio.checked = false;
    });
    message.textContent =
        "Preference cleared.";
    message.style.color = "#45a66d";
    statusText.textContent =
        "Preferences reset";
}
clearBtn.addEventListener(
    "click",
    clearPreference
);
resetLink.addEventListener(
    "click",
    clearPreference
);
loadPreference();