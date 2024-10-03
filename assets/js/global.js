//<!-- ------------------------------------------------------>
//<!-- ----------------- Slider missions -------------------->
//<!------------------------------------------------------>

let currentIndex = 1; 
const maxIndex = 4; 
const minIndex = 1; 



function updateMissionDisplay() {
    
    document.getElementById('mission-recrutement').style.display = 'none';
    document.getElementById('mission-interim').style.display = 'none';
    document.getElementById('mission-performance').style.display = 'none';
    document.getElementById('transformation').style.display = 'none';


    switch(currentIndex) {
    
        case 1:
            document.getElementById('mission-recrutement').style.display = 'block';
            break;
        case 2:
            document.getElementById('mission-interim').style.display = 'block';
            break;
        case 3:
            document.getElementById('mission-performance').style.display = 'block';
            break;
        case 4:
            document.getElementById('transformation').style.display = 'block';
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

updateMissionDisplay();