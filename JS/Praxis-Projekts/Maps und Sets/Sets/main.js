"use strict";

let mein_set = new Set();
console.log(mein_set);

mein_set.add(12);
mein_set.add("Hallo");
mein_set.add([]);
mein_set.add(12);                   // keine Werte können im Set zweimal gespeichert werden. 
mein_set.add("Hallo");
mein_set.add([]);                   // Arrays / Objekte / functions können mehrfach im Set abgelegt werden
mein_set.add({});
mein_set.add(function() {});        // Arrays / Objekte / functions können mehrfach im Set abgelegt werden
mein_set.add({});
mein_set.add(function() {});

console.log(mein_set);

console.log(mein_set.has("Hallo"));
console.log(mein_set.has(12));
console.log(mein_set.has(13));
console.log(mein_set.has([]));      // Arrays / Objekte / functions können nicht durch .has abgefragt werden. Denn zwei Objekte sind niemals gleich - 
console.log(mein_set.has({}));      // ausser es handelt sich um ein und dasselbe Objekt
console.log(mein_set.has(function() {}));

mein_set.delete("Hallo");
console.log(mein_set);

// mein_set.clear();



console.log(mein_set.size);