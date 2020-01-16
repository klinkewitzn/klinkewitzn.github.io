var Hannes = {
    animal: "turtle",
    age: 120,
    home: "the sea"
};
var todos = {
    text: ["Lorem", "Ipsum", "Dolor"],
    checked: [true, false, false]
};
todosDOMElement.appendChild(todo);
todosDOMElement.insertBefore(todo, todosDOMElement.childNodes[0]);
//-------------------------------------------------------------------------
function updateCounter() {
    // counterDOMElement.innerHTML = todos.text.length + " in total";
    var unchecked = 0;
    var checked = 0;
    for (var i = 0; i < todos.checked.length; i++) {
        if (todos.checked[i] == true) {
            checked++;
        }
        else {
            unchecked++;
        }
    }
    counterDOMElement.innerHTML = todos.text.length + " total" + "|" + unchecked + " open" + "|" + checked + " done";
}
//--------------------
var addtoDotask = {
    text: inputDOMElement.value,
    checked: false
};
todosDOMElement.insertBefore(todo, todosDOMElement.childNodes[0]); //insertBefore Schreibweise
//# sourceMappingURL=übg10.js.map