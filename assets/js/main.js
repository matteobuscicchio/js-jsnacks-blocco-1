// JSnack 1

// Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

var zucchinaUno = {
    varietà : 'uno',
    peso : 11,
    lunghezza : 11
}
var zucchinaDue = {
    varietà : 'due',
    peso : 12,
    lunghezza : 12
}
var zucchinaTre = {
    varietà : 'tre',
    peso : 13,
    lunghezza : 13
}
var zucchinaQuattro = {
    varietà : 'quattro',
    peso : 14,
    lunghezza : 14
}
var zucchinaCinque = {
    varietà : 'cinque',
    peso : 15,
    lunghezza : 15
}
var zucchinaSei = {
    varietà : 'sei',
    peso : 16,
    lunghezza : 16
}
var zucchinaSette = {
    varietà : 'sette',
    peso : 17,
    lunghezza : 17
}
var zucchinaOtto = {
    varietà : 'otto',
    peso : 18,
    lunghezza : 18
}
var zucchinaNove = {
    varietà : 'nove',
    peso : 19,
    lunghezza : 19
}
var zucchinaDieci = {
    varietà : 'dieci',
    peso : 20,
    lunghezza : 20
}

var zucchine = [
    zucchinaUno, 
    zucchinaDue, 
    zucchinaTre, 
    zucchinaQuattro, 
    zucchinaCinque, 
    zucchinaSei, 
    zucchinaSette, 
    zucchinaOtto, 
    zucchinaNove, 
    zucchinaDieci
];

var pesoZucchine = 0;
for (const key in zucchine) {
    pesoZucchine += zucchine[key].peso;
}
console.log('peso zucchine = ' + pesoZucchine);

///////////////////////////////////////////////

// JSnack 2

// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

var parolaUtente = new String(prompt('inserisci una stringa per riaverla al contrario'));

function parolaInvesa(parola) {
    var parolaInvertita = parola.split('').reverse().join(''); 
    return parolaInvertita;
}

console.log(parolaInvesa(parolaUtente));

///////////////////////////////////////////////

// JSnack 3

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misuranovmeno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine

var zucchinePiccole = 0;
var zucchineGrandi = 0;

var lunghezzaZucchine = 0;
for (const key in zucchine) {
    lunghezzaZucchine += zucchine[key].lunghezza;
}