//1. Kartenvorlage Interface erzeugen
//2. Objekte erschaffen
var cardsDOMElement;
var cardsP1DOMElement;
var cardsP2DOMElement;
var cardsTrayStackDOMElement;
window.addEventListener("load", function () {
    cardsDOMElement = document.querySelector("#cards");
    cardsP1DOMElement = document.querySelector("#cardsP1");
    cardsP2DOMElement = document.querySelector("#cardsP2");
    cardsTrayStackDOMElement = document.querySelector("#cardsTrayStack");
    drawCardsToDOM();
});
function drawCardsToDOM() {
    var cards = [];
    var cardsP1 = [];
    var cardsP2 = [];
    var cardsTrayStack = [];
    var colors = [".red", ".blue", ".green", ".yellow"];
    var cardsToTake = 3;
    for (var cardnumber = 1; cardnumber <= 8; cardnumber++) {
        //neues Objekt erzeugen:
        for (var colornumber = 0; colornumber < colors.length; colornumber++) {
            var card = {
                value: cardnumber,
                color: colors[colornumber]
            };
            cards.push(card);
        }
    }
    //TODO Karten mischen!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for (var index_1 = 0; index_1 < cardsToTake; index_1++) {
        cardsP1.push(cards.pop());
        cardsP2.push(cards.pop());
    }
    //let todo: HTMLElement = document.createElement("div");
    //todo.classList.add("todo"); //an den Dom an todo
    //cardsDOMElement.innerHTML = "";
    //cardsDOMElement.innerHTML = "<p>" + cards[0].value + " - " + cards[0].color + "</p>";
    // cardsP1DOMElement.innerHTML = "";
    cardsP1DOMElement.innerHTML = cardsP1[0].value + " - " + cardsP1[0].color;
    //cardsP2DOMElement.innerHTML = "";
    cardsP2DOMElement.innerHTML = cardsP2[0].value + " - " + cardsP2[0].color;
    //cardsTrayStackDOMElement.innerHTML = "";
    // cardsTrayStackDOMElement.innerHTML = cards[0].value + " - " + cards[0].color;
}
//# sourceMappingURL=kartenspiel.js.map