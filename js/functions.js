//Genera 5 numeri
function numeri5() {
    let numeri = [];
    for (let i = 0; i < 5; i++) {
        numeri[i] = Math.floor((Math.random())*10);        
    };
    return(numeri);
};