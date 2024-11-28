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
        if (images[i].classList.contains('visible')){
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
    
    if (imageVisible.classList.contains('visible') && imageVisible != image2){
        imageVisible.classList.remove("visible");
        image2.classList.add("visible");
        // image2.style.display = "inline-block";
        // imageVisible.style.display = "none";
        texteVisible.classList.remove("visible");
        titre1.classList.add("visible");
        slider1.style.backgroundColor = "#36A0AC";
    }else{
        image1.classList.add("visible");
        image2.classList.remove("visible");
        // image2.style.display = "none";
        // imageVisible.style.display = "inline-block";
        titreImg.classList.add("visible");
        titre1.classList.remove("visible");
        // titre1.style.display = "none";
        // titreImg.style.display = "block";
    }
    
    
});

slider2.addEventListener('click', function (){
    makeBackWhite();
    let imageVisible = getimgVisible();
    let texteVisible = getTitreVisible();
    if (imageVisible.classList.contains('visible') && imageVisible != image3){
        imageVisible.classList.remove("visible");
        image3.classList.add("visible");
        texteVisible.classList.remove("visible");
        titre2.classList.add("visible");
        slider2.style.backgroundColor = "#B3433E";
    }else{
        image1.classList.add("visible");
        image3.classList.remove("visible");
        titreImg.classList.add("visible");
        titre2.classList.remove("visible");
    }
    
    
});

slider3.addEventListener('click', function (){
    makeBackWhite();
    let imageVisible = getimgVisible();
    let texteVisible = getTitreVisible();
    if (imageVisible.classList.contains('visible') && imageVisible != image4){
        imageVisible.classList.remove("visible");
        image4.classList.add("visible");
        texteVisible.classList.remove("visible");
        titre3.classList.add("visible");
        slider3.style.backgroundColor = "#D9A467";
    }else{
        image1.classList.add("visible");
        image4.classList.remove("visible");
        titreImg.classList.add("visible");
        titre3.classList.remove("visible");
    
    }
    
    
});

slider4.addEventListener('click', function (){
    makeBackWhite();
    let imageVisible = getimgVisible();
    let texteVisible = getTitreVisible();
    if (imageVisible.classList.contains('visible') && imageVisible != image5){
        imageVisible.classList.remove("visible");
        image5.classList.add("visible");
        texteVisible.classList.remove("visible");
        titre4.classList.add("visible");
        slider4.style.backgroundColor = "#005A3D";
    }else{
        image1.classList.add("visible");
        image5.classList.remove("visible");
        titreImg.classList.add("visible");
        titre4.classList.remove("visible");
     
    }
    
    
});