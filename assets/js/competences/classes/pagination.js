/**
 * Classe représentant le module de pagination dans la section compétences de la page.
 * La pagination commence à l'index 1.
 * @author gatien.gillot@etu.univ-tours.fr
 */
class Pagination{

    /**
     * Créé une nouvelle instance du système de pagination
     * @param {Number} nbTotalPages Le nombre total de pages disponibles pour la pagination
     */
    constructor(nbTotalPages){
        this.nbTotalPages = nbTotalPages;
        this.index = 1;

        this.updateHTMLTotalOfCards();
        this.addClickListeners();
    }

    /**
     * Modifie le code HTML pour afficher sur la page le nombre total de cartes.
     */
    updateHTMLTotalOfCards(){
        document.getElementById('competence-pagination-total-pages').innerHTML = this.nbTotalPages > 9 ? this.nbTotalPages : `0${this.nbTotalPages}`;
    }

    updateHTMLIndex(){
        document.getElementById('competence-pagination-page-active').innerHTML = this.index > 9 ? `${this.index}/` : `0${this.index}/`;
    }

    /**
     * Ajoute aux boutons de navigations les listeners pour gérer les clics
     */
    addClickListeners(){
        document.getElementById('competence-pagination-droite').addEventListener("click", () => {
            this.avancerPagination();
        });

        document.getElementById('competence-pagination-gauche').addEventListener("click", () => {
            this.reculerPagination();
        });
    }

    /**
     * Avance la pagination d'un cran (Ex: passage de l'index 1 à l'index 2)
     */
    avancerPagination(){
        if(this.index === this.nbTotalPages){
            return;
        }
        if(this.index === this.nbTotalPages - 1){
            document.getElementById('competence-pagination-right-arrow').classList.add('muted');
        }
        document.getElementById('competence-pagination-left-arrow').classList.remove('muted');
        document.getElementById(`carousel-item-${this.index}`).style.display = 'none';
        this.index++;
        this.updateHTMLIndex();
    }

    /**
     * Recule la pagination d'un cran (Ex: passage de l'index 2 à l'index 1)
     */
    reculerPagination(){    
        if(this.index === 1){
            return;
        }
        if(this.index === 2){
            document.getElementById('competence-pagination-left-arrow').classList.add('muted');
        }
        document.getElementById('competence-pagination-right-arrow').classList.remove('muted');
        document.getElementById(`carousel-item-${this.index-1}`).style.display = "";
        this.index--;
        this.updateHTMLIndex();
    }

}