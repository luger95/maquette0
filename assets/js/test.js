const slider1 = document.getElementById("slide1");
const slider2 = document.getElementById("slide2");
const slider3 = document.getElementById("slide3");
const slider4 = document.getElementById("slide4");
const titreImg = document.getElementById("titre");
const titre1 = document.getElementById("titre1");
const titre2 = document.getElementById("titre2");
const titre3 = document.getElementById("titre3");
const titre4 = document.getElementById("titre4");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const images = [image1, image2, image3, image4, image5];

function getimgVisible(){
    for (let i = 0; i < images.length; i++){
        if (images[i].style.display === "inline-block"){
            return images[i];
        }
    }
    return image1;
}

function getTitreVisible(){
    let img = getimgVisible();
    switch (img) {
        case image1:
            return titreImg;
        case image2:
            return titre1;
        case image3:
            return titre2;
        case image4:
            return titre3;
        case image5:
            return titre4;
    }
}

function makeBackWhite(){
    slider1.style.backgroundColor = "white";
    slider2.style.backgroundColor = "white";
    slider3.style.backgroundColor = "white";
    slider4.style.backgroundColor = "white";
}


slider1.addEventListener('click', function (){
    makeBackWhite();
    let imageVisible = getimgVisible();
    let texteVisible = getTitreVisible();
    if (window.getComputedStyle(image2).display === "none"){
        image2.style.display = "inline-block";
        imageVisible.style.display = "none";
        titre1.style.display = "block";
        texteVisible.style.display = "none";
        slider1.style.backgroundColor = "#36A0AC";
    }else{
        image2.style.display = "none";
        image1.style.display = "inline-block";
        titre1.style.display = "none";
        titreImg.style.display = "block";
    }
    
    
});

slider2.addEventListener('click', function (){
    makeBackWhite();
    let imageVisible = getimgVisible();
    let texteVisible = getTitreVisible();
    if (window.getComputedStyle(image3).display === "none"){
        image3.style.display = "inline-block";
        imageVisible.style.display = "none";
        titre2.style.display = "block";
        texteVisible.style.display = "none";
        slider2.style.backgroundColor = "#B3433E";
    }else{
        image3.style.display = "none";
        image1.style.display = "inline-block";
        titre2.style.display = "none";
        titreImg.style.display = "block";
    }
    
    
});

slider3.addEventListener('click', function (){
    makeBackWhite();
    let imageVisible = getimgVisible();
    let texteVisible = getTitreVisible();
    if (window.getComputedStyle(image4).display === "none"){
        image4.style.display = "inline-block";
        imageVisible.style.display = "none";
        titre3.style.display = "block";
        texteVisible.style.display = "none";
        slider3.style.backgroundColor = "#D9A467";
    }else{
        image4.style.display = "none";
        image1.style.display = "inline-block";
        titre3.style.display = "none";
        titreImg.style.display = "block";
    
    }
    
    
});

slider4.addEventListener('click', function (){
    makeBackWhite();
    let imageVisible = getimgVisible();
    let texteVisible = getTitreVisible();
    if (window.getComputedStyle(image5).display === "none"){
        image5.style.display = "inline-block";
        imageVisible.style.display = "none";
        titre4.style.display = "block";
        texteVisible.style.display = "none";
        slider4.style.backgroundColor = "#005A3D";
    }else{
        image5.style.display = "none";
        image1.style.display = "inline-block";
        titre4.style.display = "none";
        titreImg.style.display = "block";
     
    }
    
    
});