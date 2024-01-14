document.addEventListener('keydown', function (e) {
    var birdElement = document.querySelector('.bird');

    birdElement.style.animation = "none";
    birdElement.offsetHeight; 
    var currentTop = window.getComputedStyle(document.querySelector('.bird')).getPropertyValue('top');

    if (parseInt(currentTop) > 0) {
        birdElement.style.top = parseInt(currentTop) - 25 + 'px';
        birdElement.style.animation = "fly_animation 0.3s";
    } 
});

function animateBird() {
    var birdElement = document.querySelector('.bird');
    var bird = window.getComputedStyle(document.querySelector('.bird'))
    var container = window.getComputedStyle(document.querySelector('.container'))

    var currentTopBird = bird.getPropertyValue('top'); 
    var heigthBird = bird.getPropertyValue('height'); 
    
    var currentTopCont = container.getPropertyValue('top'); 
    var heigthCont = container.getPropertyValue('height'); 
    
    if (parseInt(currentTopBird) < (parseInt(currentTopCont) + parseInt(heigthCont) - parseInt(heigthBird)) ) {
        birdElement.style.top = parseInt(currentTopBird) + 3 + 'px';
    } 

    requestAnimationFrame(animateBird);
}


animateBird();
