/*
  Author: Leonardo M. Rodrigues.
  Date: 08/04/2021.
  Challenge "FAQ Accordion Card" from Frontend Mentor.
  Link: https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam
*/

for(var i = 0; i < document.querySelectorAll(".question").length; i++){
  document.querySelectorAll(".question")[i].addEventListener("click", showAnswer);
}


for(var i = 0; i < document.querySelectorAll(".arrow-toggle").length; i++){
  document.querySelectorAll(".arrow-toggle")[i].addEventListener("click", function (e) {
    console.log(e.target.parentNode);
    document.querySelectorAll(".question")[e.target.parentNode.id].click();
  });
}


for(var i = 0; i < document.querySelectorAll(".answer").length; i++){
  document.querySelectorAll(".answer")[i].hidden = true;
}


function showAnswer(e) {
  // Checking what element (e) is the "caller" of this function.
  // It is represented by "j".
  for(var j = 0; j < document.querySelectorAll(".question").length; j++){
    if(document.querySelectorAll(".question")[j] === e.target ||
       document.querySelectorAll(".question")[j].innerText === e.target.innerText){
      break;
    }
  }
  // At this point, j represents the "caller ID" of this function.

  for(var k = 0; k < document.querySelectorAll(".question").length; k++){
    // Test if the self answer is appearing.
    if(k === j){
      if(this.boldText === false || this.boldText === undefined){
        this.innerHTML = this.innerHTML.bold();
        this.boldText = true;
        toggleAnswer(k);
        toggleArrow(k,180);
      }
      else{
        this.innerHTML = this.innerText;
        this.boldText = false;
        toggleAnswer(k);
        toggleArrow(k,0);
      }
    }
    // Test if the other answer is appearing. If so, make it desappear.
    else{
      if(document.querySelectorAll(".question")[k].boldText === true){
        document.querySelectorAll(".question")[k].innerHTML = document.querySelectorAll(".question")[k].innerText;
        document.querySelectorAll(".question")[k].boldText = false;
        toggleAnswer(k);
        toggleArrow(k,0);
      }
    }
  }
}


function toggleAnswer(i){
  var toggleState = document.querySelectorAll(".answer")[i].hidden;

  if(toggleState === true){
    document.querySelectorAll(".answer")[i].hidden = false;
  }
  else{
    document.querySelectorAll(".answer")[i].hidden = true;
  }
}


function toggleArrow(i,degree){
  document.querySelectorAll(".arrow")[i].style.transform = 'rotate(' + degree + 'deg)';
}
