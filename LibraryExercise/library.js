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
        this.Colleciton = [] ;
    }

    addToCollection(book) {
        this.Collection.push(book);
    }
    searchBook(bookName) {
        this.Colleciton.forEach(book => {
            if(book.Title === bookName ){
               this.Collection.forEach(name =>{
                    if(name.Title === bookName){
                        console.log(name)
                    }
                })
            }
        })
    }
    bookLoan(bookName) {
        This.Colleciton.forEach(book => {
            if(book.Title === bookName ){
               this.Colleciton.forEach(name =>{
                    if(name.Avaible === true){
                        name.Avaible = false
                        console.log(name)
                    }
                })
            }
        })
    }
    bookDevolution(bookName) {
        This.Colleciton.forEach(book => {
            if(book.Title === bookName ){
               this.Collection.forEach(name => {
                    if(name.Avaible === false){
                        name.Avaible = true
                        console.log(name)
                    }
                })
            }
        })
    }


}


let book1 = new Book("Percy", "Kj", "Sunshine", 2005, true);
let book2 = new Book("Pearl", "Kj Roll", "Sunshine", 2010, false);


let amazonBookshelf = new Library("Amzon" ,"Online", 83990232323)

amazonBookshelf.addToCollection(book1)
amazonBookshelf.addToCollection(book2)
amazonBookshelf.searchBook("Percy")
