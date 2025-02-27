import { alerter, logger } from "./mon-module/index.js";
export var NiveauCours;
(function (NiveauCours) {
    NiveauCours[NiveauCours["Debutant"] = 0] = "Debutant";
    NiveauCours[NiveauCours["Intermediaire"] = 1] = "Intermediaire";
    NiveauCours[NiveauCours["Avance"] = 2] = "Avance";
})(NiveauCours || (NiveauCours = {}));
export class GestionCours {
    constructor() {
        this.etudiants = [];
        this.cours = [];
        this.inscriptions = new Map(); // Associe un cours à ses étudiants
    }
    ajouterCours(cours) {
        this.cours.push(cours);
        this.inscriptions.set(cours.code, []);
    }
    ajouterEtudiant(etudiant) {
        this.etudiants.push(etudiant);
    }
    inscrireEtudiant(coursCode, etudiant) {
        var _a;
        const cours = this.cours.find(c => c.code === coursCode);
        if (!cours) {
            alerter(`Cours non trouvé : ${coursCode}`);
            return;
        }
        (_a = this.inscriptions.get(coursCode)) === null || _a === void 0 ? void 0 : _a.push(etudiant);
        logger(`${etudiant.nom} inscrit au cours ${cours.titre}`);
        alerter(`${etudiant.nom} est inscrit à ${cours.titre} !`);
    }
    afficherInscriptions() {
        console.log("\nListe des inscriptions :");
        this.inscriptions.forEach((etudiants, coursCode) => {
            const cours = this.cours.find(c => c.code === coursCode);
            console.log(` ${cours === null || cours === void 0 ? void 0 : cours.titre} : ${etudiants.map(e => e.nom).join(", ") || "Aucun étudiant inscrit"}`);
        });
    }
}
