//generate a random color
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        color += hex[index];
    }
    return color;
};

let intervalID;

const startChangingColor = function () {
    if (!intervalID) {
        intervalID = setInterval(changeBG, 1000);
    }
    function changeBG() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function () {
    clearInterval(intervalID);
    intervalID = null;
};

document.getElementById('start').addEventListener('click', startChangingColor);

document.getElementById('stop').addEventListener('click', stopChangingColor);