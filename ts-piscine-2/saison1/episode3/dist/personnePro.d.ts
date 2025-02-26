interface Employe {
    nom: string;
    poste: string;
}
interface Client {
    nom: String;
    entreprise: String;
}
type PersonnePro = Employe | Client;
declare function afficherInfoProfessionnelle(personne: PersonnePro): void;
declare const employe1: Employe;
declare const client1: Client;
