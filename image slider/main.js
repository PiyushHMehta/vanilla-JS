var currIndex = 0;
const length = 6;

const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function showSlide(index) {
    // Remove current class from current slide
    slides[currIndex].classList.remove('current');
    
    // Update currIndex
    currIndex = (index + length) % length;
    
    // Add current class to the new current slide
    slides[currIndex].classList.add('current');
}

prev.addEventListener('click', () => {
    showSlide(currIndex - 1);
});

next.addEventListener('click', () => {
    showSlide(currIndex + 1);
});

// Show the initial slide (first slide) on page load
showSlide(currIndex);