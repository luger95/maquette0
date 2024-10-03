const PIXELPERSLIDE = -470;
let slideNumber = 1

let numberOfSlides = document.getElementsByClassName("expertise-item").length;
let itemIndex = document.getElementById("item-index")
let expertiseRightArrow = document.getElementById("expertise-right-arrow");
let expertiseLeftArrow = document.getElementById("expertise-left-arrow");

itemIndex.innerText = pad(slideNumber, 2) + "/" + pad((numberOfSlides - 3), 2)

function setSlidesLeftAttribute(slideNum) {
    let items = document.getElementsByClassName("expertise-item")

    for(item of items) {
        item.style.left = slideNum * PIXELPERSLIDE + "px"
    }

    itemIndex.innerText = pad(slideNum, 2) + "/" + pad((numberOfSlides - 3), 2)
}

function setArrowsColor() {
    if(slideNumber == 1) expertiseLeftArrow.style.color = "gray"; 
    else expertiseLeftArrow.style.color = "white";
    if(slideNumber == numberOfSlides - 3) expertiseRightArrow.style.color = "gray"; 
    else expertiseRightArrow.style.color = "white";
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

document.getElementById("left").addEventListener("click", () => {
    if(slideNumber > 1) {
        slideNumber--;

        setSlidesLeftAttribute(slideNumber)
        setArrowsColor()
    }
})

document.getElementById("right").addEventListener("click", () => {
    if(slideNumber < numberOfSlides - 3) {
        slideNumber++;

        setSlidesLeftAttribute(slideNumber)
        setArrowsColor()
    }
})