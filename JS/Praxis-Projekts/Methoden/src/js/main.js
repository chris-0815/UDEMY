"use strict";

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
    einzahlen(e) {
        this.kontostand += e,
            this.kontoauszug();
    },
    abheben(a) {
        this.kontostand -= a,
            this.kontoauszug();
    },
    kontoauszug() {
        console.log(`Der Kontostand beträgt:  ${this.kontostand} ct`)
    },
};

konto.einzahlen(500);
konto.abheben(1500)


// Methode in Objekt einbauen

let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18,
    verarbeiten() {
        return {
            name: `${this.vorname} ${this.nachname}`,
            zusammenfassung: `${this.vorname} ${this.nachname} (${this.alter} Jahre)`,
            begruessung: `Hallo ${this.vorname} ${this.nachname}!`,
        };
    },
};

console.log(person.verarbeiten(person));