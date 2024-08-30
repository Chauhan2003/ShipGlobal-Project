// script.js

let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-image");
const dots = document.querySelectorAll(".dot");

// Initialize the carousel by showing the first slide
showSlides(slideIndex); // this is intiale image that i want to show

// Function to navigate through slides
function moveCarousel(n) {
  showSlides((slideIndex += n));
}

// Function to show a specific slide
function currentSlide(n) {
  showSlides((slideIndex = n - 1));
}

// Function to display the slides and handle transitions
function showSlides(n) {
  if (n >= slides.length) slideIndex = 0; // Loop back to the first slide
  if (n < 0) slideIndex = slides.length - 1; // Go to the last slide if moving backwards

  // Hide all slides and remove 'active' class from dots
  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Show the current slide and set the corresponding dot to active
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

// Add fallback image handling for all carousel images
slides.forEach((slide) => {
  slide.onerror = function () {
    this.src = "./images/dummy-image.jpg";
  };
});
