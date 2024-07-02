// get input element
let filterInput = document.querySelector('#filterInput');

// add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // get input value
    let filterValue = document.querySelector('#filterInput').value.toUpperCase();

    // get names ul
    let ul = document.querySelector('#names');
    // get li from ul(collection item)
    let li = ul.querySelectorAll('li.collection-item');

    // loop through all collection item li
    for(let i=0;i<li.length;i++) {
        let a = li[i].getElementsByTagName('a')[0];
        // if match
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = ''
        } else {
            li[i].style.display = 'none'
        }
    }
}