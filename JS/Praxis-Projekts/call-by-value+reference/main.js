"use strict";

let meine_variable = "Ruben";
let mein_objekt = {
    zahl: 5000
};

const meine_funktione = function(v, o) {
    v = "Dennis";
    o.zahl = 2500;
};

meine_funktione(meine_variable, mein_objekt);

console.log(meine_variable);
console.log(mein_objekt.zahl);


let konto = {
    iban: "DE6206752525264432178",
    bic: "WEASES5TGRXX",
    inhaber: {
        vorname: "Thomas",
        nachname: "Heinz",
        geschlecht: "männlich",
        alter: 34,
    },
    kontostand: 3500,
    aktiv: true,
};


const geld_abheben = function(k, e) {
    console.log(`Der Kontostand beträgt:  ${konto.kontostand} ct`);
    k.kontostand -= e;
    console.log(`Der Kontostand beträgt:  ${konto.kontostand} ct`);
}

const geld_einzahlen = function(k, e) {
    console.log(`Der Kontostand beträgt:  ${konto.kontostand} ct`);
    k.kontostand += e;
    console.log(`Der Kontostand beträgt:  ${konto.kontostand} ct`);
}

geld_abheben(konto, 500);
geld_einzahlen(konto, 1500);