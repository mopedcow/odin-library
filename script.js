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
    this.printInfo = function() {
        return `${title} by ${authorFirstName} ${authorSurname}, ${pageCount} pages; ${readStatus}. (ID: ${this.ID})`;
    };
}

function addBookToLibrary(title, author, pageCount, readStatus) {
    const book = new Book(title, author, pageCount, readStatus);
    return book;
}

book1 = addBookToLibrary('Villette', 'Charlotte', 'Brontë', 200, 'Read');