"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const maVoiture = {
    marque: "Mercedes",
    modele: "a45s",
    annee: 2022
};
console.log(getProperty(maVoiture, "marque"));
console.log(getProperty(maVoiture, "annee"));
