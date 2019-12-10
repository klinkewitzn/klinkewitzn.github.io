window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("click", function () { playSample("kick.mp3"); });
    document.querySelector(".button2").addEventListener("click", function () { playSample("hihat.mp3"); });
    document.querySelector(".button3").addEventListener("click", function () { playSample("snare.mp3"); });
    document.querySelector(".button4").addEventListener("click", function () { playSample("F.mp3"); });
    document.querySelector(".button5").addEventListener("click", function () { playSample("G.mp3"); });
    document.querySelector(".button6").addEventListener("click", function () { playSample("A.mp3"); });
    document.querySelector(".button7").addEventListener("click", function () { playSample("C.mp3"); });
    document.querySelector(".button8").addEventListener("click", function () { playSample("laugh-1.mp3"); });
    document.querySelector(".button9").addEventListener("click", function () { playSample("laugh-2.mp3"); });
    document.querySelector(".playbutton").addEventListener("click", playbutton); //<--Playbutton
    document.querySelector(".record").addEventListener("click", recordbutton);
    document.querySelector(".delete").addEventListener("click", deletebutton);
});
var Kick;
var Beat = ["kick.mp3", "kick.mp3", "snare.mp3", "hihat.mp3"];
var record = false;
function playSample(sounds) {
    var sound = new Audio("assets/" + sounds);
    sound.play();
    if (record == true) {
        Beat.push(sounds);
    }
}
function playbutton() {
    var index = 0;
    if (document.getElementById("Play").classList.contains("fa-play")) {
        document.getElementById("Play").classList.remove("fa-play");
        document.getElementById("Play").classList.add("fa-pause");
        Kick = setInterval(playBeat, 500);
        record = false;
        console.log("Play");
    }
    else {
        document.getElementById("Play").classList.remove("fa-pause");
        document.getElementById("Play").classList.add("fa-play");
        clearInterval(Kick);
        console.log("Pause");
    }
    //Beat
    function playBeat() {
        playSample(Beat[index]);
        index += 1;
        if (index == (Beat.length)) {
            index = 0;
            console.log(Beat[index]);
        }
    }
}
function deletebutton() {
    Beat.length = 0;
    console.log("delete Beat");
}
function recordbutton() {
    record = true;
    console.log("record new Beat");
}
//# sourceMappingURL=drumpad.js.map