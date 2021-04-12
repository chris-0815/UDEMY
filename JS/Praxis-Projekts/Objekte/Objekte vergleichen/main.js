"use strict";

let auto_1 = {
    marke: "BMW",
    modell: "i8",
};

let auto_2 = {
    marke: "Tesla",
    modell: "Model X",
};

let auto_3 = {
    marke: "Tesla",
    modell: "Model X",
};

function vergleichen(a, b) {
    if (a.marke == b.marke && a.modell == b.modell) {
        return true
    } else {
        return false
    };
};

console.log(vergleichen(auto_2, auto_3));