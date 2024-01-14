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

function animatePipes() {
    var right1 = 0;
    var topPipes = document.querySelectorAll('.top-pipe');
    var cloneTop, cloneBottom;

    topPipes.forEach(function(pipe) {
        var pipeStyle = window.getComputedStyle(pipe);
        var right = parseInt(pipeStyle.getPropertyValue('right'));
        pipe.style.right = right + 3 + 'px';
    });

    var bottomPipes = document.querySelectorAll('.bottom-pipe');

    bottomPipes.forEach(function(pipe) {
        var pipeStyle = window.getComputedStyle(pipe);
        var right = parseInt(pipeStyle.getPropertyValue('right'));
        pipe.style.right = right + 3 + 'px';
    });
    
    right1 += topPipes[(topPipes.length)-1].style.right;

    if(parseInt(right1) >= parseInt(window.getComputedStyle(topPipes[(topPipes.length)-1]).getPropertyValue('width')) * 2) {
        right1 = 0;
        cloneTop = topPipes[(topPipes.length)-1].cloneNode(true);
        cloneBottom = bottomPipes[(bottomPipes.length)-1].cloneNode(true);  
        
        cloneBottom.style.right = 0
        cloneTop.style.right = 0
 
        bottomHeight = Math.floor(Math.random() * 40)
        cloneBottom.style.height = bottomHeight + "%"

        topHeight = Math.floor(Math.random() * 40)
        cloneTop.style.height = topHeight + "%"

        document.querySelector('.container').appendChild(cloneTop);
        document.querySelector('.container').appendChild(cloneBottom);

    }
    requestAnimationFrame(animatePipes);
}


animatePipes();


function areElementsOverlapping(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return (
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top &&
        rect1.left < rect2.right &&
        rect1.right > rect2.left
    );
}

function check_collision() {
    var birdElement = document.querySelector('.bird');
    var topPipes = document.querySelectorAll('.top-pipe');
    var bottomPipes = document.querySelectorAll('.bottom-pipe');

    topPipes.forEach( function(pipe) {
        if (areElementsOverlapping(birdElement, pipe)) {
            alert("you lose")
        }
    });

    bottomPipes.forEach( function(pipe) {
        if (areElementsOverlapping(birdElement, pipe)) {
            alert("you lose")
        }
    });
}

setInterval(check_collision, 100)