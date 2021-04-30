"use strict";

/* 
let zahlen = [1, 12, 34, 23, 16, 4,73,61,78,5, 357, 123, 23,456,234,12,3 ,46,72,345,6,2,354,67,2];

let neu_sortiert = zahlen.sort();

console.log(neu_sortiert); 
*/

// Die sort()-Methode für Arrays wandelt Elemente des Arrays standardmäßig in Strings um und vergleicht diese

let worte = ["Zahl", "Wahnsinn", "Mangel", "Abspann"];

let worte_neu = worte.sort();

console.log(worte_neu);



// Für das sortieren von Zahlen-Arrays sollte deshalb eine Vergleichsfunktion genutzt werden 
// Ist Rückgabewert der Vergleichsfunktion < 0, wird a auf einen niedrigeren Index als b gesetzt
// Ist Rückgabewert der Vergleichsfunktion > 0, wird a auf einen höheren Index als b gesetzt
// Ist Rückgabewert der Vergleichsfunktion = 0, bleibt alles wie es ist
// return a -b sortiert aufsteigend
// return b -a sortiert absteigend



let zahlen = [1, 12, 34, 23, 16, 4,73,61,78,5, 357, 123, 23,456,234,12,3 ,46,72,345,6,2,354,67,2];

let zahlen_neu = zahlen.sort(function(a,b) {
    return a-b;
});

console.log(zahlen_neu);