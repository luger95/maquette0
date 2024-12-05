const slide = document.getElementById('slider_expert');
const deplacement = 100;


function scrollGauche(){
    slide.scrollBy({
        left:-deplacement,
        behavior :'smooth'
    });
}

function scrollDroite(){
    slide.scrollBy({
        left:deplacement, 
        behavior:'smooth'
    });
}