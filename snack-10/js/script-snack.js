"use strict";

//VARIABILE INPUT
let input = prompt("inserisci il numero per iniziare il gioco");
let input_secondary = prompt("inserisci il numero successivo");

/*
    -CONTROLLO SE LE VARIABILI INPUT SIANO NUMBER E INT, IN CASO CONTRATIO VIENE RICARICATA
    LA PAGINA HTML;
    -VIENE CICLATO L'INSERIMENTO DELL'INPUT FINO A QUANDO L'UTENTE NON INSERISCE LO STESSo
    NUMERO CONSECUTIVAMENTE;
*/
if (!isNaN(input) && !isNaN(input_secondary)) {
    const array = [];
    array.push(parseInt(input));
    array.push(parseInt(input_secondary));
    while (array[array.length - 1] != array[array.length - 2]) {
        input = prompt("inserisci il numero successivo");
        array.push(parseInt(input));
        console.log("CONTINUA");
    }
}
else
    location.reload();


/*
    -VIENE GENERATO UN h1 QUANDO IL GIOCO FINISCE;
*/
const response = document.createElement("h1");
const header = document.querySelector("header");
response.innerHTML = "HAI INSERITO LO STESSO NUMERO CONSECUTIVAMENTE, HAI STOPPATO IL GIOCO :(";
header.append(response);
