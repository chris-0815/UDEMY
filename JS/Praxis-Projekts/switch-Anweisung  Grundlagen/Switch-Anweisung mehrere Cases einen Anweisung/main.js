"use strict";

let essen = "Brot";

switch (essen) {
    case "Nudeln":
    case "Steak":
    case "Pizza":
        console.log("Das mag ich!")
        break
    case "Fisch":
    case "Hummer":
    case "Kaviar":
        console.log("Das mag ich nicht!")
        break
    default:
        console.log(`Ich kenne "${essen}" nicht. Was ist das?`)
        break
};