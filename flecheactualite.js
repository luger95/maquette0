const arrow = document.querySelector('.arrow');
let Retour = false;
let Dessus = false;

arrow.addEventListener('mouseenter', () => {
    Dessus = true;
    if (!Retour) {
        arrow.style.animation = 'MouvementFleche 0.3s infinite alternate ease-in-out'; 
    }
});

arrow.addEventListener('mouseleave', () => {
    Dessus = false;
    if (!Retour) {
        Retour = true;
        const computedStyle = window.getComputedStyle(arrow);
        const transformValue = computedStyle.getPropertyValue('transform');
        arrow.style.animation = 'none';
        arrow.style.transform = transformValue;
        setTimeout(() => {
            arrow.style.transition = 'transform 0.2s ease'; 
            arrow.style.transform = 'translateX(0)';
            arrow.addEventListener('transitionend', () => {
                Retour = false;
                if (Dessus) {
                    arrow.style.animation = 'MouvementFleche 0.3s infinite alternate ease-in-out'; 
                }
            }, { once: true });
        }, 10);
    }
});
