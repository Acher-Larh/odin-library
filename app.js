let myLibrary = [];

function Book(title, author, genre, isRead, identifier) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isRead = isRead;
    this.identifier = identifier;


}

function addBookToLibrary(title, author, genre, isRead) {
    let book = new Book(title, author, genre, isRead, myLibrary.length+1)
    myLibrary.push(book);
    // console.log(myLibrary);
    // myLibrary.splice(myLibrary.indexOf(book));
    // console.log(myLibrary); 
}

addBookToLibrary("1sdfh", 123, "loco", true);
addBookToLibrary("2asfgh", 1234, "246", false);
addBookToLibrary("3asdg", 1234, "246", false);
addBookToLibrary("4sdfg", 1234, "246", false);
function displayLibrary() {
    const libraryContainer = document.querySelector(".libraryDisplay");
    document.querySelector(".libraryDisplay").querySelectorAll(".card").forEach((card) => {
        card.parentNode.removeChild(card);
    })
    myLibrary.forEach((bookItem)=>{
        
        const card = document.createElement("ul");
        const titleLi = document.createElement("li");
        const authorLi = document.createElement("li");
        const genreLi = document.createElement("li");
        const isReadLi = document.createElement("li");
        const removeBtn = document.createElement("button");
        card.appendChild(titleLi);
        card.appendChild(authorLi);
        card.appendChild(genreLi);
        card.appendChild(isReadLi);
        card.appendChild(removeBtn);
        titleLi.textContent = `Title: ${bookItem.title}`;
        authorLi.textContent = `Author: ${bookItem.author}`;
        genreLi.textContent = `Genre: ${bookItem.genre}`;
        isReadLi.textContent = `Read?: ${bookItem.isRead}`;
        removeBtn.textContent = `Remove`;
        card.classList.add("card");
        card.setAttribute("id", bookItem.identifier)
        titleLi.classList.add("book-title");
        authorLi.classList.add("book-author");
        genreLi.classList.add("book-genre");
        isReadLi.classList.add("book-isRead");
        removeBtn.setAttribute('id', 'removeBtn');
        libraryContainer.appendChild(card);


    });
}

const submitButton = document.getElementById("submitBook");
submitButton.addEventListener("click", () => {

    const bookTitle = document.getElementById("bookTitle");
    const bookAuthor = document.getElementById("bookAuthor");
    const bookGenre = document.getElementById("bookGenre");
    const bookIsRead = document.getElementById("bookIsRead");

    addBookToLibrary(bookTitle.value, bookAuthor.value, bookGenre.value, bookIsRead.value);

    bookTitle.value = " ";
    bookAuthor.value = " ";
    bookGenre.value = " ";
    bookIsRead.value = " ";

    displayLibrary();
});

const newBookBtn = document.getElementById("newBookBtn");
newBookBtn.addEventListener("click", () => {
    const bookForm = document.querySelector(".bookForm");
    if(bookForm.classList.contains("hidden")){
        bookForm.classList.remove("hidden");
        document.getElementById("submitBook").classList.remove("hidden");

    }else {
        bookForm.classList.add("hidden");
        document.getElementById("submitBook").classList.add("hidden");
    }
        

});

displayLibrary();

const removeBtn = document.querySelectorAll("#removeBtn");
removeBtn.forEach(removeElement => { 
    removeElement.addEventListener("click", function (e) {
        console.log(removeElement.parentNode.id);
        console.log(myLibrary.indexOf(Book.identifier));
    console.log("end");
});

});
