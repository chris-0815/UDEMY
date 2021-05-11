"use strict";

let meine_map = new Map();
meine_map.set("Hallo", "Der wert zu dem Eigenschaft Hallo");
meine_map.set(12, "Der wert zu dem Eigenschaft 12")
meine_map.set([], "Der wert zu dem Eigenschaft []");
meine_map.set("Test", "Wert zur Eigenschaft TEST");
meine_map.set(13, "Wert zur Eigenschaft 13");
meine_map.set([], "Wert zur Eigenschaft []");
meine_map.set(function(test) {console.log("test")}, "Wert zur Eigenschaft function")
meine_map.set({}, "Wert zur Eigenschaft {}");


let mein_set = new Set();
mein_set.add("Hallo");
mein_set.add(12);
mein_set.add([]);
mein_set.add(function(test) {console.log("test")});
mein_set.add({});
mein_set.add("Test");
mein_set.add("[]");


console.log(meine_map);
console.log(mein_set);

meine_map.forEach(function(wert, eigenschaft, map) {
    console.log(wert);
    console.log(eigenschaft);
    console.log(map);
});


mein_set.forEach(function(wert, NULL, set) {
    console.log(wert);
    console.log(set);
});


for (let paar of meine_map) {           
    console.log(paar);
};

// [eigenschaft, wert]
for (let [eigenschaft, wert] of meine_map) {
    console.log(eigenschaft);
    console.log(wert);
};

for (let wert of mein_set) {
    console.log(wert);
};

