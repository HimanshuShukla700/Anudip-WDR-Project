function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskText;

    // mark as complete
    li.onclick = function () {
        li.classList.toggle("done");
    };

    // delete on double click
    li.ondblclick = function () {
        li.remove();
    };

    document.getElementById("taskList").appendChild(li);
    input.value = ""; // clear input
}
