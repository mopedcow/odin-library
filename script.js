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

book1 = addBookToLibrary('Villette', 'Charlotte', 'Brontë', 235, 'Read');
book2 = addBookToLibrary('Agnes Grey', 'Anne', 'Brontë', 190, 'Unread');
book3 = addBookToLibrary('Norwegian Wood', 'Haruki', 'Murakami', 205, 'Reading');
book4 = addBookToLibrary('Our Wives Under the Sea', 'Julia', 'Armfield', 180, 'Read');
book5 = addBookToLibrary('World Within the World', 'Julia', 'Gfrörer', 150, 'Unread');

console.log(library[1].printInfo());