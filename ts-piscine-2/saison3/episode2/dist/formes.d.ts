declare class Rectangle {
    largeur: number;
    hauteur: number;
    constructor(largeur: number, hauteur: number);
    calculerSurface(): number;
}
declare class Cercle {
    rayon: number;
    constructor(rayon: number);
    calculerSurface(): number;
}
declare function afficherSurface(forme: Rectangle | Cercle): void;
declare const monRectangle: Rectangle;
declare const monCercle: Cercle;
