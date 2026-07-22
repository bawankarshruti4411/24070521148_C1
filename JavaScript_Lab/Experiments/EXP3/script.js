const gradeForm = document.getElementById("gradeForm");
gradeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("studentName").value.trim();
    const rollNumber = document.getElementById("rollNumber").value.trim();
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
    if (name === "") {
        alert("Please enter Student Name.");
        return;
    }
    if (rollNumber === "") {
        alert("Please enter Roll Number.");
        return;
    }
    for (let mark of marks) {
        if (isNaN(mark)) {
            alert("Please enter all subject marks.");
            return;
        }
        if (mark < 0 || mark > 100) {
            alert("Marks should be between 0 and 100.");
            return;
        }
    }
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = (total / 500) * 100;
    let status = "Pass";
    for (let mark of marks) {
        if (mark < 35) {
            status = "Fail";
            break;
        }
    }
    let grade;
    if (status === "Fail") {
        grade = "F";
    } else if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    let remarks;
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
        name,
        rollNumber,
        total,
        percentage: percentage.toFixed(2),
        grade,
        status,
        remarks
    };
    localStorage.setItem("studentResult", JSON.stringify(studentResult));
    displayResult(studentResult);
});
function displayResult(data) {
    const result = document.getElementById("result");
    result.style.display = "block";
    result.innerHTML = `
        <h2 style="text-align:center; margin-bottom:15px;">
            Student Result
        </h2>
        <table>
            <tr>
                <td><strong>Student Name</strong></td>
                <td>${data.name}</td>
            </tr>
            <tr>
                <td><strong>Roll Number</strong></td>
                <td>${data.rollNumber}</td>
            </tr>
            <tr>
                <td><strong>Total Marks</strong></td>
                <td>${data.total} / 500</td>
            </tr>
            <tr>
                <td><strong>Percentage</strong></td>
                <td>${data.percentage}%</td>
            </tr>
            <tr>
                <td><strong>Grade</strong></td>
                <td>${data.grade}</td>
            </tr>
            <tr>
                <td><strong>Status</strong></td>
                <td class="${data.status === "Pass" ? "success" : "fail"}">
                    ${data.status}
                </td>
            </tr>
            <tr>
                <td><strong>Remarks</strong></td>
                <td>${data.remarks}</td>
            </tr>
        </table>
    `;
}
window.onload = function () {
    const savedData = localStorage.getItem("studentResult");
    if (savedData) {
        displayResult(JSON.parse(savedData));
    }
};