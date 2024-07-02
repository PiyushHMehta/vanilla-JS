// examine the document object
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);

// console.log(document.title);
// document.title = '123'
// console.log(document.title);

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

// console.log(document.all);
// gives all html element in an array: [html, head, meta, meta, link, title, body] 
// document.all[9].textContent = 'Hello'

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// const headerTitle = document.getElementById('header-title')
// console.log(headerTitle);
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'GoodBye'
// diff bw textContent and innerText: 
// console.log(headerTitle.textContent);   // if display: none, text will still be displayed
// console.log(headerTitle.innerText);     // pays attention to styling, if display: none, then text will not be displayed
// console.log(headerTitle.innerHTML);
// headerTitle.innerHTML = '<h3>Hey</h3>'

// const header = document.getElementById('main-header')
// header.style.borderBottom = '2px solid black'


// const items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[0]);
// items[1].textContent = 'Hello'
// items[2].style.fontWeight = 'bold'
// items[3].style.paddingTop = '10px'
// items[3].style.backgroundColor = 'yellow';
// // items.style.backgroundColor = 'gray'    // doesnt work, we have to loop through it
// [...items].forEach(item => item.style.backgroundColor = 'gray')
// // forEach directly not applicable to html collection, we have to convert it to array
// Array.from(items).forEach(item => item.style.backgroundColor = 'grey')

// const listItems = document.getElementsByTagName('li')
// console.log(listItems);

// const btn = document.querySelector('.btn')
// console.log(btn);
// btn.style.backgroundColor = 'lavender'

// const submit = document.querySelector('input[type="submit"]')
// submit.value = 'SEND'

// const firstItem = document.querySelector('.list-group-item')
// firstItem.style.color = 'red'
// const lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'green'
// const secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'blue'

const titles = document.querySelectorAll('.title')      // gives nodelist(like array)
console.log(titles);

var odd = document.querySelectorAll('li:nth-child(odd)')
odd.forEach(o => o.style.backgroundColor = 'gray')
var even = document.querySelectorAll('li:nth-child(even)')
even.forEach(e => e.style.backgroundColor = 'grey')