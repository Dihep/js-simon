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
        newContent.classList.add("square");
        newContent.innerText = numeri[i];
        container.append(newContent);
    }
}