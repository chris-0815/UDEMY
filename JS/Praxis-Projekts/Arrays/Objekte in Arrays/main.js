"use strict";

/*
let auto_1 = {
    marke : "BMW",
    modell : "i30",
    farbe : "rot",
}

let auto_2 = {
    marke : "Ford",
    modell : "Fiesta ST",
    farbe : "schwarz",
}

let auto_3 = {
    marke : "VW",
    modell : "GTI",
    farbe : "blau",
}

let autos = [
    auto_1,
    auto_2,
    auto_3
];
*/

let autos = [{
        marke: "BMW",
        modell: "i30",
        farbe: "rot"
    },
    {
        marke: "Ford",
        modell: "Fiesta ST",
        farbe: "schwarz",
    },
    {
        marke: "VW",
        modell: "GTI",
        farbe: "blau",
    },
];

console.log(autos)

console.log(autos[1]);
console.log(autos[2]);
console.log(autos[0]);

console.log(autos[1].marke);
console.log(autos[1]["marke"]);



/*
let waren = [
    [
        "Bananen",
        "Apfel",
        "Birne",
        "Erdbeere"
    ],
    [
        "Moehren",
        "Sellerie",
        "Kohl",
        "Zwiebeln"
    ],
    [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"
    ],
];
*/

let waren = {
    obst: [
        "Bananen",
        "Apfel",
        "Birne",
        "Erdbeere"
    ],
    gemuese: [
        "Moehren",
        "Sellerie",
        "Kohl",
        "Zwiebeln"
    ],
    brot: [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"
    ],
};


console.log(waren.obst);
console.log(waren.gemuese);
console.log(waren.brot);

console.log(waren.obst[1]);
console.log(waren.gemuese[2]);
console.log(waren.brot[0]);