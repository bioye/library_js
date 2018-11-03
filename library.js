var Book = {
    title:''
}

var library = {
    books:[],
    addBook: function(newBook){
        this.books[0]=newBook
    },
    addBooks: function(newBooks){
        this.books=newBooks
    }
}

var librarian={
}
var patron={
}
var classification={
}

var book1 = Object.create(Book);
book1.title = 'History of Libraries in Nigeria'

var book2 = Object.create(Book)
book2.title = 'How Computer Networks Work'

var book3 = Object.create(Book)
book3.title = 'Learn Java in 21 Days'

books = [book1, book2, book3]
library.addBooks(books)

const bookNames = library.books.map(book=>book.title)
alert(bookNames)