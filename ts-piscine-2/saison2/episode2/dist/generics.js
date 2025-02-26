"use strict";
function premierElement(tableau) {
    if (tableau.length === 0) {
        return undefined;
    }
    return tableau[0];
}
const tableauNonVide = [10, 20, 30, 40];
const tableauVide = [];
console.log(premierElement(tableauNonVide));
console.log(premierElement(tableauVide));
