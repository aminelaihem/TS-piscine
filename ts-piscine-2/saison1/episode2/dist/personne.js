"use strict";
function afficherPersonneAvancee(personne) {
    if (personne.adresse) {
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID : ${personne.id}) et j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}. `);
    }
    else {
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID : ${personne.id}) et j'ai ${personne.age} ans`);
    }
}
const personne2 = { id: 2, nom: "Amine", age: 22, adresse: { rue: "83 rue de mathieu stillati", ville: "Marseille" } };
const personne3 = { id: 3, nom: "Atlas", age: 22 };
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);
