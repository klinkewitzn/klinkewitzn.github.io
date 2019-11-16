

var text1a:string = "Die Emission von Europa ist:";
var eu2018:number = 4209.3;

console.log(text1a+eu2018+"kg CO2");

var weltgesamt:number = 37100;
var relativprozent:number = (eu2018/weltgesamt)*100;
var text2:string = "Relativ zur Gesamtemission der Welt verursacht Europa damit";

console.log(text2+relativprozent+"%");

var text3:string = "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um";
var eu2008:number = 4965.7;
var changeeupercent:number = (eu2008/eu2018)*100;

console.log(text3+ changeeupercent+"%"+"verändert");

var text4:string = "2018 im Vergleich zu 2008 sind das";
var changeeunumber:number = (eu2018-eu2008);

console.log(text4+ changeeunumber +"kg CO2");


