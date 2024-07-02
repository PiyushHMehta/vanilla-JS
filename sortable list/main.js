const draggableList = document.getElementById('draggable-list')
const check = document.getElementById('check')

let smartestPeople = [
    "Albert Einstein",
    "Isaac Newton",
    "Leonardo da Vinci",
    "Nikola Tesla",
    "Marie Curie",
    "Stephen Hawking",
    "Galileo Galilei",
    "Charles Darwin",
    "Alan Turing",
    "Richard Feynman"
];

// store list items
const listItems = [];

let dragStartIndex;

createList();

// insert list items into dom
function createList() {
    [...smartestPeople]
    .map((a) => ({value: a, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .forEach((person, index) => {
        // console.log(person.value);
        const listItem = document.createElement('li')
        listItem.setAttribute('data-index', index)
        // read about this line, data-[] for custom attribute in html-5 and onwards
        listItem.innerHTML = `
        <span class="number">${index + 1}</span>    
        <div class="draggable" draggable="true">
            <p class="person-name">${person.value}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
        `

        listItems.push(listItem)
        draggableList.appendChild(listItem)
    })

    addEventListeners()
}


function dragStart() {
    // console.log('start');
    dragStart = +this.closest('li').getAttribute('data-index')
}

function dragOver(e) {
    // console.log('over');
    e.preventDefault()
}

function dragEnter() {
    // console.log('enter');
    this.classList.add('over')
}

function dragLeave() {
    // console.log('leave');
    this.classList.remove('over')
}

function dragDrop(event) {
    event.preventDefault();
    const dragEndIndex = +event.currentTarget.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
    event.currentTarget.classList.remove('over');
}


function swapItems(fromIndex, toIndex) {
    // Get the <li> elements
    const itemOne = listItems[fromIndex];
    const itemTwo = listItems[toIndex];

    // Swap the position of list items in the DOM
    draggableList.insertBefore(itemTwo, itemOne); // Insert itemTwo before itemOne in the list

    // Update listItems array to reflect new DOM order
    listItems.splice(fromIndex, 1, itemTwo);
    listItems.splice(toIndex, 1, itemOne);
}



function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable')
    const dragListItems = document.querySelectorAll('.draggable-list li')
    draggables.forEach((draggable) => {
        draggable.addEventListener('dragstart', dragStart)
    })
    dragListItems.forEach((item) => {
        item.addEventListener('dragover', dragOver)
    })
    dragListItems.forEach((item) => {
        item.addEventListener('drop', dragDrop)
    })
    dragListItems.forEach((item) => {
        item.addEventListener('dragenter', dragEnter)
    })
    dragListItems.forEach((item) => {
        item.addEventListener('dragleave', dragLeave)
    })
}