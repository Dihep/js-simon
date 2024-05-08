// Creazione variabili
const pc = document.getElementById("pc-div");
const user = document.getElementsByClassName("userNum");
let numeriPC = [];
let numeriUser = [];

//Stampa di 5 numeri con timer
numeriPC = numeri5();
printInSquares(pc, numeriPC);

//Timer
const divsPC = document.getElementsByClassName("pcNum");
setTimeout(hideAndAsk, 3000, divsPC, user, numeriUser);