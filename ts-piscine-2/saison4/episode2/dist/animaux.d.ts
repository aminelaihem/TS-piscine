interface IAnimal {
    nom: string;
    seDeplacer(): void;
}
declare class Animal implements IAnimal {
    nom: string;
    constructor(nom: string);
    seDeplacer(): void;
}
declare class Chien extends Animal {
    seDeplacer(): void;
}
declare class Chat extends Animal {
    seDeplacer(): void;
}
declare function faireSeDeplacer(animaux: IAnimal[]): void;
declare const symba: Chat;
declare const rex: Chien;
declare const animaux: IAnimal[];
