import { GestionCours, NiveauCours, Etudiant } from "./gestionCours.js";

const gestion = new GestionCours();

gestion.ajouterCours({ code: "TS101", titre: "Introduction à TypeScript", niveau: NiveauCours.Debutant });
gestion.ajouterCours({ code: "TS201", titre: "TypeScript avancé", niveau: NiveauCours.Intermediaire });

const etudiant1: Etudiant = { id: 1, nom: "Amine", niveau: "Licence" };
const etudiant2: Etudiant = { id: 2, nom: "Atlas", niveau: "Master" };

gestion.ajouterEtudiant(etudiant1);
gestion.ajouterEtudiant(etudiant2);

gestion.inscrireEtudiant("TS101", etudiant1);
gestion.inscrireEtudiant("TS201", etudiant2);

gestion.afficherInscriptions();
