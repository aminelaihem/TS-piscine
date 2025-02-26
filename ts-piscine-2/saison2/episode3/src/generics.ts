function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  
interface Voiture {
    marque: string;
    modele: string;
    annee: number;
}
  
const maVoiture: Voiture = {
    marque: "Mercedes",
    modele: "a45s",
    annee: 2022
};
  
console.log(getProperty(maVoiture, "marque")); 
console.log(getProperty(maVoiture, "annee"));  
 