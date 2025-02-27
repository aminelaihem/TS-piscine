"use strict";
function creerScore() {
    return ["Joueur1", 100];
}
function afficherScore(score) {
    console.log(`Le joueur ${score[0]} a un score de ${score[1]}.`);
}
afficherScore(creerScore());
