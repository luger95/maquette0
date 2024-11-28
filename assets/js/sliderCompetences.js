const indexCompetences = document.getElementById('competences_index');
const slider = document.querySelector('#competences_slides');
const arrowButtons = document.querySelectorAll('[data-index-change]');
let competencesIndex = 0;

function slide(nextIndex) {
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= 7) nextIndex = 7;
    slider.style.transform = `translateX(-${(nextIndex/8)*99}%)`;
    competencesIndex = nextIndex;
    indexCompetences.innerHTML = `<span>0${competencesIndex+1}/</span>08`; 
}

arrowButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const indexChange = +button.getAttribute('data-index-change');
        slide(competencesIndex + indexChange);
    });
});