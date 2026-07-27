const loginStudent = JSON.parse(localStorage.getItem("loggedInStudent"));
if (!loginStudent) {
    window.location.href = "login.html";
}
const gradeForm = document.getElementById("gradeForm");
gradeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const studentName = loginStudent.name;
    const rollNumber = loginStudent.prn;
    const javascript = Number(document.getElementById("javascript").value);
    const computerNetworks = Number(document.getElementById("computer-networks").value);
    const compilerConstruction = Number(document.getElementById("compiler-construction").value);
    const dataCompression = Number(document.getElementById("data-compression").value);
    const specialization = Number(document.getElementById("specialization").value);
    const marks = [
        javascript,
        computerNetworks,
        compilerConstruction,
        dataCompression,
        specialization
    ];
    const subjectNames = [
        "JavaScript",
        "Computer Networks",
        "Compiler Construction",
        "Data Compression",
        "Specialization"
    ];
    for (let i = 0; i < marks.length; i++) {
        if (isNaN(marks[i])) {
            alert("Please enter " + subjectNames[i] + " marks.");
            return;
        }
        if (marks[i] < 0 || marks[i] > 100) {
            alert(subjectNames[i] + " marks should be between 0 and 100.");
            return;
        }
    }
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    const percentage = (total / 500) * 100;
    let status = "Pass";
    for (let mark of marks) {
        if (mark < 35) {
            status = "Fail";
            break;
        }
    }
    let grade = "";
    if (status === "Fail") {
        grade = "F";
    }
    else if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    let remarks = "";
    switch (grade) {
        case "A+":
            remarks = "Outstanding";
            break;
        case "A":
            remarks = "Excellent";
            break;
        case "B":
            remarks = "Very Good";
            break;
        case "C":
            remarks = "Good";
            break;
        case "D":
            remarks = "Needs Improvement";
            break;
        default:
            remarks = "Better Luck Next Time";
    }
    const studentResult = {
        studentName,
        rollNumber,
        javascript,
        computerNetworks,
        compilerConstruction,
        dataCompression,
        specialization,
        total,
        percentage: percentage.toFixed(2),
        grade,
        status,
        remarks
    };
    localStorage.setItem(
        "studentResult",
        JSON.stringify(studentResult)
    );
    window.location.href = "result.html";
});