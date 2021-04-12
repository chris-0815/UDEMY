"use strict";


let konto_1 = {
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


let konto_2 = {
    iban: "DE6206752525264432178",
    bic: "WEASES5TGRXX",
    inhaber: {
        vorname: "Herbert",
        nachname: "Mayer",
        geschlecht: "männlich",
        alter: 34,
    },
    kontostand: 39830,
    aktiv: false,
};


let auto = {
    marke: "Hyundai",
    modell: "i30",
    kraftstoffart: "Benzin",
    kilometerstand: 123212,
    ausstattung: {
        navigationssystem: true,
        klimaanlage: true,
        sitzheizung: true,
        panoramadach: false,
    },
    zustand: "gebraucht",
    preis: 3987,
};


let wert_1 = konto_1.iban;
console.log(wert_1)
let wert_2 = konto_2.bic;
console.log(wert_2)
let wert_3 = konto_2.inhaber.nachname;
console.log(wert_3)

console.log(`${konto_1.inhaber.vorname} ${konto_1.inhaber.nachname} hat auf seinem Konto ${konto_1.kontostand} € Guthaben 
und sein Konto ist aktuell aktiv(${konto_1.aktiv})`)

//Eigenschaften setzen

konto_1.abhebelimit = 1000;
console.log(konto_1)

// Werte setzen bzw. verändern (Dot-Notation)

konto_1.kontostand = konto_1.kontostand - 500;
console.log(konto_1.kontostand)

// Mini Übung

auto.ps = 165;
auto.modell = "i40";
console.log(`Ein ${auto.marke} ${auto.modell} hat ${auto.ps} PS.`)