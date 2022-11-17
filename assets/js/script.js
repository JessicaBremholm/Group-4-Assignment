//Selecting the class for the images
var images = document.querySelectorAll('.portrait__img')

//Lägger till en transition för övergången 
for (var i = 0; i < images.length; i ++) {
    images[i].style.transitionDuration = '0.1s'

//Lägger till en funktion som gör att bilden blir till färg
    function mousecolor() {
        this.style.filter = "grayscale(0%)"; 

    }

//Lägger till en funktion som gör att bilden blir till svartvit
    function mousegrey() {
    this.style.filter = "grayscale(100%)";

  }

//En eventlistener som aktiverar funktionerna för färg/svartvitt när musen hovrar och tas bort från en
  images[i].addEventListener('mouseover', mousecolor); 
  images[i].addEventListener('mouseout', mousegrey); 
}