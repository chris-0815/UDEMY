"use strict";

// Element erstellen
let div = document.createElement("div");
console.log(div);

// Attributes erstellen
let attr = document.createAttribute("id");
attr.value = "meine_id";
console.log(attr);

// Attributes einem Element hinzufügen
div.setAttributeNode(attr);

// Attribute erstellen und hinzufügen
div.setAttribute("class", "meine_klasse");

let text = document.createTextNode(
  "Lorem ipsum dolor sit amet, consectetur adip"
);
console.log(text);
console.log(div);
