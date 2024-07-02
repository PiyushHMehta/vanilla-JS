const arrayOfObjects = [
    {
        id: 1,
        name: 'Alice',
        age: 25,
        city: 'New York'
    },
    {
        id: 2,
        name: 'Bob',
        age: 30,
        city: 'Los Angeles'
    },
    {
        id: 3,
        name: 'Charlie',
        age: 35,
        city: 'Chicago'
    },
    {
        id: 4,
        name: 'Diana',
        age: 28,
        city: 'Houston'
    }
];


const simpleArray = ['apple', 'banana', 'cherry', 'date'];



// 1. forEach

// for(let i=0;i<arrayOfObjects.length;i++) {
//     console.log(arrayOfObjects[i]);
// }

// arrayOfObjects.forEach(function(object, index, arrayOfObjects) {
//     console.log(object.id);
// })


// 2. filter

// let canVote = [];
// for(let i=0;i<arrayOfObjects.length;i++) {
//     if(arrayOfObjects[i].age > 25) {
//         canVote.push(arrayOfObjects[i].name);
//     }
// }

// const canVote = arrayOfObjects.filter((object) => {
//     if(object.age > 25) return true;
// })

// const canVote = arrayOfObjects.filter(object => object.age > 25);
// const peopleWhoCanVote = canVote.map(person => person.name);
// const peopleWhoCanVote = arrayOfObjects.filter(object => object.age > 25).map(person => person.name);


// console.log(canVote);
// console.log(peopleWhoCanVote);

// const favFruits = simpleArray.filter(fruit => fruit.length <= 5);
// console.log(favFruits);



// 3. map
// simpleArray.map(fruit => fruit.toLocaleUpperCase());
// console.log(simpleArray);       // will still print in lowercase, it doesn't make changes permanently, if we to get the modified array, we must store it

// const capitalArray = simpleArray.map(fruit => fruit.toLocaleUpperCase());
// console.log(capitalArray); 

// const birthYear = arrayOfObjects.map(object => {
//     const currYear = new Date().getFullYear();
//     return currYear - object.age;
// })

// console.log(birthYear);




// 4. sort

// const sortedAge = arrayOfObjects.sort((a, b) => {
//     return a.city.length - b.city.length;
// })

// console.log(sortedAge);




// 5. reduce

let fruitBasket = '';
// for(let i=0;i<simpleArray.length;i++) {
//     fruitBasket += simpleArray[i] + ' ';
// }

// fruitBasket = simpleArray.reduce((allFruits, index) => {
//     return allFruits + index + ' ';
// }, '');

// console.log(fruitBasket);

// const totalAge = arrayOfObjects.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.age;  // Accumulate total age
// }, 0);  // Initial value of accumulator is 0

// const averageAge = totalAge / arrayOfObjects.length;

// console.log('Average Age:', averageAge);


const combined = simpleArray
    .map(fruit => fruit.toUpperCase())
    .filter(fruit => fruit.length <= 5)
    .sort((a, b) => a.length - b.length)
    .reduce((remainingFruits, currFruit) => remainingFruits + currFruit + ' ', '');

console.log(combined);