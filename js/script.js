/* dichiariamo le variabili e richiediamo all'utente
 Nome, Cognome, Colore preferito
*/


/*
il nome ed il cognome voglio che siano univoci quindi
gli inserirò come costante (const)

mentre al colore preferito, voglio dare la possibilità di essere cambiato in futuro
quindi lo inserisco dentro ad una varibile (let) 
*/

// Primo Passaggio

const userName = prompt("Inserisci il tuo nome");
const userLastname = prompt("Inserisci il tuo cognome");
let favoriteColor = prompt("Inserisci il tuo colore preferito");


// Secondo Passaggio

let element = document.getElementById("password");
element.innerHTML = `${userName}${userLastname}${favoriteColor}21`;

console.log(element);