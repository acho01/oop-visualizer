function drawArrows(template) {
    if (template === 'Transports') {
        let arrow1 = document.querySelector("#a2");
        let arrow2 = document.querySelector("#a1-2");
        let arrow3 = document.querySelector("#a4-2");
        arrow1.style = 'animation: blinker 1s linear infinite;display: inline-block;';
        arrow2.style = 'animation: blinker 1s linear infinite;display: inline-block;';
        arrow3.style = 'animation: blinker 1s linear infinite;display: inline-block;';
    } else {
        let arrow1 = document.querySelector("#a1");
        let arrow2 = document.querySelector("#a2-2");
        let arrow3 = document.querySelector("#a4-2");
        let arrow4 = document.querySelector("#a3");
        arrow1.style = 'animation: blinker 1s linear infinite;display: inline-block;';
        arrow2.style = 'animation: blinker 1s linear infinite;display: inline-block;';
        arrow3.style = 'animation: blinker 1s linear infinite;display: inline-block;';
        arrow4.style = 'animation: blinker 1s linear infinite;display: inline-block;';
    }
}