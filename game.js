function startGame() { //The game chooses one of the three buttons
    document.getElementById("startGame").style = "Color: green";
    let gameButtons = document.getElementById("gameButtons");
    for (let generatesThreeButtons = 0; generatesThreeButtons < 3; ++generatesThreeButtons)
        gameButtons.innerHTML += '<button class = "cell"  id = "' + generatesThreeButtons + '" onclick = "place(' + generatesThreeButtons + ')">' + "__??__" + '</button>';
}
let randomButton = Math.floor(Math.random() * 3);
let index = true;

function place(generatesThreeButtons) {
    if (generatesThreeButtons == randomButton && index == true) {
        document.getElementById(generatesThreeButtons).style = "Color: blue";
        document.getElementById("messageButton").innerHTML = "You selected the winning button!";
    } else if (index == true) {
        document.getElementById(generatesThreeButtons).style = "Color: red";
        document.getElementById("messageButton").innerHTML = "The selected button is not a winner!";
    }
    index = false;
}
let numberNRandom; //N buttona gamee

function startNGame() {
    document.getElementById("startNGame").style = "Color:green";
    let menuStart = document.getElementById("menuN");
    menuStart.innerHTML = '<input type = "number" id = "nNumber">' + '<button id = "try">Try</button';
    document.getElementById('try').onclick = function tryNumber() {
        let nNumber = document.getElementById('nNumber').value;
        numberNRandom = Math.floor(Math.random() * nNumber);
        let nButton = document.getElementById('nButton');
        for (let buttonsGeneration = 0; buttonsGeneration < nNumber; ++buttonsGeneration)
            nButton.innerHTML += '<button class = "cell" id = "' + buttonsGeneration + '" onclick = "findNumber(' + buttonsGeneration + ')"> __??__</button>'
    }
}
let stopp = true;

function findNumber(buttonsGeneration) {
    if (buttonsGeneration == numberNRandom && stopp == true) {
        document.getElementById(buttonsGeneration).style = "Color: blue";
        document.getElementById("gameMessage").style = "color: blue";
        document.getElementById("gameMessage").innerHTML = "The selected button is the winner!";
    } else if (stopp == true) {
        document.getElementById(buttonsGeneration).style = "color: red"
        document.getElementById("gameMessage").style = "color: red";
        document.getElementById("gameMessage").innerHTML = "The selected button is not the winner!";
    }
    stopp = false;
}
