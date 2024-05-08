// Creazione variabili
const pc = document.getElementById("pc-div");
let numeriPC = [];

//Stampa di 5 numeri con timer
numeriPC = numeri5();
printInSquares(pc, numeriPC);

//Timer
divsPC = document.getElementsByClassName("pcNum");
setTimeout(hidePC, 3000, divsPC);