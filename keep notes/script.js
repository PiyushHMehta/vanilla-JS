const notesContainer = document.querySelector('.notes-container')
const createBtn = document.querySelector('.btn')
let notes = document.querySelectorAll('.input-box')     // all the notes have this class name

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes')
}

showNotes()

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML)
}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p')
    let img = document.createElement('img')
    inputBox.className = 'input-box'    // newly created input box is given the class of input-box
    inputBox.setAttribute('contenteditable', 'true')
    img.src = 'notes-app-img/images/delete.png'
    notesContainer.appendChild(inputBox).appendChild(img)
})

notesContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
        updateStorage()
    } else if(e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box')
        notes.forEach(note => {
            note.onkeyup = function() {
                updateStorage()
            }
        })
    }
})

document.addEventListener('keydown', ev => {
    if(ev.key === 'Enter') {
        document.execCommand('insertLineBreak')
        ev.preventDefault(   )
    }
})