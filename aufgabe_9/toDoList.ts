var eintraege: string[] = ["einkaufen gehen", "Familie besuchen", "weiteres"];





window.addEventListener("load", function(): void {

    list();

    
    document.querySelector("#addtask").addEventListener("click", function(): void {

        var input: HTMLInputElement = document.querySelector("#input");
        eintraege.push(input.value);
        input.value = "";
        console.log("huhu");
        list();

    });

    function list(): void {
        document.querySelector("#eintraege").innerHTML = "";
        for (var index: number = 0; index < eintraege.length; index++){
            document.querySelector("#eintraege").innerHTML += "<p>" + "<i class='far fa-circle'></i>" + eintraege[index]+"</p>";
        }
        document.querySelector("#tasknumber").innerHTML = "" + eintraege.length;
    
    }
    
});
/* 
document.querySelector("#eintraege").innerHTML = "";
in Schleife
document.querySelector(".elemt:last-child fa-check").addEventListener("click", )

var element: HTMLElement;
element=document.querySelector("#content");
var new=document.createElement("div");
new.id="bla";
element.appendChild(new);
-----
button.name="PushMe"
console.log(element.name)
------
handler
html element
JS HTML DOM!!!! W3 schools
 */
