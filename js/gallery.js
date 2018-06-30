// Open the Modal
$('.column img').click(function() {
  document.getElementById('myModal').style.display = "block";
});
// Open the Modal End

// Close the Modal
$('.close').click(function() {
  document.getElementById('myModal').style.display = "none";
});
// Close the Modal End

let slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Controls 
$('.next').click(function() {
  showSlides(slideIndex += 1);
});
$('.prev').click(function() {
  showSlides(slideIndex += -1);
});
// Next/Previous Controls End 

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = $('.mySlides');
  const text = $('.mySlides img');
  const captionText = document.getElementById('caption');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
  captionText.innerHTML = text[slideIndex-1].alt;
}