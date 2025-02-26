interface Vehicule {
    marque: string;
    annee: number;
}
declare function isVehicule(obj: any): obj is Vehicule;
declare function afficherVehicule(obj: any): void;
declare const voiture: Vehicule;
declare const objetInvalide: {
    marque: string;
};
