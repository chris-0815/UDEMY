"use strict";

// Objekte anlegen 

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

// Werte auslesen (Bracket-Notation)

let wert_1 = konto_1["iban"];
let wert_2 = konto_1["inhaber"]["geschlecht"]
console.log(`IBAN : ${wert_1}, das Geschlecht des Inhabers ist ${wert_2}`);


//Eigenschaften setzen (Bracket-Notation)

konto_1["abhebelimit"] = 1000;
konto_1["inhaber"]["geburtstag"] = "27.12.1981";
auto["ps"] = 200;
console.log(auto["ps"], auto);
console.log(konto_1);
console.log(`Der Inhaber ${konto_1["inhaber"]["vorname"]} hat am ${konto_1["inhaber"]["geburtstag"]} Geburtstag`);


// Werte setzen bzw. verändern (Bracket-Notation)

konto_1["kontostand"] = 3000;
console.log(konto_1["kontostand"])


// Die Vorteile der Bracket Notation liegen darin das auch variablen mit strings belegt und eingelesen werden können. Siehe Beispiel

let eigenschaft = "iban";
let wert_3 = konto_1[eigenschaft];
console.log(wert_3)


// Mini Übung (Bracket-Notation)

auto["ps"] = 200;
auto["modell"] = "i20";
let wert4 = auto["modell"];
console.log(`Ein ${auto["marke"]} ${wert4} hat ${auto["ps"]} PS.`);