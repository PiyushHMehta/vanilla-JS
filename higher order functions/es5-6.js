/*
// const s1 = 'Hello';   
// const s2 = new String('Hello');
// console.log(typeof(s1) +' '+ typeof(s2));


// const book1 = {
//     title: 'Book-1',
//     author: 'Jane Doe',
//     year: 2013,
//     getSummary: function() {
//         return `${this.title} was wriiten by ${this.author} in the year ${this.year}`;
//     }
// }

// console.log(Object.keys(book1));
// console.log(Object.values(book1));

// console.log(book1.getSummary());




// using constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
}

Book.prototype.getAge = function() {
    const age = new Date().getFullYear() - this.year;
    return `${this.title} is ${age} years old!`;
}

// revise
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// const book1 = new Book('Infinity', 'Ishika R.', 2021);
// console.log(book1);
// console.log(book1.getSummary());
// console.log(book1.getAge());

// book1.revise(2022);
// console.log(book1);





// inheritance
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}


// inherit prototype
Magazine.prototype = Object.create(Book.prototype);     // getSummary is not a function in the book constructor, its in prototype object of book object
const magazine1 = new Magazine('maggie', 'abc', 2020, 'October');

// console.log(magazine1.getSummary());







// create object
const bookProtos = {
    getSummary: function() {
        return `${this.title} was wriiten by ${this.author} in the year ${this.year}`;
    },
    getAge: function() {
        const age = new Date().getFullYear() - this.year;
        return `${this.title} is ${age} years old!`;
    }
}

// const book2 = Object.create(bookProtos);
// book2.title = 'UIOP';
// book2.author = 'kjhh';
// book2.year = '8799';

const book2 = Object.create(bookProtos, {
    title: {value: 'kkl'},
    author: {value: 'kjhj'},
    year: {value: '8979'},
});

// console.log(book2);
*/







// classes and subclasses - es6
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was wriiten by ${this.author} in the year ${this.year}`;   
    }

    static topBookStore() {
        return 'Barnes & Noble';
    }
}

const book1 = new Book('ssk', 'sjsk', 2009);
// console.log(book1.getSummary());

// console.log(Book.topBookStore());


class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

const magazine1 = new Magazine('skhk', 'ahsg', 6971, 'Nib');
// console.log(magazine1);

console.log(magazine1.getSummary());