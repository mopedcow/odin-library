const library = [];

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

Book.prototype.printInfo = function() {
    return `${this.title} by ${this.authorFirstName} ${this.authorSurname}, ${this.pageCount} pages; ${this.readStatus}. (ID: ${this.ID})`;
}

function generateBooks() {
    const container = document.querySelector(".library-container");

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

book1 = addBookToLibrary('James and the Giant Peach', 'Roald', 'Dahl', 288, 'Read');
book2 = addBookToLibrary('Mr Birthday', 'Roger', 'Hargreaves', 32, 'Unread');
book3 = addBookToLibrary('How the Grinch Stole Christmas', 'Dr', 'Seuss', 64, 'Reading');
book4 = addBookToLibrary('The Complete Tales of Beatrix Potter', 'Beatrix', 'Potter', 409, 'Read');
book5 = addBookToLibrary('The Poky Little Puppy', 'Janette', 'Sebring Lowrey', 24, 'Unread');

generateBooks();