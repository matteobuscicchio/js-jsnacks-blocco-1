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

//ho riutilizzato le zucchine del primo JSnack
var zucchinePiccole = [];
var zucchineGrandi = [];

var lunghezzaZucchine = 0;
for (const key in zucchine) {
    if (zucchine[key].lunghezza < 15) {
        zucchinePiccole.push(zucchine[key]);
    } else {
        zucchineGrandi.push(zucchine[key]);
    }
}

var sommaLunghezzaPiccole = 0;
for (const key in zucchinePiccole) {
    sommaLunghezzaPiccole += zucchinePiccole[key].lunghezza;
}
console.log('lunghezza zucchine piccole = ' + sommaLunghezzaPiccole);
var sommaLunghezzaGrandi = 0;
for (const key in zucchineGrandi) {
    sommaLunghezzaGrandi += zucchineGrandi[key].lunghezza;
}
console.log('lunghezza zucchine grandi = ' + sommaLunghezzaGrandi);

///////////////////////////////////////////////

// JSnack 4

// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var randomNumber = Math.floor(Math.random() * "5") + 2;
function arrayUnoFunction() {
    var arrayUno = [];
    for (var index = 0; index < randomNumber; index++) {
        var chiediElemento = prompt("inserisci un elemento fino al completamento del primo array");
        arrayUno.push(chiediElemento);   
    }
    console.log(arrayUno);
    return arrayUno;
}
function arrayDueFunction() {
    var arrayDue = [];
    for (var index = 0; index < randomNumber; index++) {
        var chiediElemento = prompt("inserisci un elemento fino al completamento del secondo array");
        arrayDue.push(chiediElemento);   
    }
    console.log(arrayDue);
    return arrayDue;
}
function arrayMischiati(primo, secondo){
  var primo;
  var secondo;
  var arrayMisto = [];
  var index = 0;
  while (index < primo.length) {
    arrayMisto.push(primo[index]);
    arrayMisto.push(secondo[index]);
    index++;
  }
  return arrayMisto;
}
console.log(arrayMischiati(arrayUnoFunction(), arrayDueFunction()));