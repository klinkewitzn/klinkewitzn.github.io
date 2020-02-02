
//1. Kartenvorlage Interface erzeugen

interface Card {
    color: string;
    value: number;
}

//2. Objekte erschaffen
var cardsDOMElement: HTMLElement;
var cardsP1DOMElement: HTMLElement;
var cardsP2DOMElement: HTMLElement;
var cardsTrayStackDOMElement: HTMLElement;

window.addEventListener("load", function (): void {
    cardsDOMElement = document.querySelector("#cards");
    cardsP1DOMElement = document.querySelector("#cardsP1");
    cardsP2DOMElement = document.querySelector("#cardsP2");
    cardsTrayStackDOMElement = document.querySelector("#cardsTrayStack");
    drawCardsToDOM();
});



function drawCardsToDOM(): void {
    var cards: Card[] = [];
    var cardsP1: Card[] = [];
    var cardsP2: Card[] = [];
    var cardsTrayStack: Card[] = [];
    var colors: string[] = [".red", ".blue", ".green", ".yellow"];
    var cardsToTake: number = 3;

    for (let cardnumber: number = 1; cardnumber <= 8; cardnumber++) {
        //neues Objekt erzeugen:

        for (let colornumber: number = 0; colornumber < colors.length; colornumber++) {

            let card: Card = {
                value: cardnumber,
                color: colors[colornumber]
            };
            cards.push(card);
        }
    }
    //TODO Karten mischen!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    for (let index: number = 0; index < cardsToTake; index++) {
        cardsP1.push(cards.pop());
        cardsP2.push(cards.pop());

    }

    //let todo: HTMLElement = document.createElement("div");
    //todo.classList.add("todo"); //an den Dom an todo

    //cardsDOMElement.innerHTML = "";
    cardsDOMElement.innerHTML = "<p>" + cards[0].value + " - " + cards[0].color + "</p>";

    // cardsP1DOMElement.innerHTML = "";
    cardsP1DOMElement.innerHTML = cardsP1[0].value + " - " + cardsP1[0].color;

    //cardsP2DOMElement.innerHTML = "";
    cardsP2DOMElement.innerHTML = cardsP2[0].value + " - " + cardsP2[0].color;

    //cardsTrayStackDOMElement.innerHTML = "";
    // cardsTrayStackDOMElement.innerHTML = cards[0].value + " - " + cards[0].color;

}






