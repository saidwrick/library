let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
}

function addBookToLibrary(){

}

function displayBook(book){
    let card = document.createElement('div');
    card.classList.add("card");
    card.setAttribute('data', '0');
    
    let title = document.createElement('div');
    title.classList.add("title");
    title.innerHTML = book.title;

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

const library = document.querySelector(".library");

document.body.addEventListener('click', function(e){
    if (e.target.className == 'delete'){
        e.target.parentNode.parentNode.remove();
    }
});

document.body.addEventListener('click', function(e){
    if (e.target.className == "read"){
            e.target.className = "unread";
            e.target.innerHTML = "unread";
    }
    else if (e.target.className == "unread"){
        e.target.className = "read";
        e.target.innerHTML = "read";
        console.log(e.target.parentNode.parentNode.getAttribute('data'));
    }
});

const test = new Book("Big Book", "Jimmy", "205", false);

console.table(test);


displayBook(test);