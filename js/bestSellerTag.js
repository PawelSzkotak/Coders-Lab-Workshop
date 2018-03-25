document.addEventListener('DOMContentLoaded', function(){

  var bestSellerFigures = document.querySelectorAll('.bestsellers figure');

  bestSellerFigures.forEach(function(figure) {
    figure.firstElementChild.addEventListener('mouseover', function(){
      this.parentElement.lastElementChild.style.visibility = 'hidden';
    });

    figure.firstElementChild.addEventListener('mouseout', function(){
      this.parentElement.lastElementChild.style.visibility = 'visible';
    });

  });
});