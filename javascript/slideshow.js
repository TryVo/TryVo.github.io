// var slideIndex = 0;
// // showSlides();
// //
// // function showSlides() {
// //   var i;
//   var slides = document.getElementsByClassName("mySlides");
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].style.display = "none";
// //   }
//   slideIndex++;
//   // if (slideIndex > slides.length) {slideIndex = 1};
//   slides[slideIndex-1].style.display = "block";
// //   setTimeout(showSlides, 6000);
// // }


var slides = document.getElementsByClassName("mySlides");
var slideIndex = Math.floor(Math.random()*slides.length);
showSlides();

function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex = Math.floor(Math.random()*slides.length);
  slides[slideIndex].style.display = "block";
  setTimeout(showSlides, 6000);
}



// var slides = document.getElementsByClassName("mySlides");
// var L= slides.length;
// var slideIndex = Math.floor(Math.random()*10);
// slides[slideIndex].style.display = "block";
// document.getElementById("title").innerHTML = L;
