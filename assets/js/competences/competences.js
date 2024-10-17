// Script d'initalisation du système de pagination

const totalOfCards = document.querySelectorAll('div.competence-carousel-item').length;

new Pagination(totalOfCards);