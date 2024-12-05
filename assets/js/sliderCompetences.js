const indexCompetences = document.getElementById('competences_index');
const slider = document.querySelector('#competences_slides');
const arrowButtons = document.querySelectorAll('#competences_interactible_arrows button');
const imgs = document.querySelectorAll('.competences_image[img-url]');
let competencesIndex = 0;

imgs.forEach(img => {
    img.style.backgroundImage = `url(\'${img.getAttribute('img-url')}\')`;
});

function slide(nextIndex) {
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= 7) nextIndex = 7;
    slider.style.transform = `translateX(-${(nextIndex/8)*99}%)`;
    competencesIndex = nextIndex;
    indexCompetences.innerHTML = `<span>0${competencesIndex+1}/</span>08`; 
}

arrowButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const indexChange =+ button.getAttribute('index-change');
        slide(competencesIndex + indexChange);
    });
});