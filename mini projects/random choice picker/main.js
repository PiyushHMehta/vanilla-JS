const tagsEl = document.getElementById('tags');
const textarea = document.querySelector('#textarea');

textarea.focus();       // automatically puts the cursor in there

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        randomSelect();
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    // console.log(tags);
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

function randomSelect() {
    const times = 20;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 100)
    }, 100)
    // this shifts tag (highlight unhighlight)

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100);
    }, times*100)
    // runs for times*100 ms, then interval is cleared and atlast finally a random tag is selected
}


function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight');
}