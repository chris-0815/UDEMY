"use strict";

let mein_array = [
    "servus",
    true,
    1,
    "Mia",
    15,
    false,
    "na freilich",
    2,
    109,
    true,
    true,
    "Food"
];

let mein_objekt = {
    name: "Max",
    vorname: "Mustermann",
    alter: 26,
}


console.log(mein_array);
console.log(mein_objekt);

for (let eigenschaft in mein_array) {
    console.log(eigenschaft);
}

for (let e in mein_objekt) {
    console.log(e);
    console.log(mein_objekt[e]);
}

for (let w of mein_array) {
    console.log(w);
};