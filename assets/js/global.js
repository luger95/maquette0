let compteur=1;
function moveRight(){
    if (compteur<8){

    let valeurini= document.getElementById("listid");
    
    let left = parseInt(valeurini.style.left, 10) || 0; 

    valeurini.style.left = (left -228)+"px" ;

    let nb = document.getElementById("chiffre");
    compteur ++;
    nb.textContent= "0"+compteur+"/08";


    

    if (compteur==8){
        let element =document.getElementById("droite");
        element.style.opacity = 0.5 ;
    } else{
        let element =document.getElementById("gauche");
        element.style.opacity =1;
    }
    let nvcompt=compteur-1;
    let carre =document.getElementById("carre"+nvcompt);
    carre.style.opacity = 0;
    
} 

}

function moveLeft(){
    if (compteur>1){

    let valeurini= document.getElementById("listid");
    
    let left = parseInt(valeurini.style.left, 10) || 0; 

    valeurini.style.left = (left +228)+"px" ;

    let nb = document.getElementById("chiffre");
    compteur --;
    nb.textContent= "0"+compteur+"/08";
}
if (compteur==1){
    let element =document.getElementById("gauche");
    element.style.opacity = 0.5 ;
}else{
    let element =document.getElementById("droite");
    element.style.opacity =1;
}
    let nvcompt=compteur;
    let carre =document.getElementById("carre"+nvcompt);
    carre.style.opacity = 1;

}
