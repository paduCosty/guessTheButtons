let stop = 1, inputLenght = 0;
const arrayConst = [];
const buttonsContainer = [];
function buttonFunction() {
    let nrButton = document.getElementById("txtInput").value;
    inputLenght = nrButton;
   for (var i = 1; i <= nrButton && stop == 1; i++) {
        buttonsContainer[i] = document.getElementById("text1");
        arrayConst[i] = document.createElement("button");
        arrayConst[i].innerText = "Select the button";
        buttonsContainer[i].appendChild(arrayConst[i]); 
    }
    stop =0 ;
    rnd = Math.floor(Math.random(1) * nrButton);
    rnd += 1;
    buttonsContainer[rnd] = rnd;
}
let x = 0;
function alegeNr() {
    for(let i = 0; i <= inputLenght; ++i) {   
        if(buttonsContainer[i] == rnd && x == 0) {
            arrayConst[i].innerText = "Acesta este numarul corect";
            document.getElementById("correctNumber").innerHTML += rnd;
            x = 1;
        }
    }
}
