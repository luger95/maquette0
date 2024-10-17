let boutondroite = document.getElementById('monBoutondroite');
let boutongauche = document.getElementById('monBoutongauche');
let imageMission = document.getElementById('imageMission');
let titreMission = document.getElementById('titreMission');
let contenuMission = document.getElementById('contenuMission')

let conteur = 1 ;

boutondroite.addEventListener('click', function() {
    conteur = conteur + 1 ;
    if (conteur>4) {
        conteur=1
    }
    let afficheconteur = document.getElementById('afficheconteur');
    afficheconteur.textContent = conteur;
    contenuAJour(conteur)
});

boutongauche.addEventListener('click', function() {
    conteur = conteur - 1 ;
    if (conteur<1) {
        conteur=4
    }
    let afficheconteur = document.getElementById('afficheconteur');
    afficheconteur.textContent = conteur;
    contenuAJour(conteur)
});

function contenuAJour(conteur){
    if (conteur == 1  ) {

        imageMission.src = '/assets/img/1_mission.png';
        titreMission.textContent = "RECRUTEMENT";
        titreMission.style.color='#36A0AC'
        contenuMission.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?vLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?vvLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?";

    } else if (conteur == 2 ) {
        imageMission.src = '/assets/img/2_mission.png';
        titreMission.textContent = "INTERIM";
        titreMission.style.color='#B3433E'
        contenuMission.textContent = "Lorem ipsuLorem ipsum dolor sit amet consectetur adipLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?isicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?vLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?vvvLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?vvm dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?";

    } else if(conteur==3){
        imageMission.src = '/assets/img/3_mission.png';
        titreMission.textContent = "PERFORMANCE";
        titreMission.style.color='#D9A467'
        contenuMission.textContent = "Lorem ipsum dolor sit aLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?vvvvvvvvvvvvvvvLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?vvLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?met consectetur adipisicing elit. Aspernatur, repellendus?";

    } else{
        imageMission.src = '/assets/img/4_mission.png';
        titreMission.textContent = "TRANSFORMATION";
        titreMission.style.color='#005A3D'
        contenuMission.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?vLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?vLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus?";
    }
}



