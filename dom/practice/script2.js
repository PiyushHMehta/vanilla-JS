// traversing the dom

// const title = document.querySelector('.title')
// // gives the first h2 elmt(2 h2 elmts have class title)
// console.log(title.nextSibling);
// console.log(title.parentElement);

const itemList = document.querySelector('#items')
// console.log(itemList.parentNode);       // return node object
// console.log(itemList.parentElement);    // returns element object
// itemList.parentNode.style.backgroundColor = '#abcdef'
// console.log(itemList.parentElement.parentElement.parentElement.parentElement);
// //                   main          container     body          html
// console.log(itemList.childElementCount);
// console.log(itemList.childNodes);   // also includes the line break
// console.log(itemList.children);     // just gives the li
// console.log(itemList.firstChild);   // doesn't give li, but give text(which is the line break)
// console.log(itemList.firstElementChild);    // gives first li
// itemList.firstElementChild.innerHTML = `<li>Hey<span style="display:none">&nbsp;Ho!</span></li>`
// console.log(itemList.firstElementChild.textContent);
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'gold'


// create element
// const newDiv = document.createElement('div')
// newDiv.className = 'hello'
// newDiv.id = 'temp'
// newDiv.setAttribute('title', 'Hello div')
// // create a text node
// const newDivText = document.createTextNode('hey ho!')
// newDiv.appendChild(newDivText)
// console.log(newDiv);
// const container = document.querySelector('header .container')
// const h1 = document.querySelector('header h1')
// container.insertBefore(newDiv, h1)
// newDiv.style.fontSize = '30px'

/*
NodeList
Definition: A NodeList is a collection of nodes. These nodes can be element nodes, text nodes, or any other type of node.
Access Methods:
Can be accessed by querySelectorAll (static NodeList).
Some methods like childNodes return a NodeList.
Type of Nodes: Contains all types of nodes, not just elements.
Iteration:
Modern browsers support forEach method directly on NodeList.
Can be iterated using for loops.
Static vs Live:
NodeList can be either static or live. For example, querySelectorAll returns a static NodeList, while childNodes returns a live NodeList.
HTMLCollection
Definition: An HTMLCollection is a collection of element nodes.
Access Methods:
Can be accessed by methods like getElementsByClassName, getElementsByTagName, and children.
Type of Nodes: Contains only element nodes.
Iteration:
Does not have a forEach method.
Can be iterated using for loops.
Live Collection:
HTMLCollection is always live. It automatically updates when the document structure changes.
Key Differences
Content Type:

NodeList can contain any type of node.
HTMLCollection contains only element nodes.
Iteration Support:

NodeList supports forEach in modern browsers.
HTMLCollection does not support forEach.
Live vs Static:

NodeList can be either live or static.
HTMLCollection is always live.
Methods of Access:

NodeList: Accessed via methods like querySelectorAll (static) or childNodes (live).
HTMLCollection: Accessed via methods like getElementsByClassName, getElementsByTagName, children.
*/
