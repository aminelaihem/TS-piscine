interface Adresse {
    rue: string;
    ville: string;
}
interface Personne {
    readonly id: number;
    nom: string;
    age: number;
    adresse?: Adresse;
}
declare function afficherPersonneAvancee(personne: Personne): void;
declare const personne2: Personne;
declare const personne3: Personne;
