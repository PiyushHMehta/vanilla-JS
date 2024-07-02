// event listener
const button = document.getElementById('button')
const output = document.getElementById('output')
const box = document.getElementById('box')
const input = document.querySelector('input[type="text"]')
const form = document.querySelector('form')
const select = document.querySelector('select')


// button.addEventListener('click', buttonClick)

// function buttonClick() {
//     button.textContent = 'Clicked'
//     button.style.backgroundColor = 'green'
//     setTimeout(() => {
//         button.textContent = 'Click'
//         button.style.backgroundColor = 'rgb(39, 39, 39)'
//     }, 2000)
// }

// function buttonClick(e) {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);
//     output.innerHTML = `<h3>${e.target.id}</h3>`
//     console.log(e.type);
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log(e.offsetX, e.offsetY);
//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// }

// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)


// function runEvent(e) {
//     e.preventDefault()
//     console.log('Event type:', e.type);
//     output.innerHTML = `
//         <h3>${e.offsetX}</h3>
//         <h3>${e.offsetY}</h3>
//     `
//     box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${Math.max(e.offsetX, e.offsetY)})`
//     output.innerHTML = `<h3>${e.target.value}</h3>`     
// }


// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);


// input.addEventListener('keydown', runEvent)
// input.addEventListener('focus', runEvent)
// input.addEventListener('blur', runEvent)
// input.addEventListener('cut', runEvent)
// input.addEventListener('paste', runEvent)
// input.addEventListener('input', runEvent)


// select.addEventListener('change', runEvent)

// form.addEventListener('submit', runEvent)