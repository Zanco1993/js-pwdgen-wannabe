// vado ad inserire dentro all' id ciao le parole hello world

// due metodi di inserimento e creo sovrascrittura
document.getElementById("test").innerHTML = "hello world! primo";

let superElement = document.getElementById("test");
superElement.innerHTML = `hello world! secondo`;

// -----------------------------------------------------------------

document.getElementById("test2").innerHTML = "Io sono test2";

let element2 = document.getElementById("test3");
element2.innerHTML = "Io sono test3";

//creo delle varibili
let nome = "Fabio";
let cognome = "Zanconato";

// concateniamo le due variabili
let nomeCognome = nome + " " + cognome;

// mostriamolo nel consol.log
console.log(nomeCognome);

// frase a tema compiuto
console.log(`Il tuo nome è ${nomeCognome}`);

// sotto alla domanda nell'html di cometi chiami? questa è la mia risposta
let elementName = document.getElementById("idName");
elementName.innerHTML = `Il mio nome è ${nomeCognome}`;

// prova alert
alert("attenzione prova bonus");

let nameCar = "Ferrari";

let favoriteCar = document.getElementById("car");
favoriteCar.innerHTML = `la mia macchina preferita è la ${nameCar}`;


// prova prompt

let userMotorbike = prompt("Qual'è la tua moto preferita?");

let fastMotorbike = document.getElementById("motorbike");
fastMotorbike.innerHTML = `La mia moto preferita è ${userMotorbike}`;