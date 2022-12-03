"use strict";

// Funktions-Ausdruck (anonyme Funktion)
const meine_funktion = function(a = "Chris", b = "Binner", c = 39)  {
    console.log(`Herzlichen Glückwunsch ${a} ${b} zum ${c}. Geburtstag `)
};

let vorname = "Max";
let nachname = "Mustermann";
let alter = 42

meine_funktion(vorname, undefined, alter)
meine_funktion()