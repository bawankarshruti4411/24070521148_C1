const student = JSON.parse(localStorage.getItem("studentResult"));
const resultCard = document.getElementById("resultCard");
if (student === null) {
    resultCard.innerHTML = `
        <h2 style="color:red;text-align:center;">
            No Student Data Found
        </h2>
        <p style="text-align:center;">
            Please enter student details first.
        </p>
    `;
}
else {
    resultCard.innerHTML = `
    <table>
        <tr>
            <th colspan="2">
                Student Information
            </th>
        </tr>
        <tr>
            <td><strong>Student Name</strong></td>
            <td>${student.studentName}</td>
        </tr>
        <tr>
            <td><strong>Roll Number</strong></td>
            <td>${student.rollNumber}</td>
        </tr>
    </table>
    <br>
    <table>
        <tr>
            <th>Subject</th>
            <th>Marks</th>
        </tr>
        <tr>
            <td>JavaScript</td>
            <td>${student.javascript}</td>
        </tr>
        <tr>
            <td>Computer Networks</td>
            <td>${student.computerNetworks}</td>
        </tr>
        <tr>
            <td>Compiler Construction</td>
            <td>${student.compilerConstruction}</td>
        </tr>
        <tr>
            <td>Data Compression</td>
            <td>${student.dataCompression}</td>
        </tr>
        <tr>
            <td>Specialization</td>
            <td>${student.specialization}</td>
        </tr>
    </table>
    <br>
    <table>
        <tr>
            <th colspan="2">
                Result Summary
            </th>
        </tr>
        <tr>
            <td><strong>Total Marks</strong></td>
            <td>${student.total} / 500</td>
        </tr>
        <tr>
            <td><strong>Percentage</strong></td>
            <td>${student.percentage}%</td>
        </tr>
        <tr>
            <td><strong>Grade</strong></td>
            <td class="grade">${student.grade}</td>
        </tr>
        <tr>
            <td><strong>Status</strong></td>
            <td class="${student.status === "Pass" ? "success" : "fail"}">
                ${student.status}
            </td>
        </tr>
        <tr>
            <td><strong>Remarks</strong></td>
            <td>${student.remarks}</td>
        </tr>
    </table>
    `;
}
function goBack() {
    window.location.href = "index.html";
}