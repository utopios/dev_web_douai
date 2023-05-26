/**
 * Exercice15 - IfElse - Quelle taille me correspond ?
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

// Récupération et stockage des saisies utilisateur
let taille = prompt("Veuillez saisir votre taille (en cm) :")
let poids = prompt("Veuillez saisir votre poids (en kg) :")

if (taille >= 145 && taille < 172 && poids >= 43 && poids <= 47 ||
    taille >= 145 && taille < 169 && poids >= 48 && poids <= 53 ||
    taille >= 145 && taille < 166 && poids >= 54 && poids <= 59 ||
    taille >= 145 && taille < 163 && poids >= 60 && poids <= 65) {
        affichage = "Prenez la taille 1";
} else if (taille >= 169 && taille < 183 && poids >= 48 && poids <= 53 ||
        taille >= 166 && taille < 178 && poids >= 54 && poids <= 59 ||
        taille >= 163 && taille < 175 && poids >= 60 && poids <= 65 ||
        taille >= 160 && taille < 172 && poids >= 66 && poids <= 71) {
            affichage = "Prenez la taille 2";
} else if (taille >= 178 && taille < 183 && poids >= 54 && poids <= 59 ||
        taille >= 175 && taille < 183 && poids >= 60 && poids <= 65 ||
        taille >= 172 && taille < 183 && poids >= 66 && poids <= 71 ||
        taille >= 163 && taille < 183 && poids >= 72 && poids <= 77 ) {
            affichage = "Prenez la taille 3";
} else {
        affichage = "Aucune taille ne vous correspond";
}

result.innerHTML = `Pour <b>${taille}cm</b> et <b>${poids}kg</b> : <br>
                    <ul>
                        <li>${affichage}</li>
                    </ul>                    
`