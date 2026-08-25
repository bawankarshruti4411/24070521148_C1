const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement("li");
    li.className = "task";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "task-buttons";
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });
    editBtn.addEventListener("click", function() {
        const currentText = span.textContent;
        const newText = prompt(
            "Edit your task:",
            currentText
        );
        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText.trim();
        }
    });
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });
    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(buttonContainer);
    taskList.appendChild(li);
    taskInput.value = "";
    taskInput.focus();
}