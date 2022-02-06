let carrousselIndex = 1 ;



function navigate(n) {
  display ( carrousselIndex += n );
}

function display (n) {
  let i;
  let logos = document.getElementsByClassName ("logo");
  let texts = document.getElementsByClassName ("text");
  let affiches = document.getElementsByClassName ("affiche");
  let bawls = document.getElementsByClassName("bawl");
  let arrows =  document.getElementsByClassName("arrow");
  if (n > logos.length) { carrousselIndex = 1}
  if(n < 1 ) {carrousselIndex = logos.length}
  for (i=0; i < logos.length; i++) {
    logos[i].style.display = "none";
    texts[i].style.display = "none";
    affiches[i].style.display = "none";
  }
  for (i = 0; i < bawls.length; i++) {
      bawls[i].className = bawls[i].className.replace(" active", "");
  }
  logos[carrousselIndex-1].style.display = "block";
  texts[carrousselIndex-1].style.display = "block";
  affiches[carrousselIndex-1].style.display = "block";
  bawls[carrousselIndex-1].className += " active";

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
