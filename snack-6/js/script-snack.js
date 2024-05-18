//VARIABILE INPUT
const input = prompt("Inserisci il numero");

//GENERA VALORE TRA 0 E 3
const number = Math.floor(Math.random() * 4);

//CONTROLLA CHE L'INPUT SIA UN NUMERO E CONTROLLA CHE SIA UGUALE AL NUMERO GENERATO RANDOM
if (!isNaN(input)) {
    if (parseInt(input) === number)
        getResponse(true, number);
    else
        getResponse(false, number);
}
else
    location.reload();


/*
  -METODO CHE GESTISCE LA VISUALIZZAZIONE DELL'ELEMENTO DENTRO LA PAGINA HTML;
  -STAMP DENTRO ALL'HEADER, IL TITOLO POSITIVO SE L'INPUT COMBACIA CON IL NUMERO
   GENERATO RANDOM;
*/
function getResponse(flag, number) {

    const response = document.createElement("h1");
    const header = document.querySelector("header");
    header.append(response);

    if (flag)
        response.innerHTML = "HAI INDOVINATO IL NUMERO, IL NUMERO GENERATO E' --->" + number;

    else
        response.innerHTML = "NON HAI INDOVINATO IL NUMERO, IL NUMERO GENERATO E' --->" + number;

}