var carrousselIndex = 1 ;



function navigate(n) {
    console.log('this is 1st n : ' ,n)
  display ( carrousselIndex += n );

}

function display (n) {
  console.log('this is n : ' ,n)
  let i;
  let logos = document.getElementsByClassName ("logo");
  let texts = document.getElementsByClassName ("text");
  let affiches = document.getElementsByClassName ("affiche");
  let bawls = document.getElementsByClassName("bawl");
  let arrows =  document.getElementsByClassName("arrow");
  let lignes =  document.getElementsByClassName("ligne");
  if (n > logos.length) {
    carrousselIndex = logos.length;
  //   arrows[1].className = arrows[1].className.replace(" active", "");
  //  }
  // if (carrousselIndex=1) {
  //   arrows[0].className = arrows[0].className.replace(" active", "");
  }
  // if (carrousselIndex=logos.length) {
  //
  // }
  if(n <= 1 ) {carrousselIndex = 1}
  for (i=0; i < logos.length; i++) {
    logos[i].style.display = "none";
    texts[i].style.display = "none";
    affiches[i].className = affiches[i].className.replace(" active", "");
    // affiches[i].style.display = "none";
    }
  for (i = 0; i < bawls.length; i++) {

    bawls[i].className = bawls[i].className.replace(" active", "");
    lignes[i].className = lignes[i].className.replace(" active", "");
  }
  let j = carrousselIndex - 1;
  logos[j].style.display = "block";
  texts[j].style.display = "block";
  // affiches[j].className += affiches[j].className
  switch (j) {
    case j=0: {
      affiches[j].style.left = "0;";

  }
      break;
    case j=1: {
      affiches[j].style.left = "422px;";
    }
      break;
    case j=2: {
      affiches[j].style.left = "844px";
    }
        break;
  }

  affiches[j].className += " active";
  for (k=0; k <= j ; k++){
  bawls[k].className += " active";
  lignes[k].className += " active";

  }

}

display ( carrousselIndex);
//
// var slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
