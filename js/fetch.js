function fetchColors() {
    fetch('http://www.colr.org/json/colors/random/20')
        .then(response => response.json())
        .then(data => {
            let colors = data.colors;
            let index = getRandomInt(colors.length)
            let color_hex = '#'+colors[index].hex;
            console.log(data);
            let logo = document.querySelector('.logo');
            console.log(color_hex);
            logo.style.color=color_hex;
        });

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}