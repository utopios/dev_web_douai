/**
 * Les tableaux à 2 dimensions
 */

// Déclaration de deux tableaux numériques
let legumes = ["Poireaux", "Concombre", "Epinard"];
let fruits = new Array("Raisin", "Bananes","Abricot");

// Affichage des deux tableaux
console.table(legumes);
console.table(fruits);

// Création d'un tableau à deux diemnsion depuis les deux tableaux numériques
let primeur = new Array(legumes,fruits);

// Affichage du tableau à deux dimension
console.table(primeur);

// Affichage de Poireaux 
console.log(primeur[0][0]);
// Affichage de Abricot
console.log(primeur[1][2]);

let zoo = [
    {
        pseudo:"Simba",
        espece:"Lion",
        continent:"Afrique"
    },
    {
        pseudo:"Tony",
        espece:"Kangourou",
        continent:"Océanie"
    }
];

// Afficher dans la console le pseudo du Lion et du Kangoroo (Avec une concaténation) 
console.table(zoo);
console.log("Venez découvrir dans notre zoo "+zoo[0].pseudo+" et "+zoo[1].pseudo);
console.log("Venez découvrir dans notre zoo "+zoo[0]["pseudo"]+" et "+zoo[1].pseudo);
