"use strict";
function afficherInfoProfessionnelle(personne) {
    if ("poste" in personne) {
        console.log(`Employé: ${personne.nom} travaille comme ${personne.poste}.`);
    }
    else if ("entreprise" in personne) {
        console.log(`Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}.`);
    }
}
const employe1 = { nom: "Amine", poste: "Dev Full-Stack" };
const client1 = { nom: "Atlas", entreprise: "DIOR" };
afficherInfoProfessionnelle(client1);
afficherInfoProfessionnelle(employe1);
