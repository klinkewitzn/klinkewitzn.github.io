//7.1 (Buttons 1-9)
window.addEventListener("load",function(){
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
});

function playSample(sounds){
    var sound:HTMLAudioElement = new Audio('assets/'+sounds);
    sound.play();
    }


//7.2 (Array (Playbutton))
function playbutton (){
    var Kick = setInterval(mybeat, 500);
    var index = 0;
    var Beat = ["assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3"];
    function mybeat() {
             var mySound = new Audio(Beat[index]);
             mySound.play();
            index = index+1;
            if (index > 3)
            index = 0;
            console.log(Beat[index]);
             };
};














