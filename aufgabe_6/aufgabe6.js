/*--------------------Europa------------------------*/
var text1eu = "Die Emission von Europa ist: ";
var eu2018 = 4209.3;
console.log(text1eu + eu2018 + "kg CO2");
var weltgesamt = 37100;
var relativprozent = (eu2018 / weltgesamt) * 100;
var text2eu = "Relativ zur Gesamtemission der Welt verursacht Europa damit ";
console.log(text2eu + relativprozent + "%");
var text3eu = "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ";
var eu2008 = 4965.7;
var changeeupercent = ((eu2018 / eu2008) * 100) - 100;
console.log(text3eu + changeeupercent + "%" + "verändert");
var text4eu = "2018 im Vergleich zu 2008 sind das ";
var changeeunumber = (eu2018 - eu2008);
console.log(text4eu + changeeunumber + "kg CO2");
/* ---------------Nordamerika------------------*/
var text1na = "Die Emission von Nordamerika ist: ";
var na2018 = 6035.6;
console.log(text1na + na2018 + "kg CO2");
var weltgesamt = 37100;
var narelativprozent = (na2018 / weltgesamt) * 100;
var text2na = "Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ";
console.log(text2na + narelativprozent + "%");
var text3na = "Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var na2008 = 6600.4;
var changenapercent = ((na2018 / na2008) * 100) - 100;
console.log(text3na + changenapercent + "%" + "verändert");
var text4na = "2018 im Vergleich zu 2008 sind das ";
var changenanumber = (na2018 - na2008);
console.log(text4na + changenanumber + "kg CO2");
/* Südamerika*/
var text1sa = "Die Emission von Südamerika ist: ";
var sa2018 = 1261.5;
console.log(text1sa + sa2018 + "kg CO2");
var weltgesamt = 37100;
var sarelativprozent = (sa2018 / weltgesamt) * 100;
var text2sa = "Relativ zur Gesamtemission der Welt verursacht Südamerika damit ";
console.log(text2sa + sarelativprozent + "%");
var text3sa = "Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var sa2008 = 6600.4;
var changesapercent = ((sa2018 / sa2008) * 100) - 100;
console.log(text3sa + changesapercent + "%" + "verändert");
var text4sa = "2018 im Vergleich zu 2008 sind das ";
var changesanumber = (sa2018 - sa2008);
console.log(text4sa + changesanumber + "kg CO2");
/*Afrika */
var text1af = "Die Emission von Afrika ist: ";
var af2018 = 1235.5;
console.log(text1af + af2018 + "kg CO2");
var weltgesamt = 37100;
var afrelativprozent = (af2018 / weltgesamt) * 100;
var text2af = "Relativ zur Gesamtemission der Welt verursacht Afrika damit ";
console.log(text2af + afrelativprozent + "%");
var text3af = "Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var af2008 = 1028;
var changeafpercent = ((af2018 / af2008) * 100) - 100;
console.log(text3af + changeafpercent + "%" + "verändert");
var text4af = "2018 im Vergleich zu 2008 sind das ";
var changeafnumber = (af2018 - af2008);
console.log(text4af + changeafnumber + "kg CO2");
/*Asien */
var text1asia = "Die Emission von Asien ist: ";
var asia2018 = 16274.1;
console.log(text1asia + asia2018 + "kg CO2");
var weltgesamt = 37100;
var asiarelativprozent = (asia2018 / weltgesamt) * 100;
var text2asia = "Relativ zur Gesamtemission der Welt verursacht Asien damit ";
console.log(text2asia + asiarelativprozent + "%");
var text3asia = "Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ";
var asia2008 = 12954.7;
var changeasiapercent = ((asia2018 / asia2008) * 100) - 100;
console.log(text3asia + changeasiapercent + "%" + "verändert");
var text4asia = "2018 im Vergleich zu 2008 sind das ";
var changeasianumber = (asia2018 - asia2008);
console.log(text4asia + changeasianumber + "kg CO2");
/*Australien*/
var text1au = "Die Emission von Australien ist: ";
var au2018 = 2100.5;
console.log(text1au + au2018 + "kg CO2");
var weltgesamt = 37100;
var aurelativprozent = (au2018 / weltgesamt) * 100;
var text2au = "Relativ zur Gesamtemission der Welt verursacht Australien damit ";
console.log(text2au + aurelativprozent + "%");
var text3au = "Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ";
var au2008 = 1993;
var changeaupercent = ((au2018 / au2008) * 100) - 100;
console.log(text3au + changeaupercent + "%" + "verändert");
var text4au = "2018 im Vergleich zu 2008 sind das ";
var changeaunumber = (au2018 - au2008);
console.log(text4au + changeaunumber + "kg CO2");
//Beginn Aufgabe 6
//Nordamerika
function nordamerikaheading() {
    document.querySelector(".titleRegion").innerHTML = "North America";
}
function nordamerikatext() {
    document.querySelector(".titleRegion2").innerHTML = "North America";
}
function naabsolute() {
    document.querySelector(".absolute").innerHTML = na2018 + "";
}
function narelative() {
    var weltgesamt = 37100;
    var narelativprozent = (na2018 / weltgesamt) * 100;
    document.querySelector(".relative").innerHTML = narelativprozent.toFixed(2) + "%";
}
function growthperc() {
    document.querySelector(".growthperc").innerHTML = "" + changenapercent.toFixed(2) + "%";
}
function growthabs() {
    document.querySelector(".growthabs").innerHTML = "" + changenanumber.toFixed(2);
    document.querySelector(".chart").setAttribute('style', 'height:' + narelativprozent + "%");
}
document.querySelector(".northamerica").addEventListener("click", nordamerikaheading);
document.querySelector(".northamerica").addEventListener("click", nordamerikatext);
document.querySelector(".northamerica").addEventListener("click", naabsolute);
document.querySelector(".northamerica").addEventListener("click", narelative);
document.querySelector(".northamerica").addEventListener("click", growthperc);
document.querySelector(".northamerica").addEventListener("click", growthabs);
//Südamerika
function südamerikaheading() {
    document.querySelector(".titleRegion").innerHTML = "South America";
}
function südamerikatext() {
    document.querySelector(".titleRegion2").innerHTML = "South America";
}
function saabsolute() {
    document.querySelector(".absolute").innerHTML = sa2018 + "";
}
function sarelative() {
    var weltgesamt = 37100;
    var sarelativprozent = (sa2018 / weltgesamt) * 100;
    document.querySelector(".relative").innerHTML = sarelativprozent.toFixed(2) + "%";
}
function sagrowthperc() {
    document.querySelector(".growthperc").innerHTML = changesapercent.toFixed(2) + "%";
}
function sagrowthabs() {
    document.querySelector(".growthabs").innerHTML = changesanumber.toFixed(2) + "";
    document.querySelector(".chart").setAttribute('style', 'height:' + sarelativprozent + "%");
}
document.querySelector(".southamerica").addEventListener("click", südamerikaheading);
document.querySelector(".southamerica").addEventListener("click", südamerikatext);
document.querySelector(".southamerica").addEventListener("click", saabsolute);
document.querySelector(".southamerica").addEventListener("click", sarelative);
document.querySelector(".southamerica").addEventListener("click", sagrowthperc);
document.querySelector(".southamerica").addEventListener("click", sagrowthabs);
//Afrika
function afrikaheading() {
    document.querySelector(".titleRegion").innerHTML = "Africa";
}
function afrikatext() {
    document.querySelector(".titleRegion2").innerHTML = "Africa";
}
function afabsolute() {
    document.querySelector(".absolute").innerHTML = af2018 + "";
}
function afrelative() {
    var weltgesamt = 37100;
    var afrelativprozent = (af2018 / weltgesamt) * 100;
    document.querySelector(".relative").innerHTML = afrelativprozent.toFixed(2) + "%";
}
function afgrowthperc() {
    document.querySelector(".growthperc").innerHTML = changeafpercent.toFixed(2) + "%";
}
function afgrowthabs() {
    document.querySelector(".growthabs").innerHTML = changeafnumber.toFixed(2) + "";
    document.querySelector(".chart").setAttribute('style', 'height:' + afrelativprozent + "%");
}
document.querySelector(".africa").addEventListener("click", afrikaheading);
document.querySelector(".africa").addEventListener("click", afrikatext);
document.querySelector(".africa").addEventListener("click", afabsolute);
document.querySelector(".africa").addEventListener("click", afrelative);
document.querySelector(".africa").addEventListener("click", afgrowthperc);
document.querySelector(".africa").addEventListener("click", afgrowthabs);
//Asien
function asienheading() {
    document.querySelector(".titleRegion").innerHTML = "Asia";
}
function asientext() {
    document.querySelector(".titleRegion2").innerHTML = "Asia";
}
function asiaabsolute() {
    document.querySelector(".absolute").innerHTML = asia2018 + "";
}
function asiarelative() {
    var weltgesamt = 37100;
    var asiarelativprozent = (asia2018 / weltgesamt) * 100;
    document.querySelector(".relative").innerHTML = asiarelativprozent.toFixed(2) + "% ";
}
function asiagrowthperc() {
    document.querySelector(".growthperc").innerHTML = changeasiapercent.toFixed(2) + "% ";
}
function asiagrowthabs() {
    document.querySelector(".growthabs").innerHTML = changeasianumber.toFixed(2) + "";
    document.querySelector(".chart").setAttribute('style', 'height:' + asiarelativprozent.toFixed(2) + "%");
}
document.querySelector(".asia").addEventListener("click", asienheading);
document.querySelector(".asia").addEventListener("click", asientext);
document.querySelector(".asia").addEventListener("click", asiaabsolute);
document.querySelector(".asia").addEventListener("click", asiarelative);
document.querySelector(".asia").addEventListener("click", asiagrowthperc);
document.querySelector(".asia").addEventListener("click", asiagrowthabs);
//Australien
function auheading() {
    document.querySelector(".titleRegion").innerHTML = "Australia";
}
function autext() {
    document.querySelector(".titleRegion2").innerHTML = "Australia";
}
function auabsolute() {
    document.querySelector(".absolute").innerHTML = au2018 + "";
}
function aurelative() {
    var weltgesamt = 37100;
    var aurelativprozent = (au2018 / weltgesamt) * 100;
    document.querySelector(".relative").innerHTML = aurelativprozent.toFixed(2) + "% ";
}
function augrowthperc() {
    document.querySelector(".growthperc").innerHTML = changeaupercent.toFixed(2) + "% ";
}
function augrowthabs() {
    document.querySelector(".growthabs").innerHTML = changeaunumber.toFixed(2) + "";
    document.querySelector(".chart").setAttribute('style', 'height:' + aurelativprozent.toFixed(2) + "%");
}
document.querySelector(".australia").addEventListener("click", auheading);
document.querySelector(".australia").addEventListener("click", autext);
document.querySelector(".australia").addEventListener("click", auabsolute);
document.querySelector(".australia").addEventListener("click", aurelative);
document.querySelector(".australia").addEventListener("click", augrowthperc);
document.querySelector(".australia").addEventListener("click", augrowthabs);
//Europa
function euheading() {
    document.querySelector(".titleRegion").innerHTML = "Europe";
}
function eutext() {
    document.querySelector(".titleRegion2").innerHTML = "Europe";
}
function euabsolute() {
    document.querySelector(".absolute").innerHTML = eu2018 + "";
}
function eurelative() {
    var weltgesamt = 37100;
    var relativprozent = (eu2018 / weltgesamt) * 100;
    document.querySelector(".relative").innerHTML = relativprozent.toFixed(2) + "% ";
}
function eugrowthperc() {
    document.querySelector(".growthperc").innerHTML = changeeupercent.toFixed(2) + "% ";
}
function eugrowthabs() {
    document.querySelector(".growthabs").innerHTML = changeeunumber.toFixed(2) + "";
    document.querySelector(".chart").setAttribute('style', 'height:' + relativprozent.toFixed(2) + "%");
}
document.querySelector(".europe").addEventListener("click", euheading);
document.querySelector(".europe").addEventListener("click", eutext);
document.querySelector(".europe").addEventListener("click", euabsolute);
document.querySelector(".europe").addEventListener("click", eurelative);
document.querySelector(".europe").addEventListener("click", eugrowthperc);
document.querySelector(".europe").addEventListener("click", eugrowthabs);
//# sourceMappingURL=aufgabe6.js.map