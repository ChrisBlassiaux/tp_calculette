// Les actions de l'utilisateur :
// L'utilisateur sélectionne grâce au HTML l'opérateur de calcul (+, -, *, /)
// L'utilisateur saisi grâce au HTML les deux valeurs qu'il lui permet de réaliser un calcul
// L'utilisateur clique sur "Calculer" et permet de lancer un script

// Ce que le script JS doit faire :
// - Écouter le clique sur le formulare (btn submit)
//       - Il va falloir utiliser le fonction "preventDefault()"
// - Lorsque la fonction de l'écouteur d'évènement est lancée
//       - Récuperer les 2 valeurs dans les inputs
//       - Récupérer l'opérateur dans le select
// - En fonction de l'opérateur, réaliser une addition si l'opérateur choisi est le "+"
// - Réaliser une soustraction si l'opérateur choisi est le "-"
// - etc...
// Pour finir, une fois le resultat du calcul en main, il suffit de l'afficher grâce à une alerte "alert(`${nb1}${operator}${nb2} = ${result}`)"


// Nous récupérons le formulaire complet 
let form = document.querySelector('#calculator');

// Nous appliquons l'écouteur d'évènement sur le formulaire
// L'écouteur 'submit' s'applique uniquement sur un formulaire
// Il permet d'écouter la soumission d'un formulaire (clique sur le boutton de type 'submit')
form.addEventListener('submit', function(event) {
    // La méthode .preventDefault() nous permet d'annuler le comportement par défaut de la soumission d'un formulaire 
    // C'est-à-dire l'actualisation de la page
    event.preventDefault();

    // Rechercher les informations : 
    // Je range dans une variable mon element HTML qui a l'id "number1"
    let number1 = document.querySelector('#number1');
    // Je range dans une variable mon element HTML qui a l'id "number2"
    let number2 = document.querySelector('#number2');
    // Je range dans une variable mon element HTML qui a l'id "operator"
    let operator = document.querySelector('#operator');

    // J'initialise ma variable qui stockera le resultat après ma condition (pour le moment à 0)
    let result = 0;

    // Si l'opérateur choisi est l'opérateur +
    if (operator.value == '+') {
        // Je lance mon opération avec l'addition (+)
        result = Number(number1.value) + Number(number2.value);
    // Si l'opérateur choisi est l'opérateur -
    } else if (operator.value == '-') {
        // Je lance mon opération avec la soustraction (-)
        result = Number(number1.value) - Number(number2.value);
    // Si l'opérateur choisi est l'opérateur /
    } else if (operator.value == '/') {
        // Je lance mon opération avec la division(/)
        result = Number(number1.value) / Number(number2.value);
    // Sinon (si c'est aucun des 3, c'est forcément l'opérateur '*')
    } else {
        // Je lance mon opération avec la multiplication (*)
        result = Number(number1.value) * Number(number2.value);
    }

    // Pour finir, j'affiche le résultat du cacul
    alert(result);
});