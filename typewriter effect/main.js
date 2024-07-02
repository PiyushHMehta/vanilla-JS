/*
const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// type method
TypeWriter.prototype.type = function() {
    // current index of word
    const current = this.wordIndex % this.words.length;
    // get the word
    const fulltext = this.words[current];

    // check if is deleting
    if(this.isDeleting) {
        // remove a char
        this.txt = fulltext.substring(0, this.txt.length - 1);
    } else {
        // add a char
        this.txt = fulltext.substring(0, this.txt.length + 1);
    }

    // insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

    // initial type speed
    let typeSpeed = 300;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    // if word is complete
    if(!this.isDeleting && this.txt === fulltext) {
        // pause at the end
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        // pause before start typing
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
}

// init on dom load
document.addEventListener('DOMContentLoaded', init);

// init app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // init typeWriter
    new TypeWriter(txtElement, words, wait);
}
*/

// es6 class

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // current index of word
        const current = this.wordIndex % this.words.length;
        // get the word
        const fulltext = this.words[current];

        // check if is deleting
        if (this.isDeleting) {
            // remove a char
            this.txt = fulltext.substring(0, this.txt.length - 1);
        } else {
            // add a char
            this.txt = fulltext.substring(0, this.txt.length + 1);
        }

        // insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

        // initial type speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // if word is complete
        if (!this.isDeleting && this.txt === fulltext) {
            // pause at the end
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            // pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// init on dom load
document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // init typeWriter
    new TypeWriter(txtElement, words, wait);
}