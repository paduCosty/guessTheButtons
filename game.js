let randomButton = Math.floor(Math.random() * 3), index = true; /// Game with 3 buttons
function startGame() {
    document.getElementById("startGame").style = "Color: green";
    let gameButtons = document.getElementById("gameButtons");
    for(let i = 0; i < 3; ++i)
        gameButtons.innerHTML += '<button class = "cell"  id = "'+ i +'" onclick = "place(' + i + ')">' + "__??__" + '</button>';
}
function place(i) {
    if( i == randomButton && index == true) {
    document.getElementById(i).style = "Color: blue";
    document.getElementById("messageButton").innerHTML = "You selected the winning button!";
    } else if(index == true) {
        document.getElementById(i).style = "Color: red";
        document.getElementById("messageButton").innerHTML = "The selected button is not a winner!";
    }
    index = false;
}
let nRandom, stopp = true;//N buttona gamee
function startNGame() {
    document.getElementById("startNGame").style = "Color:green";
    let menuStart = document.getElementById("menuN");
    menuStart.innerHTML = '<input type = "number" id = "nNumber">' + '<button id = "try">Try</button';
    document.getElementById('try').onclick = function tryNumber() {
        let nNumber = document.getElementById('nNumber').value;
        nRandom = Math.floor(Math.random()* nNumber);
        let nButton = document.getElementById('nButton');
        for(let j = 0; j < nNumber; ++j)
            nButton.innerHTML += '<button class = "cell" id = "'+ j +'" onclick = "findNumber('+ j +')"> __??__</button>'
    }
}
function findNumber(j) {
    if(j == nRandom && stopp == true) {
        document.getElementById(j).style = "Color: blue";
        document.getElementById("gameMessage").style = "color: blue";
        document.getElementById("gameMessage").innerHTML = "The selected button is the winner!";
    } else if(stopp == true) {
        document.getElementById(j).style = "color: red"
        document.getElementById("gameMessage").style = "color: red";
        document.getElementById("gameMessage").innerHTML = "The selected button is not the winner!";
    }
    stopp = false;
}// am refacut jocul si am reusit sa scot jumatate din cod
