"use strict";

//VARIABILE ARRAY VUOTO
let array_number = [];
let index = 0;

/*
   - VIENE PRESO IN INPUT UN NUMERO INTERO;
   - VIENE PRESA L'ULTIMA CIFRA DEL NUMERO PER CONTROLLARE CHE SIA DISPARI;
   - IL NUMERO DISPARI VIENE INSERITO NELL'ARRAY;
   - VIENE CONTROLLATO SE L'INPUT E' UN INTERO... SE IL CONTROLLO FALLISCE,
     VIENE RICHIESTO L'INPUT;
*/
for (let i = 1; i < 7; i++) {

    let array_input = prompt("Inserisci il numero");

    if (isNaN(array_input)) {
        console.log("NON E' UN NUMERO " + array_input);
        i--;
    }
    else {
        let number = parseInt(array_input[array_input.length - 1]);
        console.log(number);
        console.log(array_input);

        switch (number) {
            case 1: array_number.push(array_input); break;
            case 3: array_number.push(array_input); break;
            case 5: array_number.push(array_input); break;
            case 7: array_number.push(array_input); break;
            case 9: array_number.push(array_input); break;
            default: console.log("NON E' DISPARI IL NUMERO ---> " + array_input);
        }
    }
}
console.log("ARRAY ---> " + array_number);