// get open button
const openBtn = document.querySelector('#modalBtn');
// get modal element
const modal = document.querySelector('.modal');
// get close button
const closeBtn = document.querySelector('.closeBtn');


// listen for click on open
openBtn.addEventListener('click', (() => {
    modal.style.display = 'block';
}));

// listen for click on close
closeBtn.addEventListener('click', (() => {
    modal.style.display = 'none';
}));

// liste for outside click
window.addEventListener('click', outsideClick);

// function to click modal if outside click
function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}