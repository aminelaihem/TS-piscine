import {alerter, logger} from "./mon-module/index.js";

export enum NiveauCours {
    Debutant,
    Intermediaire,
    Avance,
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
  
interface Professeur {
    id: number;
    nom: string;
    matiere: string;
}
  
export class GestionCours {
    private etudiants: Etudiant[] = [];
    private cours: Cours[] = [];
    private inscriptions: Map<string, Etudiant[]> = new Map(); // Associe un cours à ses étudiants
  
    ajouterCours(cours: Cours): void {
      this.cours.push(cours);
      this.inscriptions.set(cours.code, []);
    }
  
    ajouterEtudiant(etudiant: Etudiant): void {
      this.etudiants.push(etudiant);
    }
  
    inscrireEtudiant(coursCode: string, etudiant: Etudiant): void {
        const cours = this.cours.find(c => c.code === coursCode);
        if (!cours) {
          alerter(`Cours non trouvé : ${coursCode}`);
          return;
        }
      
        this.inscriptions.get(coursCode)?.push(etudiant);
        logger(`${etudiant.nom} inscrit au cours ${cours.titre}`);
        alerter(`${etudiant.nom} est inscrit à ${cours.titre} !`);
    }
  
    afficherInscriptions(): void {
      console.log("\nListe des inscriptions :");
      this.inscriptions.forEach((etudiants, coursCode) => {
        const cours = this.cours.find(c => c.code === coursCode);
        console.log(` ${cours?.titre} : ${etudiants.map(e => e.nom).join(", ") || "Aucun étudiant inscrit"}`);
      });
    }
}
  