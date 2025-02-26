"use strict";
function afficherPersonne(personne) {
    console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}
const personne1 = { nom: "Amine", age: 25 };
afficherPersonne(personne1);
