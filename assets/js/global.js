//<!-- ------------------------------------------------------>
//<!-- ----------------- Slider missions -------------------->
//<!------------------------------------------------------>
let currentIndex = 1; 
const maxIndex = 4; 
const minIndex = 1; 


 document.addEventListener("DOMContentLoaded", (event) => {
   
    const button1 = document.getElementById('prev');

    const button2 = document.getElementById('next');

    button1.addEventListener('click', decrementCounter );

    button2.addEventListener('click',incrementCounter);
  });




function updateMissionDisplay() {
    
    document.getElementById('mission-recrutement').style.display = 'none';
    document.getElementById('mission-interim').style.display = 'none';
    document.getElementById('mission-performance').style.display = 'none';
    document.getElementById('transformation').style.display = 'none';
    document.getElementById('mission-recrutement-img').style.display = 'none';
    document.getElementById('mission-interim-img').style.display = 'none';
    document.getElementById('mission-performance-img').style.display = 'none';
    document.getElementById('transformation-img').style.display = 'none';

    switch(currentIndex) {
    
        case 1:
            document.getElementById('mission-recrutement').style.display = 'block';
            document.getElementById('mission-recrutement-img').style.display = 'block';
            
            break;
        case 2:
            document.getElementById('mission-interim').style.display = 'block';
            document.getElementById('mission-interim-img').style.display = 'block';
            break;
        case 3:
            document.getElementById('mission-performance').style.display = 'block';
            document.getElementById('mission-performance-img').style.display = 'block';
            break;
        case 4:
            document.getElementById('transformation').style.display = 'block';
            document.getElementById('transformation-img').style.display = 'block';
            break;
    }
}

function updateCounter(newValue) {
    const counterElement = document.getElementById('counter'); 
    

        currentIndex = newValue;
        counterElement.textContent = currentIndex;
        updateMissionDisplay(); 
    
}



function incrementCounter() { 
    if(currentIndex +1 > maxIndex){
        updateCounter(1);
    }
    else{updateCounter(currentIndex + 1);}
   
}

function decrementCounter() {
    if(currentIndex -1 < minIndex){
        updateCounter(4) ;
    }
    else{
        updateCounter(currentIndex - 1);
    }
    
}

