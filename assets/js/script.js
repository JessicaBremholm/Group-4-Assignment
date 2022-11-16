var images = document.querySelectorAll('.portrait__img')
for (var i = 0; i < images.length; i ++) {
    images[i].style.transitionDuration = '0.1s'

    function mousecolor() {
        console.log("det funkar");
        this.style.filter = "grayscale(0%)";
        
    
  }

    function mousegrey() {

    this.style.filter = "grayscale(100%)";

  }

  images[i].addEventListener('mouseover', mousecolor); 
  images[i].addEventListener('mouseout', mousegrey); 
}