abstract class Forme {
    abstract calculerSurface():number ;
}

class Rectangle extends Forme {
    constructor(public larguer : number,public hauteur : number ){
        super();
    }

    calculerSurface(): number {
        return this.larguer * this.hauteur;
    }
}

class Cercle extends Forme {
    constructor(public rayon: number) {
      super();
    }
  
    calculerSurface(): number {
      return Math.PI * this.rayon * this.rayon;
    }
}

const rectangle = new Rectangle(10, 5);
const cercle = new Cercle(5);

console.log(`Surface du rectangle : ${rectangle.calculerSurface()}`);
console.log(`Surface du cercle : ${cercle.calculerSurface()}`);