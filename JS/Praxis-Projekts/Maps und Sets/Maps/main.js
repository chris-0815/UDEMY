"use strict";

let meine_map = new Map();

console.log(meine_map);

meine_map.set("Test", "Wert zur Eigenschaft TEST");
meine_map.set(13, "Wert zur Eigenschaft 13");
meine_map.set([], "Wert zur Eigenschaft []");
meine_map.set(function(test) {console.log("test")}, "Wert zur Eigenschaft function")
meine_map.set({}, "Wert zur Eigenschaft {}");

console.log(meine_map);


console.log(meine_map.get("Test"));
console.log(meine_map.get(13));
console.log(meine_map.get([]));
console.log(meine_map.get(function() {}));
console.log(meine_map.get({}));


console.log(meine_map.has(13));
console.log(meine_map.has(15));
console.log(meine_map.has([]));
console.log(meine_map.has(function() {}));
console.log(meine_map.has({}));

meine_map.delete("Test");
console.log(meine_map);

// meine_map.clear();

meine_map.size();
console.log(meine_map);


