/*Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/


$(function () {

// 1. creo oggetto con uno studente
var studente = {
  nome: "Giangiulio",
  cognome: "Rossi",
  eta: 33,
};

// 2. stampo tutte le proprietà con ciclo for in
for (var key in studente) {
  console.log(key + ": " + studente[key]);
}

// 3. creo array di oggetti di Studenti
var studenti = [
  {
    nome: "Giangiulio",
    cognome: "Rossi",
    eta: 33,
  },
  {
    nome: "Riccardo",
    cognome: "Verdi",
    eta: 26,
  },
  {
    nome: "Regina",
    cognome: "Elisabetta",
    eta: 111,
  }
];

// 4. stampo nome e cognome degli Studenti
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + " " + studenti[i].cognome);
}

// 5. chiedo all'utente di inserire un nuovo studente
var nuovoNome = prompt("Inserisci il nome dello studente");
var nuovoCognome = prompt("Inserisci il cognome dello studente");
var nuovaEta = parseInt(prompt("Inserisci l'età dello studente"));
var nuovoStudente = {
  nome: nuovoNome,
  cognome: nuovoCognome,
  eta: nuovaEta,
};

// 6. pusho i dati del nuovo studente nell'array studenti
studenti.push(nuovoStudente);
console.log(studenti);

});
