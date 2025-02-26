interface Employe {
    nom : string;
    poste : string;
}

interface Client {
    nom : String;
    entreprise : String;
}

type PersonnePro = Employe | Client;

function afficherInfoProfessionnelle(personne: PersonnePro): void {
    if ("poste" in personne) {
      console.log(`Employé: ${personne.nom} travaille comme ${personne.poste}.`);
    } else if ("entreprise" in personne) {
      console.log(`Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}.`);
    }
}

const employe1 : Employe = {nom : "Amine", poste : "Dev Full-Stack"} ;

const client1 : Client = {nom : "Atlas", entreprise : "DIOR"};

afficherInfoProfessionnelle(client1);
afficherInfoProfessionnelle(employe1);
  