const library = [];
const container = document.querySelector(".library-container");

function Book(title, authorFirstName, authorSurname, pageCount, readStatus) {
    if (!new.target) {
        throw Error("Call constructor with 'new'.");
    }
    this.title = title;
    this.authorSurname = authorSurname;
    this.authorFirstName = authorFirstName;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    this.ID = crypto.randomUUID();
}

function addBookToLibrary(title, authorFirstName, authorSurname, pageCount, readStatus) {
    const book = new Book(title, authorFirstName, authorSurname, pageCount, readStatus);
    library.push(book);
}

function generateLibrary() {
    library.forEach (book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-container');

        bookCard.innerHTML = `
            <div class="spine">
                <h2 class="title-spine">${book.title}</h2>
            </div>
            <div class="cover">
                <div class="book-info-container">
                    <h2 class="title-cover">${book.title}</h2>
                    <h3 class="author">${book.authorFirstName} ${book.authorSurname}</h3>
                    <p class="page-count">${book.pageCount} pages</p>
                    <p class="read-status">${book.readStatus}</p>
                    <p class="ID">ID: ${book.ID}</p>
                    <button class="delete-book">Delete</button>
                </div>
            </div>
            `;
        container.appendChild(bookCard);
    })
}

function wipeLibrary() {
    console.log('hello');
    const library = document.querySelectorAll('.book-container');
    console.log(library);
    for (i = library.length-1; i >= 0; i--) {
        library[i].remove();
    }
}

const submitBookButton = document.getElementById('submitBook');

submitBookButton.addEventListener('click', preventSubmit, false);

function preventSubmit(event) {
    event.preventDefault();
}

submitBookButton.addEventListener('click', () => {
    const title = document.getElementById('title');
    const authorFirstName = document.getElementById('first-name');
    const authorSurname = document.getElementById('surname');
    const pageCount = document.getElementById('page-count');

    const book = addBookToLibrary(title.value, authorFirstName.value, authorSurname.value, pageCount.value, 'unread');

    wipeLibrary();
    generateLibrary();
});

const removeBookButton = document.getElementsByClassName('.delete-book');
console.log(removeBookButton);

addBookToLibrary('James and the Giant Peach', 'Roald', 'Dahl', 288, 'Read');
addBookToLibrary('Mr Birthday', 'Roger', 'Hargreaves', 32, 'Unread');
addBookToLibrary('How the Grinch Stole Christmas', 'Dr', 'Seuss', 64, 'Reading');
addBookToLibrary('The Complete Tales of Beatrix Potter', 'Beatrix', 'Potter', 409, 'Read');
addBookToLibrary('The Poky Little Puppy', 'Janette', 'Sebring Lowrey', 24, 'Unread');

generateLibrary();
