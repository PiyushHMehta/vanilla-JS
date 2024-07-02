document.addEventListener('DOMContentLoaded', function() {
    const upButton = document.querySelector('.up-button');
    const downButton = document.querySelector('.down-button');
    const leftSlide = document.querySelector('.left-slide');
    const rightSlide = document.querySelector('.right-slide');
    const slides = document.querySelectorAll('.left-slide > div'); // Get all slide divs
    
    let currentIndex = 0; // Initial slide index
    const totalSlides = slides.length;

    // Initialize the position of slides
    updateSlidePosition();

    // Function to slide up
    function slideUp() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    // Function to slide down
    function slideDown() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    // Function to update slide positions
    function updateSlidePosition() {
        const slideHeight = leftSlide.clientHeight;
        leftSlide.style.transform = `translateY(-${currentIndex * slideHeight}px)`;
        rightSlide.style.transform = `translateY(-${(totalSlides - 1 - currentIndex) * slideHeight}px)`;
    }

    // Event listeners for buttons
    upButton.addEventListener('click', slideUp);
    downButton.addEventListener('click', slideDown);
});



/*
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (dir) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (dir === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}


*/