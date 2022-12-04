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
console.log(c.getFullYear());
console.log(c.getMonth());
console.log(c.getDate());
console.log(c.getHours());
console.log(c.getMinutes());
console.log(c.getSeconds());
console.log(c.getMilliseconds());

console.log(d);
console.log(c);

let d_utc = new Date();
console.log(d_utc.setUTCFullYear(1993));
console.log(d_utc.setUTCMonth(2));
console.log(d_utc.setUTCDate(18));
console.log(d_utc.setUTCHours(9));
console.log(d_utc.setUTCMinutes(34));
console.log(d_utc.setUTCSeconds(12));
console.log(d_utc.setUTCMilliseconds(111));

console.log(d_utc);

let c_utc = new Date();
console.log(c_utc.getUTCFullYear());
console.log(c_utc.getUTCMonth());
console.log(c_utc.getUTCDate());
console.log(c_utc.getUTCHours());
console.log(c_utc.getUTCMinutes());
console.log(c_utc.getUTCSeconds());
console.log(c_utc.getUTCMilliseconds());

console.log(c_utc);

d_unix.setTime(123546347345);
console.log(d_unix);
console.log(d_unix.getTime());
