// l secondo riguarda proprio lo scenario base, quindi ci saranno 2 lanci di dadi e poi noi dovremmo stampare a schermo chi ha vinto, se ha vinto qualcuno.

var sceltaUtente, giocatore1, giocatore2, dado1, dado2;


var elemento = document.getElementById('mio_id');

giocatore1 = "rosso";
giocatore2 = "blu";

// determinazione della scelta del giocatore
sceltaUtente = prompt("Scegli se essere giocatore rosso o blu");

dado1 = Math.floor(Math.random() * 6) + 1;
console.log(dado1);

dado2 = Math.floor(Math.random() * 6) + 1;
console.log(dado2);


// if per determinare scelta giocatore e risultato partita
if (dado1 > dado2) {
  if (sceltaUtente == giocatore1) {
    elemento.innerHTML = "Hai Vinto";
  } else {
    elemento.innerHTML = "Hai Perso";
  }
} else if (dado2 > dado1) {
  if (sceltaUtente == giocatore2) {
    elemento.innerHTML = "Hai Vinto";
  } else {
    elemento.innerHTML = "Hai Perso";
  }
} else {
      elemento.innerHTML = "Partita Finita in Pareggio";
}
