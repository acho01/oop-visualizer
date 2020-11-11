showOverlay();
homePageTyper();
document.querySelector("#overlay").addEventListener("click", () => hideOverlay());



function homePageTyper(){

    let welcomeMessage = 'Hello my curious alien fella.\n' +
        '                Welcome to oop modern class.\n' +
        '                With this tool, you can graph classes\n' +
        '                and see the relations between them.\n' +
        '                OOP practice has never been that fun.\n' +
        '                Good luck :) \n' +
        '                \n' +
        '                Click anywhere on screen and start graphing\n' +
        '                .\n' +
        '                .\n' +
        '                .\n';

    type(welcomeMessage, 'overlay_text');
}

function type(text, elementId) {
    let i = 0;
    if (i < text.length) {
        document.querySelector(`#${elementId}`).innerHTML += text.charAt(i);
        i++;
        setTimeout(() => type(text.substr(1), elementId), 45);
    }
}

function hideOverlay() {
    let audio = new Audio("../resources/audio/close.mp3");
    audio.play();
    document.querySelector("#overlay").style.display='none';
}

function showOverlay() {
    document.querySelector("#overlay").style.display='block';
}