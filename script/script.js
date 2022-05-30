let tamagotchiEnergie = 10;
let tamagotchiFaim = 0;
let tamagotchiJoie = 5;

let choixUtilisateur = "";

function jouer() {
  tamagotchiEnergie -= 2;
  tamagotchiFaim += 1;
  tamagotchiJoie += 1;
}

function nourrir() {
  tamagotchiEnergie += 2;
  if (tamagotchiFaim > 0) {
    tamagotchiFaim -= 1;
  }
  tamagotchiJoie -= 1;
}

function restartGame() {
  return prompt(`
  -----------------------------------
  Voulez vous rejouer ?
  -----------------------------------
  1/ Oui
  2/ Non
  
  ------------------------------------
  `);
}

function afficherLesChoix() {
  return prompt(`
-----------------------------------
Que voulez vous choisir ?
-----------------------------------
1/ Jouer
2/ Nourrir
3/ Quitter
------------------------------------
Stats du Tamagotchi ==> Energie: ${tamagotchiEnergie} Faim: ${tamagotchiFaim} Joie: ${tamagotchiJoie}
`);
}

let choixRestart = restartGame();

if (choixRestart == "1") {
  while (choixUtilisateur !== "3") {
    choixUtilisateur = afficherLesChoix();

    if (choixUtilisateur === "1") {
      jouer();
    } else if (choixUtilisateur === "2") {
      nourrir();
    } else if (choixUtilisateur === "3") {
      alert("CIAO CASSE TOI");
    } else {
      alert("ERROR 400");
    }

    if (tamagotchiFaim >= 5) {
      alert("Votre Tamagotchi est mort de faim");
      break;
    } else if (tamagotchiJoie < 0) {
      alert("Votre Tamagotchi est mort de tristesse");
      break;
    } else if (tamagotchiEnergie < 0) {
      alert("Votre Tamagotchi est mort de fatigue");
      break;
    }
  }
}
