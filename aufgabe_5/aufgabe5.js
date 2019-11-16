var text1a = "Die Emission von Europa ist:";
var eu2018 = 4209.3;
console.log(text1a + eu2018 + "kg CO2");
var weltgesamt = 37100;
var relativprozent = (eu2018 / weltgesamt) * 100;
var text2 = "Relativ zur Gesamtemission der Welt verursacht Europa damit";
console.log(text2 + relativprozent + "%");
var text3 = "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um";
var eu2008 = 4965.7;
var changeeupercent = (eu2008 / eu2018) * 100;
console.log(text3 + changeeupercent + "%" + "verändert");
var text4 = "2018 im Vergleich zu 2008 sind das";
var changeeunumber = (eu2018 - eu2008);
console.log(text4 + changeeunumber + "kg CO2");
//# sourceMappingURL=aufgabe5.js.map