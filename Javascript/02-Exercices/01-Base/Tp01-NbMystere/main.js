/**
 * TP - Le Nombre Mystère
 */

// Déclaration des variables
let nbMystere = 0,
    nbCoups = 0,
    gagne = false

// Récupération des éléments du DOM
const ligne1 = document.querySelector('#ligne1')
const ligne2 = document.querySelector('#ligne2')
const nbCoupsHTML = document.querySelector('#nbCoups')
const nbUser = document.querySelector('#nbUser')
const validerBtn = document.querySelector('#valider')

// Fonction pour démarrer le jeu
function StartGame() {
    // Génération d'un nombre aléatoire
    nbMystere = Math.floor(Math.random() * 50)
    nbCoups = 0

    // Initialisation des champs HTML et du bouton
    nbCoupsHTML.textContent = " " + nbCoups;
    ligne1.textContent = `J'ai généré un nombre entre 1 et 50 inclus`
    ligne2.textContent = `Essayer de le deviner en proposant ci-dessous`
    nbUser.value = "";
    validerBtn.disabled = false;
    gagne = false;
}

//Fonction pour actualiser le nombre de coup 
function UpdateNbCoups(){

}

// Fonction valider déclenchée par le bouton
function Valider(){

}

// Fonction pour terminer la partie
function EndGame(){

}

// Recharger la page pour relancer une partie
function Replay(){
    
}

window.onload = StartGame()

