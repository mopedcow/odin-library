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

book1 = addBookToLibrary('James and the Giant Peach', 'Roald', 'Dahl', 288, 'Read');
book2 = addBookToLibrary('Mr Birthday', 'Roger', 'Hargreaves', 32, 'Unread');
book3 = addBookToLibrary('How the Grinch Stole Christmas', 'Dr', 'Seuss', 64, 'Reading');
book4 = addBookToLibrary('The Complete Tales of Beatrix Potter', 'Beatrix', 'Potter', 409, 'Read');
book5 = addBookToLibrary('The Poky Little Puppy', 'Janette', 'Sebring Lowrey', 24, 'Unread');

console.log(library[1].printInfo());