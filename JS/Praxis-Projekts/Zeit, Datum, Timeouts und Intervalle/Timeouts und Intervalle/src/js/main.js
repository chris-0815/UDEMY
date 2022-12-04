"use strict";

// setTimeout(callback-funktion, zeitspanne[, parameter1, parameter2, ...., parameterN]);

// console.log("Los!");
// setTimeout(function () {
//   console.log("Fertig!");
// }, 2000);

// setTimeout(code-string, zeitspanne)

// console.log("Los!");
// setTimeout('console.log("Fertig!");', 2000);
// console.log(setTimeout('console.log("Fertig!");', 2000));

// clearTimeout(1);

// setInterval(callback-funktion, zeitspanne[, parameter1, parameter2, ...., parameterN]);

setInterval(function () {
  console.log("1 sekunde vergangen");
}, 1000);

// setInterval(code-string, zeitspanne)

setInterval('console.log("Eine Sekunde ist um!");', 1000);

clearInterval(1);
