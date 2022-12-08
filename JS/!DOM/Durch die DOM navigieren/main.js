"use strict";

let ul = document.querySelector("#navigation");
// console.log(nav);

// Kindelemente

let child_nodes = ul.childNodes; // alle Kindelemente inklusive Text- und Kommentarknoten
let children = ul.children; // alle Kindelemente exklusive Text- und Kommentarknoten
let first_child = ul.firstChild; // erstes Kindelement inkl. Text- und Kommentarknoten
let last_child = ul.lastChild; // letztes Kindelement inkl. Text- und Kommentarknoten
let first_element_child = ul.firstElementChild; // erstes Kindelement exklusive Text- und Kommentarknoten
let last_element_child = ul.lastElementChild; // letztes Kindelement inkl. Text- und Kommentarknoten

// Geschwisterelemente

let next_sibling = ul.nextSibling; // nächstes Geschwisterelement inklusive Text- und Kommentarknoten
let prev_sibling = ul.prevSibling; // vorangehendes Geschwisterelement inkl. Text- und Kommentarknoten
let next_element_sibling = ul.nextElementSibling; // nächstes Geschwisterelement exklusive Text- und Kommentarknoten
let next_element_sibling_v2 = ul.firstElementChild.nextElementSibling; // erstes Kindelement dann nächstes Geschwisterelement exklusive Text- und Kommentarknoten hiermit wirds krass. Dadurch kannst anonyme durch navigieren musst nur den DOM-Aufbau kennen
let previous_element_sibling = ul.previousElementSibling; // vorangehendes Geschwisterelement exklusive Text- und Kommentarknoten
let previous_element_sibling_v2 = ul.lastElementChild.previousElementSibling; // letztes Element Kind dann vorangehendes Geschwisterelement exklusive Text- und Kommentarknoten

let parent_of_child = ul.parentElement; //
let parent_of_last_child = ul.parentElement.lastChild; //
let parent_of_prev_sibling = ul.parentElement.prevSibling; //

let anker = ul.querySelector("li > a"); // Allgemeines Selectieren

console.log(child_nodes);
console.log(children);
console.log(first_child);
console.log(last_child);
console.log(first_element_child);
console.log(last_element_child);
console.log(next_sibling);
console.log(prev_sibling); // undefined
console.log(next_element_sibling);
console.log(next_element_sibling_v2);
console.log(previous_element_sibling);
console.log(previous_element_sibling_v2);
console.log(parent_of_child);
console.log(parent_of_last_child);
console.log(parent_of_prev_sibling); // undefined
