//Genera 5 numeri
function numeri5() {
    let numeri = [];
    for (let i = 0; i < 5; i++) {
        numeri[i] = Math.floor((Math.random())*10);        
    };
    return(numeri);
};

//Stampa in container dato
function printInSquares(container, numeri) {
    for (let i = 0; i < numeri.length; i++) {
        let newContent = document.createElement("div");
        newContent.classList.add("square", "pcNum");
        newContent.innerText = numeri[i];
        container.append(newContent);
    };
};

//Nascondi numeri PC e chiedi numeri
function hideAndAsk(divsPC, user, userNum) {
    for (let i = 0; i < divsPC.length; i++) {
        divsPC[i].innerText = "";
    };
    setTimeout(chiediStampaNumeri, 1, user, userNum);
};

//Chiedi 5 numeri all'utente e stampali
function chiediStampaNumeri(user, userNum) {
    for (let i = 0; i < 5; i++) {
        userNum[i] = prompt(`Indovina il numero in posizione ${i}`)
    };
    console.log(userNum);
};