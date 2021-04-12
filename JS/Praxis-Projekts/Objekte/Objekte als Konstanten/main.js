"use strict";

const person = {
    vorname: "Christoph",
    nachname: "Binner",
    geschlecht: "männlich",
    alter: 18,
};

person.haarfarbe = "braun";
person.wohnort = "Stuttgart";
person.test = "blabla";
delete person.test

console.log(person)