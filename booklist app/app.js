// Book class: represents a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}



// ui class: handles ui task
class UI {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
            // we click on <a>, its parent is <td> its parent is <tr> which we want to delete
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        // i want alert to be below the title 'MyBookList'
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // vanish after 3s
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}




// store class: handles storage
// local storage only stores value in key-value pair, so if we want to store objects, we stringify it and while retrieving , we parse 
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}


// event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);



// event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // validate
    if (title === '' || author === '' || isbn === '') {
        // alert('Please fill in all the fields');
        UI.showAlert('Please fill in all the fields', 'danger');
    } else {
        // instantiate book
        const book = new Book(title, author, isbn);

        // add book to ui
        UI.addBookToList(book);

        // add book to store
        Store.addBook(book);

        // clearing input fields
        UI.clearFields();

        // show success message
        UI.showAlert('Book added successfully', 'success');
    }
})



// event: remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // remove book from ui
    UI.deleteBook(e.target);

    // remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // show success message
    UI.showAlert('Book deleted', 'success');
})