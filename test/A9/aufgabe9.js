var eintraege = ["einkaufen gehen", "Familie besuchen", "weiteres"];
var index;
function Remove(ClickedTrash) {
    console.log("This is deleating the task");
    ClickedTrash.parentElement.remove(); // p wird bei click auf Tonne gelöscht
    index--;
}
window.addEventListener("load", function () {
    list();
    document.querySelector("#addTask").addEventListener("click", function () {
        var input = document.querySelector("#input");
        eintraege.push(input.value);
        input.value = "";
        console.log("huhu");
        list();
    });
    function list() {
        document.querySelector("#eintraege").innerHTML = "";
        for (var index = 0; index < eintraege.length; index++) {
            document.querySelector("#eintraege").innerHTML += "<p class=activity >" + "<i class='far fa-circle checkbox'></i>" + "  " + eintraege[index] + "</input>" + "<button onclick=\"Remove(this)\" class='far fa-trash-alt trash'>" + "</button>" + "     " + "</p>" + "<br>";
        }
        document.querySelector("#tasknumber").innerHTML = "" + eintraege.length;
    }
});
/*
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
    }

}
    function DeleteTaskText(ClickedTrash) {
        console.log("This is deleating the task");
        ClickedTrash.parentElement.remove(); // div wird bei click auf Tonne gelöscht
        taskcounter--;
        // Counter
        var element = document.querySelector(".Rahmen");
        var numberofChildren = element.children.length;
        document.querySelector(".items").innerHTML = numberofChildren + " in total";
    }


    // Create a "close" button and append it to each list item
    var myNodelist = document.querySelector("#eintraege");
var index;
for (index = 0; index < myNodelist.length; index++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

});
*/
//# sourceMappingURL=aufgabe9.js.map