const time = document.getElementById('time')
const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')

// show time
function showTime() {
    let today = new Date()
    hour = today.getHours()
    min = today.getMinutes()
    sec = today.getSeconds()

    // figure out am/pm
    const amPm = hour >= 12 ? 'PM' : 'AM'

    // 12 hr format
    hour = hour % 12 || 12

    // output time
    time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)} ${amPm}`
}


function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}

function setBgGreet() {
    var greet = '';
    let today = new Date()
    hour = today.getHours()
    // console.log(hour);
    if (hour >= 4 && hour < 12) {
        greet = 'Good Morning';
        document.body.style.backgroundImage = "url('./images/morning.jpg')"
    } else if (hour >= 12 && hour < 20) {
        greet = 'Good Afternoon';
        document.body.style.backgroundImage = "url('./images/afternoon.jfif')"
    } else {
        greet = 'Good Night'
        document.body.style.backgroundImage = "url('./images/night.jpeg')"
    }

    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundSize = 'cover';
    document.body.style.color = 'white'

    greeting.innerHTML = greet
}


// getters-setters
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.keyCode == 13) {   // for enter
            localStorage.setItem('name', e.target.innerText)
            name.blur();   // so that on pressing enter, we don't go on new line 
        }
    } else {
        // blur
        localStorage.setItem('name', e.target.innerText)
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]'
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.keyCode == 13) {   // for enter
            localStorage.setItem('focus', e.target.innerText)
            focus.blur();   // so that on pressing enter, we don't go on new line 
        }
    } else {
        // blur
        localStorage.setItem('focus', e.target.innerText)
    }
}


name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)
// either on enter or blur, we want the function to execute

// run 
setInterval(showTime, 1000)
setBgGreet()
getName()
getFocus()