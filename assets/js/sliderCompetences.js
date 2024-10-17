const imgs = document.querySelectorAll('[data-img-url]');
const indexCompetences = document.getElementById('competences_index');
indexCompetences.innerHTML = `<span>01/</span>0${imgs.length}`;

imgs.forEach((div) => {
    div.style.backgroundImage = `url(\'${div.getAttribute('data-img-url')}\')`;
});

const slider = document.querySelector('#competences_slides');
const arrowButtons = document.querySelectorAll('[data-index-change]');
let competencesIndex = 0;

function slide(nextIndex) {
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= imgs.length) nextIndex = imgs.length-1;
    slider.style.transform = `translateX(-${(nextIndex/imgs.length)*100}%)`;
    competencesIndex = nextIndex;
    indexCompetences.innerHTML = `<span>0${competencesIndex+1}/</span>0${imgs.length}`; 
}

arrowButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const indexChange = +button.getAttribute('data-index-change');
        slide(competencesIndex + indexChange);
    });
});