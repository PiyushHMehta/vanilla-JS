function breakChain() {
    let chain = document.getElementById('chain')
    chain.innerHTML = '&#xf0c1'     // unicode for link/chain icon

    setTimeout(() => {
        chain.innerHTML = '&#xf127'     // unicode for broken chain
    }, 1000)
    // every second it toggles bw chain and broken-chain
}

setInterval(breakChain, 2000)


function chargebattery() {
    let battery = document.getElementById('battery')
    battery.innerHTML = '&#xf244'
    setTimeout(() => {
        battery.innerHTML = '&#xf243'
    }, 1000)
    setTimeout(() => {
        battery.innerHTML = '&#xf242'
    }, 2000)
    setTimeout(() => {
        battery.innerHTML = '&#xf241'
    }, 3000)
    setTimeout(() => {
        battery.innerHTML = '&#xf240'
    }, 4000)
}


/*
setTimeout(() => {
    battery.innerHTML = '&#xf243'
    setTimeout(() => {
        battery.innerHTML = '&#xf242'
        setTimeout(() => {
            battery.innerHTML = '&#xf241'
            setTimeout(() => {
                battery.innerHTML = '&#xf240'
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

works fine
*/
setInterval(chargebattery, 5000);       // 5s because whole animation takes 4 seconds