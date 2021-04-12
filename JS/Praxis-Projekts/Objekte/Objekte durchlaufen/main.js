"use strict";

let mein_objekt = {
    name: "Mustermann",
    vorname: "Max",
    alter: 26,
};



// so bitte nicht !
// for (let e in mein_objekt) {
//     console.log(mein_objekt[e]);
// }


let paare = Object.entries(mein_objekt);
console.log(paare);

for (let paar of paare) {
    console.log(paar);
    for (let e of paar) {
        console.log(e);
    }
}


for (let e of Object.keys(mein_objekt)) {
    console.log(e);
}


for (let w of Object.values(mein_objekt)) {
    console.log(w)
}

const object1 = {
  a: 'somestring',
  b: 42,
  c: true,
  d: "The World is mine",
  e: 815,
};


for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed

let werte2 = Object.entries(object1).sort((a, b) => b[0].localeCompare(a[0]));
console.log(werte2);


// Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));
// so wird das Array von unten nach oben eingelesen und abgelegt