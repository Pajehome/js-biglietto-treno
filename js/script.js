// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let userKm = parseInt(prompt('Inserisci Km'));

console.log(userKm);

let userAge = parseInt(prompt('Inserisci età'));

console.log(userAge);

const perKm = 0.21;

const u18 = 0.2;

const o65 = 0.4;

let totaleKm = userKm * perKm;

console.log(totaleKm);

if(userAge <= 18){

    console.log('Sconto 20% applicato');

    let totalUnder18 = totaleKm - (totaleKm * u18);

    totalUnder18 = totalUnder18.toFixed(2);
 
    console.log(totalUnder18);

}else if(userAge >= 65){

    console.log('Sconto 40% applicato')

    let totalOver65 = totaleKm - (totaleKm * o65);

    totalOver65 = totalOver65.toFixed(2);
 
    console.log(totalOver65);

}


