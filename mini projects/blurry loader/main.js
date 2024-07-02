const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

const initialBlurValue = getInitialBlurValue();
// if we write this inside blurring() function then it will be called every time, which we do not want, we first find the initial value and store it somewhere

function blurring() {
    load++;
    loadText.innerText = `${load}%`
    const blurValue = initialBlurValue * (1 - load / 100);
    bg.style.filter = `blur(${blurValue}px)`;
    if(load == 100) {
        clearInterval(int);
    }
    // console.log(load);
}


function getInitialBlurValue() {
    const computedStyle = window.getComputedStyle(bg);
    const filterValue = computedStyle.filter;
    const blurMatch = filterValue.match(/blur\((\d+\.?\d*)px\)/);
    return blurMatch ? parseFloat(blurMatch[1]) : 25; // Default to 25 if not found
}