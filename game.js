let steop = 1, lungime = 0;
const caca = [];
const buttonsContainer = [];
function buttonFunction() {
    let nrButton = document.getElementById("txtInput").value;
    lungime = nrButton;
   // document.write(nrButton);
   for (var i = 1; i <= nrButton && steop == 1; i++) {
        buttonsContainer[i] = document.getElementById("text1");
        caca[i] = document.createElement("button");
        caca[i].innerText = "Select the button";
        buttonsContainer[i].appendChild(caca[i]); 
    }
    steop =0 ;
    rnd = Math.floor(Math.random(1) * nrButton);
    rnd += 1;
    buttonsContainer[rnd] = rnd;
   // document.write(rnd);
}
let x = 0;
function alegeNr() {
    for(let i = 0; i <= lungime; ++i) {   
        if(buttonsContainer[i] == rnd && x == 0) {
            caca[i].innerText = "Acesta este numarul corect";
            document.getElementById("cartof").innerHTML += rnd;
            x = 1;
        }
    }
}