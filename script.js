const library = [];
const container = document.querySelector(".library-container");
const submitBookButton = document.getElementById('submitBook');

function Book(title, authorFirstName, authorSurname, pageCount, isRead) {
    if (!new.target) {
        throw Error("Call constructor with 'new'.");
    }
    this.title = title;
    this.authorSurname = authorSurname;
    this.authorFirstName = authorFirstName;
    this.pageCount = pageCount;
    this.isRead = isRead;
    this.ID = crypto.randomUUID();
}

Book.prototype.toggleReadStatus = function() {
    this.isRead = !this.isRead ? true : false;
}

function addBookToLibrary(title, authorFirstName, authorSurname, pageCount, isRead) {
    const book = new Book(title, authorFirstName, authorSurname, pageCount, isRead);
    library.push(book);
}

function deleteBook(bookId) {
    const id = bookId;

    for (i = library.length-1; i >= 0; i--) {
        book = library[i];
        if (id === book.ID) {
            library.splice(i, 1);
        }
    }
    resetLibrary();
}

function toggleReadStatus(bookId) {
    const id = bookId;
    for (i = library.length-1; i >= 0; i--) {
        book = library[i];
        if (id === book.ID) {
            library[i].toggleReadStatus();
        }
    }
    resetLibrary();
}

function wipeLibrary() {
    const library = document.querySelectorAll('.book-container');
    for (i = library.length-1; i >= 0; i--) {
        library[i].remove();
    }
}

function resetLibrary() {
    wipeLibrary();
    generateLibrary();
}

function generateLibrary() {
    library.forEach (book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-container');

        const readStatus = book.isRead ? "Read" : "Unread";

        bookCard.innerHTML = `
            <div class="spine">
                <h2 class="title-spine">${book.title}</h2>
            </div>
            <div class="cover">
                <div class="book-info-container">
                    <h2 class="title-cover">${book.title}</h2>
                    <h3 class="author">${book.authorFirstName} ${book.authorSurname}</h3>
                    <p class="page-count">${book.pageCount} pages</p>
                    <p class="read-status"><button class="toggle-read" id="${book.ID}">${readStatus}</button></p>
                    <p class="ID">ID: ${book.ID}</p>
                    <button class="delete-book" id="${book.ID}">Delete</button>
                </div>
            </div>
            `;

        container.appendChild(bookCard);
    })
        const readStatusButton = document.querySelectorAll('.toggle-read');
    for (i = 0; i < readStatusButton.length; i++) {
        readStatusButton[i].addEventListener('click', (e) => {
            toggleReadStatus(e.target.id);
        })
    }
    const deleteBookButton = document.querySelectorAll('.delete-book');
    for (i = 0; i < deleteBookButton.length; i++) {
        deleteBookButton[i].addEventListener('click', (e) => {
            deleteBook(e.target.id);
        })
    }
}

submitBookButton.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.getElementById('title');
    const authorFirstName = document.getElementById('first-name');
    const authorSurname = document.getElementById('surname');
    const pageCount = document.getElementById('page-count');

    addBookToLibrary(title.value, authorFirstName.value, authorSurname.value, pageCount.value, 'unread');

    wipeLibrary();
    generateLibrary();
});

const dialog = document.querySelector('dialog');
const openDialogButton = document.querySelector('.open-dialog-button');
const closeDialogButton = document.getElementById('close-dialog-button');

openDialogButton.addEventListener('click', () => {
    dialog.showModal();
})
closeDialogButton.addEventListener('click', () => {
    dialog.close();
})

addBookToLibrary('James and the Giant Peach', 'Roald', 'Dahl', 288, false);
addBookToLibrary('Mr Birthday', 'Roger', 'Hargreaves', 32, true);
addBookToLibrary('How the Grinch Stole Christmas', 'Dr', 'Seuss', 64, true);
addBookToLibrary('The Complete Tales of Beatrix Potter', 'Beatrix', 'Potter', 409, true);
addBookToLibrary('The Poky Little Puppy', 'Janette', 'Sebring Lowrey', 24, false);

generateLibrary();

