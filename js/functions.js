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
function hideAndAsk(divsPC, user, userNum, pcNum) {
    for (let i = 0; i < divsPC.length; i++) {
        divsPC[i].innerText = "";
    };
    setTimeout(chiediStampaNumeri, 1, user, userNum, pcNum);
};

//Chiedi 5 numeri all'utente e stampali
function chiediStampaNumeri(user, userNum, pcNum) {
    for (let i = 0; i < 5; i++) {
        userNum[i] = prompt(`Indovina il numero in posizione ${i+1}`)
    };
    let result = [];
    for (let i = 0; i < pcNum.length; i++) {
        result[i] = userNum[i]==pcNum[i];        
    };
    for (let i = 0; i < result.length; i++) {
        console.log(`Indovinato numero ${i+1}?    ${result[i]}`)
    };
};