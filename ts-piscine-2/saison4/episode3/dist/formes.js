"use strict";
class Forme {
}
class Rectangle extends Forme {
    constructor(larguer, hauteur) {
        super();
        this.larguer = larguer;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.larguer * this.hauteur;
    }
}
class Cercle extends Forme {
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }
    calculerSurface() {
        return Math.PI * this.rayon * this.rayon;
    }
}
const rectangle = new Rectangle(10, 5);
const cercle = new Cercle(5);
console.log(`Surface du rectangle : ${rectangle.calculerSurface()}`);
console.log(`Surface du cercle : ${cercle.calculerSurface()}`);
