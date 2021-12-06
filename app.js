let myLibrary = [];

function Book(title, author, genre, isRead, identifier) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isRead = isRead;
    this.identifier = identifier;

}

Book.prototype.modifyReadingStatus = function (){
    this.isRead == false ? this.isRead = true : this.isRead = false;
}
let book = [];

function addBookToLibrary(title, author, genre, isRead) {
    let index = myLibrary.length;
    book[index]  = new Book(title, author, genre, isRead, index);
    myLibrary.push(book[index]);
}

addBookToLibrary("1sdfh", 123, "loco", true);
addBookToLibrary("2asfgh", 1234, "246", false);
addBookToLibrary("3asdg", 1234, "246", false);
addBookToLibrary("4sdfg", 1234, "246", false);

function makeLibrary() {
    const libraryContainer = document.querySelector(".libraryDisplay");
    document.querySelector(".libraryDisplay").querySelectorAll(".card").forEach((card) => {
        card.parentNode.removeChild(card);
    })
    myLibrary.forEach((bookItem)=>{
        if(bookItem !== undefined){
        const card = document.createElement("ul");
        const titleLi = document.createElement("li");
        const authorLi = document.createElement("li");
        const genreLi = document.createElement("li");
        const isReadLi = document.createElement("li");
        const removeBtn = document.createElement("button");
        const readStatus = document.createElement("button");

        card.appendChild(titleLi);
        card.appendChild(authorLi);
        card.appendChild(genreLi);
        card.appendChild(isReadLi);
        card.appendChild(removeBtn);
        card.appendChild(readStatus);
        titleLi.textContent = `Title: ${bookItem.title}`;
        authorLi.textContent = `Author: ${bookItem.author}`;
        genreLi.textContent = `Genre: ${bookItem.genre}`;
        isReadLi.textContent = `Reading Status: ${bookItem.isRead}`;
        removeBtn.textContent = `Remove`;
        readStatus.textContent = `I read that`;
        card.classList.add("card");
        card.setAttribute("id", bookItem.identifier)
        titleLi.classList.add("book-title");
        authorLi.classList.add("book-author");
        genreLi.classList.add("book-genre");
        isReadLi.classList.add("book-isRead");
        removeBtn.setAttribute('id', 'removeBtn');
        readStatus.setAttribute('id', `readBtn`);
        libraryContainer.appendChild(card);
        }
    });
}


makeLibrary();

const submitButton = document.getElementById("submitBook");
const newBookBtn = document.getElementById("newBookBtn");
let removeBtn = document.querySelectorAll("#removeBtn");
let readBtn  = document.querySelectorAll("#readBtn");

submitButton.addEventListener("click", submitBook);

newBookBtn.addEventListener("click", newBookForm); 

makeRemoveBtn();
makeReadBtn();

function submitBook(event){
    const bookTitle = document.getElementById("bookTitle");
    const bookAuthor = document.getElementById("bookAuthor");
    const bookGenre = document.getElementById("bookGenre");
    const bookIsRead = document.getElementById("bookIsRead");
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookGenre.value, bookIsRead.checked);

    bookTitle.value = " ";
    bookAuthor.value = " ";
    bookGenre.value = " ";
    bookIsRead.value = " ";

    makeLibrary();
    makeRemoveBtn();
    makeReadBtn();
};

function newBookForm(event){
    const bookForm = document.querySelector(".bookForm");
    if(bookForm.classList.contains("hidden")){
        bookForm.classList.remove("hidden");
        document.getElementById("submitBook").classList.remove("hidden");

    }else {
        bookForm.classList.add("hidden");
        document.getElementById("submitBook").classList.add("hidden");
    }

}
function removeBook(event){
    
    const elementId = event.target.parentNode.id;
    myLibrary.splice(elementId, 1, undefined);
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    let undefinedCounter = 0;
    myLibrary.forEach(item => {
        if(item === undefined){undefinedCounter++;}
        if(undefinedCounter == myLibrary.length) {
            myLibrary=[];
        }
    });
}
function makeRemoveBtn(){
    removeBtn = document.querySelectorAll("#removeBtn");
    removeBtn.forEach(removeElement => { 
        removeElement.addEventListener("click", removeBook);
    });
}

function changeReadStatus(event){
    const elementId = event.target.parentNode.id;
    book[elementId].modifyReadingStatus();
    event.target.parentNode.querySelector(".book-isRead").textContent = `Reading Status: ${book[elementId].isRead}`;

}

function makeReadBtn(){
    readBtn = document.querySelectorAll("#readBtn");
    readBtn.forEach(item => {
        item.addEventListener("click", changeReadStatus);
    });
}
