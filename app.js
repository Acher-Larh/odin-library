let myLibrary = [];

function Book(title, author, genre, isRead) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isRead = isRead;

}

function addBookToLibrary(title, author, genre, isRead) {
    const newBook = new Book(title, author, genre, isRead)
    myLibrary.push(newBook);
}

addBookToLibrary("monke", 123, "loco", true);
function displayLibrary() {
    const libraryContainer = document.querySelector(".libraryDisplay");
    // const cardContent = document.createElement("div");
    myLibrary.forEach((book)=>{
        
        const card = document.createElement("ul");
        const titleLi = document.createElement("li");
        const authorLi = document.createElement("li");
        const genreLi = document.createElement("li");
        const isReadLi = document.createElement("li");
        card.appendChild(titleLi);
        card.appendChild(authorLi);
        card.appendChild(genreLi);
        card.appendChild(isReadLi);
        titleLi.textContent = book.title;
        authorLi.textContent = book.author;
        genreLi.textContent = book.genre;
        isReadLi.textContent = book.isRead;
        card.classList.add("card");
        titleLi.classList.add("book-title");
        authorLi.classList.add("book-author");
        genreLi.classList.add("book-genre");
        isReadLi.classList.add("book-isRead");
        libraryContainer.appendChild(card);


    });
}

const submitButton = document.getElementById("submitBook");
submitButton.addEventListener("click", () => {

    const bookTitle = document.getElementById("bookTitle").value;
    const bookAuthor = document.getElementById("bookAuthor").value;
    const bookGenre = document.getElementById("bookGenre").value;
    const bookIsRead = document.getElementById("bookIsRead").value;

    addBookToLibrary(bookTitle, bookAuthor, bookGenre);
});

const newBookBtn = document.getElementById("newBookBtn");
newBookBtn.addEventListener("click", () => {
    const hiddenForm = document.querySelectorAll(".hidden");
    hiddenForm.forEach(hiddenElement => {

        if(hiddenElement.classList.contains("hidden")){
            hiddenElement.classList.remove("hidden");
    
        }else {
            hiddenElement.classList.add("hidden");
        }
    });
});

displayLibrary();