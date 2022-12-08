"use strict";

let html_collection = document.getElementsByClassName("jumbotron");
let html_collection_2 = document.getElementsByTagName("li");
let html_collection_4 = document.querySelector("li");
let html_collection_3 = document.querySelectorAll("p");

// for Schleife
for (let i = 0; i < html_collection.length; i++) {
  console.log(html_collection[i]);
}
for (let i = 0; i < html_collection_2.length; i++) {
  console.log(html_collection_2[i]);
}

// for of Schleife
for (let e of html_collection) {
  console.log(e);
}
for (let e of html_collection_2) {
  console.log(e);
}

// Node List
for (let i = 0; i < html_collection_3.length; i++) {
  console.log(html_collection[i]);
}
for (let e of html_collection_3) {
  console.log(e);
}
html_collection_3.forEach((element) => {
  console.log(element);
});
