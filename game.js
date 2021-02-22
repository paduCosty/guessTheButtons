// Game 3 buttons
let index = false;
function fnctionStartGame() {
    document.getElementById("txtRule").innerHTML = "Press one of the three winning buttons!";
    let button1 = 0, button2 = 1, button3 = 2;            
    let randomNumber = Math.floor(Math.random() * 3);
    document.getElementById('button1').onclick = function button1Eveniment() {
        if(index == false) {
            if(button1 == randomNumber) {
                document.getElementById("button1").style = "Color: blue";
                document.getElementById("gameOut").textContent = "You won!";
                document.getElementById("gameOut").style = "Color: blue";
                
            } else {
                document.getElementById("button1").style = "Color: red";
                document.getElementById("gameOut").textContent = "You lost!";
            }
            index = true;
        }
    }
    document.getElementById('button2').onclick = function button2Eveniment() {
       if(index == false) {
           if(button2 == randomNumber) {
               document.getElementById("button2").style = "Color: blue";
               document.getElementById("gameOut").textContent = "You won!";
               document.getElementById("gameOut").style = "Color: blue";
            } else {
                document.getElementById("button2").style = "Color: red";
                document.getElementById("gameOut").textContent = "You lost!";
            }
            index = true;
        }
    }
    document.getElementById('button3').onclick = function button3Eveniment() {
        if(index == false) {
            if(button3 == randomNumber) {
                document.getElementById("button3").style = "Color: blue";
                document.getElementById("gameOut").textContent = "You won!";
                document.getElementById("gameOut").style = "Color: blue";
             } else {
                 document.getElementById("button3").style = "Color: red";
                 document.getElementById("gameOut").textContent = "You lost!";
             }
             index = true;
         }
     }
}
// game N buttons
index = false, stopp = false;
function buttonFunction() {
    if(stopp == false) {
        let nrButton = document.getElementById("txtInput").value;
        let randomNumber = Math.floor(Math.random() * nrButton);
        let e = [];
        for(let i = 0; i < nrButton; ++i) {
            let buttonName = document.createTextNode('__??__');
            e[i] = document.createElement("button");
            document.body.appendChild(e[i]);
            e[i].appendChild(buttonName);
        }
        let t = document.createTextNode('true');
        e[randomNumber].onclick = function() {  
            if(index == false) {  
                e[randomNumber].innerHTML = "You are a winner!";
                e[randomNumber].style = "Color: blue";
                index = true;
            }
        }
        for(let i = 0; i < nrButton; ++i) {
            if(i != randomNumber) {
                e[i].onclick = function() {
                    if(index == false) {
                        e[i].style = "Color: red";
                        e[i].innerHTML = "You lose!";
                        index = true;
                    }
                }
            }
        }
        stopp = true;
    }
}
