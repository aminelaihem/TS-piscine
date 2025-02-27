declare abstract class Forme {
    abstract calculerSurface(): number;
}
declare class Rectangle extends Forme {
    larguer: number;
    hauteur: number;
    constructor(larguer: number, hauteur: number);
    calculerSurface(): number;
}
declare class Cercle extends Forme {
    rayon: number;
    constructor(rayon: number);
    calculerSurface(): number;
}
declare const rectangle: Rectangle;
declare const cercle: Cercle;
