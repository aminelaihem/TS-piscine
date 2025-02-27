"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Nord"] = 0] = "Nord";
    Direction[Direction["Sud"] = 1] = "Sud";
    Direction[Direction["Est"] = 2] = "Est";
    Direction[Direction["Ouest"] = 3] = "Ouest";
})(Direction || (Direction = {}));
function vecteurDirection(direction) {
    switch (direction) {
        case Direction.Nord:
            return [0, 1];
        case Direction.Sud:
            return [0, -1];
        case Direction.Est:
            return [1, 0];
        case Direction.Ouest:
            return [-1, 0];
    }
}
function deplacer(point, direction) {
    const [dx, dy] = vecteurDirection(direction);
    return [point[0] + dx, point[1] + dy];
}
let point = [5, 5];
console.log("Position initiale :", point);
point = deplacer(point, Direction.Nord);
console.log("Après déplacement vers le Nord :", point);
point = deplacer(point, Direction.Est);
console.log("Après déplacement vers l'Est :", point);
point = deplacer(point, Direction.Sud);
console.log("Après déplacement vers le Sud :", point);
point = deplacer(point, Direction.Ouest);
console.log("Après déplacement vers l'Ouest :", point);
