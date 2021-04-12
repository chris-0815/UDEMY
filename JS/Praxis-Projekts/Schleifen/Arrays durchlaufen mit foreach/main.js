"use strict";

let zahlen = [5, 8, 0, 44, 42, 99, 15, 91];
console.log(zahlen);

/* 
for (let i = 0; i < zahlen.length; i++) {
    console.log(zahlen[i]);
} 
let meine_function = function(e) {
    console.log(e);
}
zahlen.forEach(meine_function)
*/

zahlen.forEach(function(e) {
    console.log(e);
});