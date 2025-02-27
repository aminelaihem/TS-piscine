"use strict";
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    seDeplacer() {
        console.log(`L'animal ${this.nom} se déplace.`);
    }
}
class Chien extends Animal {
    seDeplacer() {
        console.log(`Le chien ${this.nom} court.`);
    }
}
class Chat extends Animal {
    seDeplacer() {
        console.log(`Le chat ${this.nom} saute.`);
    }
}
function faireSeDeplacer(animaux) {
    animaux.forEach(animal => {
        animal.seDeplacer();
    });
}
const symba = new Chat("Symba");
const rex = new Chien("Rex");
const animaux = [symba, rex];
faireSeDeplacer(animaux);
