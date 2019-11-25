/*--------------------Europa------------------------*/
var text1eu:string = "Die Emission von Europa ist: ";
var eu2018:number = 4209.3;

console.log(text1eu+eu2018+"kg CO2");

var weltgesamt:number = 37100;
var relativprozent:number = (eu2018/weltgesamt)*100;
var text2eu:string = "Relativ zur Gesamtemission der Welt verursacht Europa damit ";

console.log(text2eu+relativprozent+"%");

var text3eu:string = "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ";
var eu2008:number = 4965.7;
var changeeupercent:number = ((eu2018/eu2008)*100)-100;

console.log(text3eu+ changeeupercent+"%"+"verändert");

var text4eu:string = "2018 im Vergleich zu 2008 sind das ";
var changeeunumber:number = (eu2018-eu2008);

console.log(text4eu+ changeeunumber +"kg CO2");

/* ---------------Nordamerika------------------*/ 

var text1na:string = "Die Emission von Nordamerika ist: ";
var na2018:number = 6035.6;

console.log(text1na+na2018+"kg CO2");

var weltgesamt:number = 37100;
var narelativprozent:number = (na2018/weltgesamt)*100;
var text2na:string = "Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ";

console.log(text2na+narelativprozent+"%");

var text3na:string = "Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var na2008:number = 6600.4;
var changenapercent:number = ((na2018/na2008)*100)-100;

console.log(text3na+ changenapercent+"%"+"verändert");

var text4na:string = "2018 im Vergleich zu 2008 sind das ";
var changenanumber:number = (na2018-na2008);

console.log(text4na+ changenanumber +"kg CO2");

/* Südamerika*/

var text1sa:string = "Die Emission von Südamerika ist: ";
var sa2018:number = 1261.5;

console.log(text1sa+sa2018+"kg CO2");

var weltgesamt:number = 37100;
var sarelativprozent:number = (sa2018/weltgesamt)*100;
var text2sa:string = "Relativ zur Gesamtemission der Welt verursacht Südamerika damit ";

console.log(text2sa+sarelativprozent+"%");

var text3sa:string = "Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var sa2008:number = 6600.4;
var changesapercent:number = ((sa2018/sa2008)*100)-100;

console.log(text3sa+ changesapercent+"%"+"verändert");

var text4sa:string = "2018 im Vergleich zu 2008 sind das ";
var changesanumber:number = (sa2018-sa2008);

console.log(text4sa+ changesanumber +"kg CO2");

/*Afrika */

var text1af:string = "Die Emission von Afrika ist: ";
var af2018:number = 1235.5;

console.log(text1af+af2018+"kg CO2");

var weltgesamt:number = 37100;
var afrelativprozent:number = (af2018/weltgesamt)*100;
var text2af:string = "Relativ zur Gesamtemission der Welt verursacht Afrika damit ";

console.log(text2af+afrelativprozent+"%");

var text3af:string = "Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var af2008:number = 1028;
var changeafpercent:number = ((af2018/af2008)*100)-100;

console.log(text3af+ changeafpercent+"%"+"verändert");

var text4af:string = "2018 im Vergleich zu 2008 sind das ";
var changeafnumber:number = (af2018-af2008);

console.log(text4af+ changeafnumber +"kg CO2");

/*Asien */

var text1asia:string = "Die Emission von Asien ist: ";
var asia2018:number = 16274.1;

console.log(text1asia+asia2018+"kg CO2");

var weltgesamt:number = 37100;
var asiarelativprozent:number = (asia2018/weltgesamt)*100;
var text2asia:string = "Relativ zur Gesamtemission der Welt verursacht Asien damit ";

console.log(text2asia+asiarelativprozent+"%");

var text3asia:string = "Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ";
var asia2008:number = 12954.7;
var changeasiapercent:number = ((asia2018/asia2008)*100)-100;

console.log(text3asia+ changeasiapercent+"%"+"verändert");

var text4asia:string = "2018 im Vergleich zu 2008 sind das ";
var changeasianumber:number = (asia2018-asia2008);

console.log(text4asia+ changeasianumber +"kg CO2");

/*Australien*/

var text1au:string = "Die Emission von Australien ist: ";
var au2018:number = 2100.5;

console.log(text1au+au2018+"kg CO2");

var weltgesamt:number = 37100;
var aurelativprozent:number = (au2018/weltgesamt)*100;
var text2au:string = "Relativ zur Gesamtemission der Welt verursacht Australien damit ";

console.log(text2au+aurelativprozent+"%");

var text3au:string = "Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ";
var au2008:number = 1993;
var changeaupercent:number = ((au2018/au2008)*100)-100;

console.log(text3au+ changeaupercent+"%"+"verändert");

var text4au:string = "2018 im Vergleich zu 2008 sind das ";
var changeaunumber:number = (au2018-au2008);

console.log(text4au+ changeaunumber +"kg CO2");



//Beginn Aufgabe 6
//Nordamerika
function nordamerikaheading()
        {document.querySelector(".titleRegion").innerHTML="North America";
        }

function nordamerikatext()
        {document.querySelector(".titleRegion2").innerHTML="North America";
        }
function naabsolute(){
            document.querySelector(".absolute").innerHTML=na2018+"";}
function narelative(){
            var weltgesamt:number = 37100;
            var narelativprozent:number = (na2018/weltgesamt)*100;
            document.querySelector(".relative").innerHTML=narelativprozent+"%";}
function growthperc(){
            document.querySelector(".growthperc").innerHTML=changenapercent+"%";}
function growthabs(){
            document.querySelector(".growthabs").innerHTML=changenanumber+"";
            document.querySelector(".chart").setAttribute('style','height:'+narelativprozent+"%");}

document.querySelector(".northamerica").addEventListener("click", nordamerikaheading);
document.querySelector(".northamerica").addEventListener("click", nordamerikatext);
document.querySelector(".northamerica").addEventListener("click", naabsolute);
document.querySelector(".northamerica").addEventListener("click", narelative);
document.querySelector(".northamerica").addEventListener("click", growthperc);
document.querySelector(".northamerica").addEventListener("click", growthabs);

//Südamerika

function südamerikaheading()
        {document.querySelector(".titleRegion").innerHTML="South America";
        }

function südamerikatext()
        {document.querySelector(".titleRegion2").innerHTML="South America";
        }
function saabsolute(){
            document.querySelector(".absolute").innerHTML=sa2018+"";}
function sarelative(){
            var weltgesamt:number = 37100;
            var sarelativprozent:number = (sa2018/weltgesamt)*100;
            document.querySelector(".relative").innerHTML=sarelativprozent+"%";}
function sagrowthperc(){
            document.querySelector(".growthperc").innerHTML=changesapercent+"%";}
function sagrowthabs(){
            document.querySelector(".growthabs").innerHTML=changesanumber+"";
            document.querySelector(".chart").setAttribute('style','height:'+sarelativprozent+"%");}

document.querySelector(".southamerica").addEventListener("click", südamerikaheading);
document.querySelector(".southamerica").addEventListener("click", südamerikatext);
document.querySelector(".southamerica").addEventListener("click", saabsolute);
document.querySelector(".southamerica").addEventListener("click", sarelative);
document.querySelector(".southamerica").addEventListener("click", sagrowthperc);
document.querySelector(".southamerica").addEventListener("click", sagrowthabs);

//Afrika

function afrikaheading()
        {document.querySelector(".titleRegion").innerHTML="Africa";
        }

function afrikatext()
        {document.querySelector(".titleRegion2").innerHTML="Africa";
        }
function afabsolute(){
            document.querySelector(".absolute").innerHTML=af2018+"";}
function afrelative(){
            var weltgesamt:number = 37100;
            var afrelativprozent:number = (af2018/weltgesamt)*100;
            document.querySelector(".relative").innerHTML=afrelativprozent+"%";}
function afgrowthperc(){
            document.querySelector(".growthperc").innerHTML=changeafpercent+"%";}
function afgrowthabs(){
            document.querySelector(".growthabs").innerHTML=changeafnumber+"";
            document.querySelector(".chart").setAttribute('style','height:'+afrelativprozent+"%");}

document.querySelector(".africa").addEventListener("click", afrikaheading);
document.querySelector(".africa").addEventListener("click", afrikatext);
document.querySelector(".africa").addEventListener("click", afabsolute);
document.querySelector(".africa").addEventListener("click", afrelative);
document.querySelector(".africa").addEventListener("click", afgrowthperc);
document.querySelector(".africa").addEventListener("click", afgrowthabs);

//Asien

function asienheading()
        {document.querySelector(".titleRegion").innerHTML="Asia";
        }

function asientext()
        {document.querySelector(".titleRegion2").innerHTML="Asia";
        }
function asiaabsolute(){
            document.querySelector(".absolute").innerHTML=asia2018+"";}
function asiarelative(){
            var weltgesamt:number = 37100;
            var asiarelativprozent:number = (asia2018/weltgesamt)*100;
            document.querySelector(".relative").innerHTML=asiarelativprozent+"% ";}
function asiagrowthperc(){
            document.querySelector(".growthperc").innerHTML=changeasiapercent+"% ";}
function asiagrowthabs(){
            document.querySelector(".growthabs").innerHTML=changeasianumber+"";
            document.querySelector(".chart").setAttribute('style','height:'+asiarelativprozent+"%");}

document.querySelector(".asia").addEventListener("click", asienheading);
document.querySelector(".asia").addEventListener("click", asientext);
document.querySelector(".asia").addEventListener("click", asiaabsolute);
document.querySelector(".asia").addEventListener("click", asiarelative);
document.querySelector(".asia").addEventListener("click", asiagrowthperc);
document.querySelector(".asia").addEventListener("click", asiagrowthabs);

//Australien

function auheading()
        {document.querySelector(".titleRegion").innerHTML="Australia";
        }

function autext()
        {document.querySelector(".titleRegion2").innerHTML="Australia";
        }
function auabsolute(){
            document.querySelector(".absolute").innerHTML=au2018+"";}
function aurelative(){
            var weltgesamt:number = 37100;
            var aurelativprozent:number = (au2018/weltgesamt)*100;
            document.querySelector(".relative").innerHTML=aurelativprozent+"% ";}
function augrowthperc(){
            document.querySelector(".growthperc").innerHTML=changeaupercent+"% ";}
function augrowthabs(){
            document.querySelector(".growthabs").innerHTML=changeaunumber+"";
            document.querySelector(".chart").setAttribute('style','height:'+aurelativprozent+"%"); }

document.querySelector(".australia").addEventListener("click", auheading);
document.querySelector(".australia").addEventListener("click", autext);
document.querySelector(".australia").addEventListener("click", auabsolute);
document.querySelector(".australia").addEventListener("click", aurelative);
document.querySelector(".australia").addEventListener("click", augrowthperc);
document.querySelector(".australia").addEventListener("click", augrowthabs);

//Europa


function euheading()
        {document.querySelector(".titleRegion").innerHTML="Europe";
        }

function eutext()
        {document.querySelector(".titleRegion2").innerHTML="Europe";
        }
function euabsolute(){
            document.querySelector(".absolute").innerHTML=eu2018+"";}
function eurelative(){
            var weltgesamt:number = 37100;
            var relativprozent:number = (eu2018/weltgesamt)*100;
            document.querySelector(".relative").innerHTML=relativprozent+"% ";}
function eugrowthperc(){
            document.querySelector(".growthperc").innerHTML=changeeupercent+"% ";}
function eugrowthabs(){
            document.querySelector(".growthabs").innerHTML=changeeunumber+"";
            document.querySelector(".chart").setAttribute('style','height:'+relativprozent+"%"); }

document.querySelector(".europe").addEventListener("click", euheading);
document.querySelector(".europe").addEventListener("click", eutext);
document.querySelector(".europe").addEventListener("click", euabsolute);
document.querySelector(".europe").addEventListener("click", eurelative);
document.querySelector(".europe").addEventListener("click", eugrowthperc);
document.querySelector(".europe").addEventListener("click", eugrowthabs);