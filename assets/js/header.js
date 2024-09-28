// Variable pour la visibilité de la barre de recherche et du bloc complémentaire
let visibleSearchBar = false;
let visibleComplementaryBar = false;
let activeLiIndex = null; // Stocke l'index de l'élément li actuellement actif

// Sélection des éléments du DOM
const blockForLiInSearchBar = document.querySelector('.complementary');
const liElements = document.querySelectorAll('.barNav ul li'); // Sélectionne tous les éléments li
const searchForm = document.querySelector('#searchForm');
const searchIcon = document.querySelector('#searchIcon');
const searchBar = document.querySelector('#searchBar');



// -----fonction générique pour basculer la visibilité----------//
function toggleVisibility(element, state) {
    if (!state) {
        element.classList.add('show'); // Ajouter la classe show
    } else {
        element.classList.remove('show'); // Supprimer la classe show
    }
    return !state; // Renvoie l'inverse de l'état pour le prochain appel
}



// -----fonction pour soumettre la barre de recherche----------//
function submitSearchBar(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const inputValue = searchBar.value; // Récupération du texte entré

    visibleSearchBar = toggleVisibility(searchBar, visibleSearchBar); // Cache la barre après soumission
    searchBar.value = ""; // Réinitialise la barre
    
    console.log(inputValue); // Affiche la valeur dans la console pour tester
}


liElements.forEach((li, index) => {
    li.addEventListener('click', function() {
        if (activeLiIndex === index) {
            // Si le même li est cliqué deux fois, cacher le bloc et enlever la classe de bordure
            visibleComplementaryBar = toggleVisibility(blockForLiInSearchBar, visibleComplementaryBar);
            li.classList.remove('borderBottomForLi');
            activeLiIndex = null; // Réinitialiser l'index actif
        } else {
            // Si un autre li est cliqué, d'abord enlever la classe du li précédent
            if (activeLiIndex !== null) {
                liElements[activeLiIndex].classList.remove('borderBottomForLi'); // Enlever la classe du li précédent
            }
            // Puis afficher le bloc et ajouter la classe au nouveau li
            visibleComplementaryBar = true;
            blockForLiInSearchBar.classList.add('show');
            li.classList.add('borderBottomForLi');
            activeLiIndex = index; // Stocker l'index du li actif
        }
    });
});

// Gérer la visibilité de la barre de recherche avec l'icône
searchIcon.addEventListener('click', function() {
    visibleSearchBar = toggleVisibility(searchBar, visibleSearchBar);
});

// Soumission du formulaire de recherche
searchForm.addEventListener('submit', submitSearchBar);
