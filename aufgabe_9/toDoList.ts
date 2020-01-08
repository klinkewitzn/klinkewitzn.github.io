var index = 0;
window.addEventListener("load", function () {
    document.querySelector(".addButton").addEventListener("click", AddTaskText);
    document.querySelector(".items").addEventListener("click", AddTaskText);
});
function AddTaskText() {
    var newtask = document.querySelector(".newtask").value;
    console.log(newtask);
    addTaskToList(newtask);
    var element = document.querySelector(".Rahmen");
    var numberofChildren = element.children.length;
    index = numberofChildren;
    console.log("Die Anzahl der To-Dos lautet:" + numberofChildren);
    document.querySelector(".items").innerHTML = numberofChildren + " in total";
}
function addTaskToList(newTaskValue) {
    var addElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    addElement.setAttribute("id", "TaskId" + index); // Template konstruiert
    var myHtmlTemplate = ""; // Template Inhalte
    myHtmlTemplate += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + index + "\"></button>";
    myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + index + "\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + index + "\"></button>";
    addElement.innerHTML = myHtmlTemplate;
    document.querySelector(".Rahmen").appendChild(addElement); // Hinzufügen vom Template
    console.log("addTasktoList:" + newTaskValue);
}
function DeleteTaskText(ClickedTrash) {
    console.log("This is deleating the task");
    ClickedTrash.parentElement.remove(); // div wird bei click auf Tonne gelöscht
    index--;
    // Counter
    var element = document.querySelector(".Rahmen");
    var numberofChildren = element.children.length;
    document.querySelector(".items").innerHTML = numberofChildren + " in total";
}
function CheckedButton(ClickedButton) {
    if (ClickedButton.classList.contains("fa-circle")) {
        ClickedButton.classList.remove("fa-circle");
        ClickedButton.classList.add("fa-check-circle");
    }
    else {
        ClickedButton.classList.remove("fa-check-circle");
        ClickedButton.classList.add("fa-circle");
    }
}