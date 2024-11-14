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

// Constantes pour les titres de sous-section
const recrutement = "Recrutement";
const interim = "Interim";
const performance = "Performance";
const transformation = "Transformation";
const aPropos = "A Propos";
const ressource = "Ressources";

// Fonction pour basculer la visibilité d'un élément
function toggleVisibility(element, state) {
    if (!state) {
        element.classList.add('show'); // Ajouter la classe show
    } else {
        element.classList.remove('show'); // Supprimer la classe show
    }
    return !state; // Renvoie l'inverse de l'état pour le prochain appel
}

// Fonction pour soumettre la barre de recherche
function submitSearchBar(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const inputValue = searchBar.value; // Récupération du texte entré

    visibleSearchBar = toggleVisibility(searchBar, visibleSearchBar); // Cache la barre après soumission
    searchBar.value = ""; // Réinitialise la barre
    
    console.log(inputValue); // Tester
}

// Gérer la visibilité de la barre de recherche avec l'icône
searchIcon.addEventListener('click', function(event) {
    event.stopPropagation(); // Empêche la propagation de l'événement pour éviter de cacher la barre immédiatement
    visibleSearchBar = toggleVisibility(searchBar, visibleSearchBar);
});

// Soumission du formulaire de recherche
searchForm.addEventListener('submit', submitSearchBar);

// Cacher la barre de recherche si l'on clique en dehors
document.addEventListener('click', function(event) {
    // Vérifie si le clic est en dehors de la barre de recherche et de l'icône
    if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
        // Si la barre est visible, la cacher
        if (visibleSearchBar) {
            visibleSearchBar = toggleVisibility(searchBar, visibleSearchBar);
        }
    }
});

// Gestion des clics sur les éléments de la barre de navigation
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
