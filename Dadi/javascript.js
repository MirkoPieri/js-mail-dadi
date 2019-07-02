// Calcolo prezzo del treno:
// Il programma dovrà chiedere all’utente il numero di chilometri e l’età e dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 €cent al km) ma c’è uno sconto del 20% per i minorenni e del 40% per gli over 65.


// definizione variabili
var elemento = document.getElementById("mio_id");
var elementoSconto = document.getElementById("sconto");

var kilometri, eta, prezzoTotale, prezzoAlkm, prezzoSconto, prezzoFinale;

// definizione vari interazioni dell'utente
kilometri = parseInt(prompt("Inserisci i kilometri che devi percorrere"));

eta = parseInt(prompt("Inserisci la tua età"));

prezzoAlkm = 0.21;

prezzoTotale = kilometri * prezzoAlkm;
console.log(prezzoTotale);

// ciclo if per sconto boglietto
if (eta < 18) {
   prezzoSconto = ((prezzoTotale * 20) / 100);
   prezzoFinale = prezzoTotale - prezzoSconto;
   elemento.innerHTML = prezzoFinale.toFixed(2) + "€";
   elementoSconto.innerHTML = "Sconto del 20% perché minorenne.";
} else if (eta > 65) {
    prezzoSconto = ((prezzoTotale * 40) / 100);
    prezzoFinale = prezzoTotale - prezzoSconto;
    elemento.innerHTML = prezzoFinale.toFixed(2) + "€";
    elementoSconto.innerHTML = "Sconto del 40% perché over 65 anni.";
} else {
    elemento.innerHTML = prezzoTotale.toFixed(2) + "€";
}
