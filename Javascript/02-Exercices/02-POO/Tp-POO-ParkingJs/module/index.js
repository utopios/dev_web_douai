// Import de la classe véhicule

// Création du tableau parking

// Stockage du DOM dans des variables
const btnPayer = document.querySelector("#btnPayer")
const btnEnter = document.querySelector('#btnEnter')
const licencePlate = document.querySelector('#licencePlate')
const successBox = document.querySelector('#successBox')
const alertBox = document.querySelector('#alertBox')
const messageBox = document.querySelector('#messageBox')

// fonction onclick avec le bouton btnEnter

// fonction onclick avec le bouton btnPayer

function displayBox(domElement, message, delay) {
    domElement.style.display = "block"
    domElement.textContent = message
    setTimeout(() => {
        domElement.style.display = "none"
    },delay)
}

function addToPark () {
    // Fonction pour ajouter une voiture dans le parking
}

function findCar() {
    // Fonction pour chercher si un véhicule existe dans le parking
}

function init(){
    // Ajouter des véhicules à la liste
    // new Vehicule('AA-123-AA', new Date("2023-06-08T14:00:00"))

    alertBox.style.display = "none"
    messageBox.style.display = "none"
    successBox.style.display = "none"

   // displayBox(successBox, "Veuillez prendre votre ticket", 5000)
}

window.onload = init()