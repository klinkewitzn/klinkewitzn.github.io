interface Newint {
    animal: string;
    age: number;
    home: string;
}

var Hannes: Newint = {
    animal: "turtle",
    age: 120,
    home: "the sea"
}

//---------------------------------------------------------
interface Entries {
    text: string[];
    checked: boolean[];
}

var todos: Entries = {
    text: ["Lorem", "Ipsum", "Dolor"],
    checked: [true, false, false]
};






todosDOMElement.appendChild(todo);
todosDOMElement.insertBefore(todo, todosDOMElement.childNodes[0]);
//-------------------------------------------------------------------------

function updateCounter(): void {
    // counterDOMElement.innerHTML = todos.text.length + " in total";
    var unchecked: number = 0;
    var checked: number = 0;

    for (var i: number = 0; i < todos.checked.length; i++) {
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
let addtoDotask: Entries = {
    text: inputDOMElement.value, //Input-Feld Eintrag
    checked: false
}; 

todosDOMElement.insertBefore(todo, todosDOMElement.childNodes[0]); //insertBefore Schreibweise