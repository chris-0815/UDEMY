"use strict";

let qs_1 = document.querySelector("body > #navigation > ul");
console.log(qs_1);

let qs_2 = document.querySelector(".jumbotron");
console.log(qs_2);

let qs_3 = document.querySelector("test");
console.log(qs_3);

// let qs_4 = document.querySelector("%67$§");
// console.log(qs_4);

let qs_5 = document.querySelectorAll("body > #navigation > ul");
console.log(qs_5);

let qs_6 = document.querySelectorAll("body > #navigation > ul > li > a");
console.log(qs_6);

let qs_7 = document.querySelectorAll(".test");
console.log(qs_7);
console.log(qs_7.length == 0);

// let qs_8 = document.querySelectorAll("§$§$%&§")
