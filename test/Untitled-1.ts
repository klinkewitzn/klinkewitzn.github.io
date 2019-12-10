var test:string = "Hallo";
var welt:string = "Welt";

var zahl:number = 2000;
var zahl2:number = 2000;
var zahl3:number = 20000
var prozent:number = (zahl2/zahl)*100;


console.log(prozent+"%");

function myFunction() {
            alert("Ich wurde geklickt!");
}

document.querySelector("h1").innerHTML="Meine neue Überschrift";

if ( zahl == zahl2) {console.log("varzahl is varzahl2");}
if (zahl >20){console.log(zahl+" ist größer als 20")}
if (zahl !=zahl2){console.log("ja stimmt")}
if (zahl3 ==(zahl2-1980)){console.log("richtig")}

//logische Operatoren
if (zahl ==zahl3 &&zahl !=zahl2){console.log("zahl1 ist gleich zahl3,aber")}
if (zahl ==zahl3 || zahl !=zahl3){console.log("zahl1 ist gleich zahl3,oder nicht")}
//eine Bedingung  und dazugehörige Ausgabe, "ansonsten"
if (zahl == zahl3){console.log("zahl 1 ist gleich zahl 3")} else{console.log("zahl 1 ist ungleich zahl 3")}
//2 mögliche bedingungen (&zugehörige ausgaben)+ 3. ausgabe ("ansonsten")
if (zahl != zahl2 ){console.log("zahl 1 ist ungleich zahl 2")} 
else if (zahl ==zahl2){console.log("zahl 1 ist gleich zahl 2")} 
else {console.log ("nichts von beidem")}u