"use strict";

let d = new Date();

d.setFullYear(1993);
d.setMonth(2);
d.setDate(18);
d.setHours(9);
d.setMinutes(34);
d.setSeconds(12);
d.setMilliseconds(111);

let c = new Date();
c.getFullYear();
c.getMonth();
c.getDate();
c.getHours();
c.getMinutes();
c.getSeconds();
c.getMilliseconds();

console.log(d);
console.log(c);
