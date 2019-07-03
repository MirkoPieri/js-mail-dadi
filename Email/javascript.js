// Chiedi all’utente la sua email,  controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

var email = ["user.us@gmail.com", "user998@gmail.com", "user@gmail.com", "user1234@gmail.com"];

var emailUtente = prompt("Inserisci la tua email poi premi invio");

var elemento = document.getElementById('mio_id');

var emailCorretta = 0;

 // ciclo per vedere se l'email inserita è presente
  for (var i = 0; i < email.length; i++) {
    if (email[i] == emailUtente) {
      emailCorretta = 1;
    }
  }

// determinazione email presente o meno
  if (emailCorretta) {
    elemento.innerHTML = "La tua email è corretta.";
  } else {
    alert("ATTENZIONE")
    elemento.innerHTML = "La tua email non è presente nei nostri sistemi.";
  }
