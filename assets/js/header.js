
const searchForm = document.querySelector('#searchForm'); //recupération du formulaire contenant la barre de recherche
const searchIcon = document.querySelector('#searchIcon'); // recupération de l'img 'loupe' par son id 
const searchBar = document.querySelector('#searchBar'); // recupération de la barre de recherche par sopn id

let visibleSearchBar = false; // compteur pour repeter la visiblité et l'invsibilté de la barre de texte
searchIcon.addEventListener('click',function(){

    if (visibleSearchBar == false) {
        searchBar.classList.add('show'); // ajouter la classe show
    } else {
        searchBar.classList.remove('show'); // supprimer la class show
    }
    visibleSearchBar = !visibleSearchBar; // modification du compteur
})


searchForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le formulaire de soumettre normalement pour le soumettre en appuyant simplement sur 'entrée'
    const inputValue = document.getElementById("searchBar").value; //recuperation du champ entrée

    console.log(inputValue); // test
});