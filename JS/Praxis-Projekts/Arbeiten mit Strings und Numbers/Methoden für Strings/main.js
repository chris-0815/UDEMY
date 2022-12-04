"use strict";

let s = " Lorem ipsum dolor sit amet ipsum. ";

console.log(s.length);
// Achtung Case-Sensitive Funktionen
console.log(s.indexOf("ipsum", 20));
console.log(s.lastIndexOf("ipsum", 10));
console.log(s.includes("sit", 28));
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.trim()); // entfernt leerzeichen am anfang und am ende
console.log(s.repeat(100));
