var slideIndex=1;

function plusSlide(n){
    saffichage(slideIndex += n);
}

function affichage(n){
    var i;
    var x = document.getElementByClassName("MySlide")
    if (n> x.length) {slideIndex = 1}
    if (n<1) {slideIndex = x.length} 
    for (i = 0; i< x.length; i++){
        x[i].style.display = "none";
    }x[slideIndex-1].style.display = "block";
}