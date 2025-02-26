class Rectangle {
    constructor(public largeur: number, public hauteur: number) {}
  
    calculerSurface(): number {
      return this.largeur * this.hauteur;
    }
}
  
class Cercle {
    constructor(public rayon: number) {}
  
    calculerSurface(): number {
      return Math.PI * this.rayon * this.rayon;
    }
}
  
function afficherSurface(forme: Rectangle | Cercle): void {
    if (forme instanceof Rectangle) {
      console.log(`Ceci est un rectangle de surface ${forme.calculerSurface()}.`);
    } else if (forme instanceof Cercle) {
      console.log(`Ceci est un cercle de surface ${forme.calculerSurface()}.`);
    }
}
  
const monRectangle = new Rectangle(10, 5);
const monCercle = new Cercle(7);
  
afficherSurface(monRectangle); 
afficherSurface(monCercle);    
  