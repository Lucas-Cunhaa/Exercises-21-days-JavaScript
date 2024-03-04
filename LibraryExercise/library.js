class Book {
    Title ;
    Autor; 
    Publish ;
    YearOFPublish ;
    Avaible;
    constructor(title, autor, publish, yearOFPublish, avaible){
        this.Title = title ;
        this.Autor = autor ;
        this.Publish = publish ;
        this.YearOFPublish = yearOFPublish ;
        this.Avaible = avaible;
    }
}
class Library {
    Name ;
    Adress ;
    Phone ;
    Collection;
    constructor(name, adress, phone){
        this.Name = name ;
        this.Adress = adress ;
        this.Phone = phone ; 
        this.Collection = [] ;
    }

    addToCollection(book) {
        this.Collection.push(book);
    }
    searchBook(bookName) {
        this.Collection.forEach(book => {
            if(book.Title === bookName ){
             console.log(book)
            }
        })
    }
    bookLoan(bookName) {
        let validation = false;
        let validBook = false;
        this.Collection.forEach(book => {
            if(book.Title === bookName ){
                validation = true;
                if(book.Avaible = true){
                    book.Avaible = false;
                    validBook = true;
                }
            }
        })
        if(!validation) {console.log("The Book was not Found")}
        if(!validBook) {console.log("The book is not avaible")}
    }
    bookDevolution(bookName) {
       let validation = false;
       
        
        this.Collection.forEach(book => {
            if(book.Title === bookName ){
                validation = true;
                book.Avaible = true;
                console.log(book)
            }
        })
        if(!validation) {console.log("The Book was not Found")}
    } 
    


}

let amazonBookshelf = new Library("Amzon" ,"Online", 83990232323)
let book1 = new Book("Percy", "Kj", "Sunshine", 2005, true);
let book2 = new Book("Pearl", "Kj Roll", "Sunshine", 2010, false);




amazonBookshelf.addToCollection(book1)
amazonBookshelf.addToCollection(book2)
amazonBookshelf.searchBook("")
amazonBookshelf.bookLoan("")
amazonBookshelf.bookDevolution("")
