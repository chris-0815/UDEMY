"use strict";

let array11 = [12, 34,6,345,1234,645,324,42,32,6,5,8,76,4,3,23,6,7,8,5,23,56,65,62,5,2,56,76,7336124,];

let kleinerGleichZwanzig = array11.filter(function(e) {
    if (e <= 50) {
        return true;
    } else {
        return false;
    }
});

console.log(kleinerGleichZwanzig)