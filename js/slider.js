document.addEventListener('DOMContentLoaded', function(){
  var sliderElements = document.querySelectorAll('.slider');
  var sliderPictures = sliderElements[0].querySelectorAll('li');
  var sliderTexts = sliderElements[1].querySelectorAll('li');
  var counter = 0;
  // var rightArrow = document.createElement('div');
  // var leftArrow = document.createElement('div');

  for(var i = 0; i < sliderPictures.length; i++){
    sliderPictures[i].classList.remove('visible');
    sliderTexts[i].classList.remove('visible');
  }
  

  sliderPictures[counter].classList.add('visible');
  sliderTexts[counter].classList.add('visible');
  
  
  var leftArrow = document.querySelector('.leftArrow');
  var rightArrow = document.querySelector('.rightArrow');

  leftArrow.addEventListener('click', function(){
    sliderPictures[counter].classList.remove('visible');
    sliderTexts[counter].classList.remove('visible');
    counter--;
    if(counter < 0) {
      counter = sliderPictures.length - 1;
    }
    sliderPictures[counter].classList.add('visible');
    sliderTexts[counter].classList.add('visible');
  });

  rightArrow.addEventListener('click', function(){
    sliderPictures[counter].classList.remove('visible');
    sliderTexts[counter].classList.remove('visible');
    counter++;
    if(counter > sliderPictures.length - 1) {
      counter = 0;
    }
    sliderPictures[counter].classList.add('visible');
    sliderTexts[counter].classList.add('visible');
  });

});