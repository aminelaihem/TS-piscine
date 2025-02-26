"use strict";
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    seDeplacer() {
        console.log(`L'animal ${this.nom} se déplace.`);
    }
}
const lion = new Animal("Leo");
lion.seDeplacer();
