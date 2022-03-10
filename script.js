function randomColor(){
    return "#"+ Math.floor(Math.random()*16777215).toString(16);
}
function Book(title, author, pages, read, color){
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
    this.color = color
}

function addBookToLibrary(){
    const newBook = new Book(formTitle.value, formAuthor.value, formPages.value, formRead.checked, randomColor());
    myLibrary.push(newBook);
}

function displayBook(book, index){
    let card = document.createElement('div');
    card.classList.add("card");
    card.setAttribute('data', index);
    
    let title = document.createElement('div');
    title.classList.add("title");
    title.innerHTML = book.title;
    title.style.backgroundColor=book.color;

    let del = document.createElement('div');
    del.classList.add("delete");
    del.innerHTML = "x";

    title.appendChild(del);

    let author = document.createElement('div');
    author.classList.add("author");
    author.innerHTML = "by: " + book.author;

    let pages = document.createElement('div');
    pages.classList.add("pages");
    pages.innerHTML = "pages: " + book.pages;

    let status = document.createElement('div');
    status.classList.add("status")

    let read = document.createElement('button');
    if (book.read){
        read.classList.add("read");
        read.innerHTML = "read";
    }
    else{
        read.classList.add("unread");
        read.innerHTML = "unread";
    }
    status.appendChild(read);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    library.appendChild(card);
}

function displayAllBooks(array){
    library.innerHTML="";
    array.forEach((book, index)=>{
        displayBook(book, index);
    })
}

function formReset(){
    formPrompt.style.visibility = "hidden";
    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = "";
    formRead.checked = false;
}

let myLibrary = [];

const library = document.querySelector(".library");

// card delete button

document.body.addEventListener('click', function(e){
    if (e.target.className == 'delete'){
        myLibrary.splice((e.target.parentNode.parentNode.getAttribute('data')), 1);
        displayAllBooks(myLibrary);
    }
});

// read/unread button

document.body.addEventListener('click', function(e){
    if (e.target.className == "read"){
            e.target.className = "unread";
            e.target.innerHTML = "unread";
            myLibrary[e.target.parentNode.parentNode.getAttribute('data')].read = false;
    }
    else if (e.target.className == "unread"){
        e.target.className = "read";
        e.target.innerHTML = "read";
        myLibrary[e.target.parentNode.parentNode.getAttribute('data')].read = true;
    }
});


// form 
const formPrompt = document.querySelector(".prompt");
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formRead = document.querySelector("#read");

const formButton = document.querySelector("#form-submit");
formButton.addEventListener('click', function(e){
    e.preventDefault();
    if(formTitle.value != "" && formAuthor.value !="" && formPages.value !=""){
        addBookToLibrary();
        formReset();
        displayAllBooks(myLibrary);
    }
    else{
        null;
    }
});

const formClose = document.querySelector(".close-button");
formClose.addEventListener('click', function(){
    formReset();
});

const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener('click', function(){
    formPrompt.style.visibility = "visible";
});



const filler1 = new Book("The Big Book", "Jimmy Neutron", "205", false, randomColor());
const filler2 = new Book("Really Long Book Title Name Forever", "James Cameron", "404", true, randomColor());
const filler3 = new Book("Best Book Ever", "James Bond", 1000, false, randomColor());

myLibrary.push(filler1, filler2, filler3);

displayAllBooks(myLibrary);
