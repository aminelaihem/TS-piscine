function premierElement<T>(tableau: T[]): T {
    return tableau[0];
}
  
const nombres = [10, 20, 30, 40];
const chaines = ["Amine", "Atlas", "Tommy"];
const objets = [{ id: 1, nom: "Amine" }, { id: 2, nom: "Atlas" }];
  
console.log(premierElement(nombres));  
console.log(premierElement(chaines));  
console.log(premierElement(objets));  
  