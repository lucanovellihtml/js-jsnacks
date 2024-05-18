"use strict";

//VARIABILE INPUT
const input = prompt("scegli il numero massimo consentito");

/*
  -CICLO TABELLINA DEL DUE FINO AL NUMERO CONSENTITO;
  -VIENE CONTROLLATO SE L'INPUT E' NEGATIVO O POSITIVO, QUINDI STAMPA LA TABELLINA
   NEGATIVA O POSITIVIA;
  -VIENE CONTROLLATO SE L'INPUT E' UN INTERO E UN NUMERO, NEL CASO CONTRARIO VIENE
   RICARICATA LA PAGINA HTML;
*/
if (!isNaN(input) && parseInt(input) < 0) {
    for (let i = 0; i > parseInt(input) - 1; i--) {
        console.log("VALORE ---> " + (2 * i));
    }
}
else if (!isNaN(input)) {
    for (let i = 0; i < parseInt(input) + 1; i++) {
        console.log("VALORE ---> " + (2 * i));
    }
}
else
    location.reload();