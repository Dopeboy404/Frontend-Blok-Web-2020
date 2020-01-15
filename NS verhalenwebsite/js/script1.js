// Interactie 1
var rating = document.querySelectorAll('.stars-js');
var items = document.querySelectorAll('.star');
const setRating = function (rating) {
const articleRated = rating.target
if(articleRated.classList.contains('star')){  

  console.log(articleRated.getAttribute('data-rate'));
  console.log('hover');

  [].forEach.call(items, function itemsHover(elem, i){
    console.log("items:", items)
    console.log("elem:", elem)
    console.log("i:", i)
      
    if(i < articleRated.getAttribute('data-rate')){
      elem.classList.add('rated');
    }else if(i >= articleRated.getAttribute('data-rate')){
      elem.classList.remove('rated');
    }
  });
  }
}

for(let i = 0; i < rating.length; i++) {
  rating[i].addEventListener('click', setRating)
}
// Bron: https://codepen.io/Slabnevitch/pen/aVwbMp


// Javascript 2e interactie

const button = document.querySelectorAll('article > button > i');
const addFavourites = function (button){
  const clickedArticle = button.target

  clickedArticle.classList.toggle('far');
  clickedArticle.classList.toggle('fas');  
  }

  for(let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', addFavourites)
  }

//checkforminput
function checkTekst() {
    var ww1 = document.getElementById("pw");
    var ww2 = document.getElementById("pw2"); 
    if(ww1.value !== ww2.value) {
        //console.log('sfhsdhf');
        ww2.style.borderColor = "red";
        ww2.style.borderWidth = '0.075em';
        }
    else {
        //console.log('isgoed');
        ww2.style.borderColor = "green";
        ww2.style.borderWidth = '0.075em';
        }
}

function checkTekst2() {
  var woord1 = document.getElementById("voornaam");
  var woord2 = document.getElementById("achternaam");
  var woord3 = document.getElementById("pw");
  if (woord1.value !== ''){
      woord1.style.borderColor = "green";
      woord1.style.borderWidth = '0.075em'; 
  }
  else {
      woord1.style.borderColor = "red";
      woord1.style.borderWidth = '0.075em'; 
  }
  if (woord2.value !== '') {
      woord2.style.borderColor = "green";
      woord2.style.borderWidth = '0.075em'; 
  }
  else {
      woord2.style.borderColor = "red";
      woord2.style.borderWidth = '0.075em';
  }
  if (woord3.value !== ''){
      woord3.style.borderColor = "green";
      woord3.style.borderWidth = '0.075em'; 
  }
  else {
      woord3.style.borderColor = "red";
      woord3.style.borderWidth = '0.075em'; 
  }
}
 
function checkEmail() {
 var x = document.getElementById("email");
 var atpos=x.value.indexOf("@");
 var dotpos=x.value.lastIndexOf(".");
 if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
      x.style.borderWidth = '0.075em'; 
      x.style.borderColor = "red";
      //console.log('neenee');
 }
 else{
  x.style.borderWidth = '0.075em'; 
  x.style.borderColor = "green";
  //console.log('jajaa'); 
 }
}

window.onload = function()
{
document.getElementById("pw2").onchange = checkTekst;
document.getElementById("voornaam").onchange = checkTekst2;
document.getElementById("achternaam").onchange = checkTekst2;
document.getElementById("pw").onchange = checkTekst2;
document.getElementById("email").onchange = checkEmail;
}
  

  //interaction 3
const searchIcon = document.querySelector('header nav ul li i');
const searchField = document.querySelector('header nav ul li form label input');

searchIcon.addEventListener("click",function(){
  searchField.classList.toggle('search'); 
  console.log("Werkt!!") 
  }
);

// Bron: https://codepen.io/KoopReynders/pen/KdEagB