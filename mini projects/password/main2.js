const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value      // + used for converting string to number
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText

    if (!password) {
        return
    }

    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard')
    }).catch(err => {
        console.error('Failed to copy: ', err)
    })
})

function generatePassword(lower, upper, number, symbol, length) {
    // 1. initialize password variable
    // 2. filter out unchecked types
    // 3. loop over the length and call generator fn
    // 4. add final pw to pw var and return

    let generatedPassword = '';

    const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])
    // only those who are checked will be remain

    const typesCount = typesArray.length

    if (typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(Math.random() * typesCount)
        const funcName = Object.keys(typesArray[randIndex])[0]
        generatedPassword += randomFunc[funcName]()
    }

    return generatedPassword;
}


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);     // ascii value from 97 to 122
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);     // ascii value from 97 to 122
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
