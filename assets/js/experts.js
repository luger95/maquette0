/**
 * Initialisation
 */
const PIXELPERSLIDE = -470;
let slideNumber = 1

const itemIndex = document.getElementById("item-index")
const expertiseRightArrow = document.getElementById("expertise-right-arrow");
const expertiseLeftArrow = document.getElementById("expertise-left-arrow");

let numberOfSlides = document.getElementsByClassName("expertise-item").length;

itemIndex.innerText = zerosBefore(slideNumber, 2) + "/" + zerosBefore((numberOfSlides - 3), 2)



/**
 * Définis le numéro de la slide à afficher.
 * @param {Number} slideNum 
 */
function setSlidesLeftAttribute(slideNum) {
    let items = document.getElementsByClassName("expertise-item")

    for(item of items) {
        item.style.left = slideNum * PIXELPERSLIDE + "px"
    }

    itemIndex.innerText = zerosBefore(slideNum, 2) + "/" + zerosBefore((numberOfSlides - 3), 2)
}

/**
 * Définis la couleur des flèches selon la slide affichée.
 */
function setArrowsColor() {
    let numberOfSlides = document.getElementsByClassName("expertise-item").length;

    if(slideNumber === 1) {
        expertiseLeftArrow.style.color = "gray"; 
    } else {
        expertiseLeftArrow.style.color = "white";
    }
    
    if(slideNumber == numberOfSlides - 3) {
        expertiseRightArrow.style.color = "gray"; 
    } else {
        expertiseRightArrow.style.color = "white";
    }
}


/**
 * Formate un nombre à une certaine taille. 
 * Par exemple: 
 *  zerosBefore(5, 2) -> "05"
 *  zerosBefore(5, 10) -> 0000000005
 * @param {Number} num Nombre
 * @param {Number} size Nombre de caractères avec lesquels num doit être représenté
 * @returns 
 */
function zerosBefore(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}


/**
 * Évènements
 */
document.getElementById("left").addEventListener("click", () => {
    let numberOfSlides = document.getElementsByClassName("expertise-item").length;

    if(slideNumber > 1) {
        slideNumber--;

        setSlidesLeftAttribute(slideNumber)
        setArrowsColor()
    }
})

document.getElementById("right").addEventListener("click", () => {
    let numberOfSlides = document.getElementsByClassName("expertise-item").length;

    if(slideNumber < numberOfSlides - 3) {
        slideNumber++;

        setSlidesLeftAttribute(slideNumber)
        setArrowsColor()
    }
})