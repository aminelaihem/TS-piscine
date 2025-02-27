export declare enum NiveauCours {
    Debutant = 0,
    Intermediaire = 1,
    Avance = 2
}
export interface Etudiant {
    id: number;
    nom: string;
    niveau: string;
}
interface Cours {
    code: string;
    titre: string;
    niveau: NiveauCours;
}
export declare class GestionCours {
    private etudiants;
    private cours;
    private inscriptions;
    ajouterCours(cours: Cours): void;
    ajouterEtudiant(etudiant: Etudiant): void;
    inscrireEtudiant(coursCode: string, etudiant: Etudiant): void;
    afficherInscriptions(): void;
}
export {};
