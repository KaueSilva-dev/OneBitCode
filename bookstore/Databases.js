module.exports = class Databases {
  #storage = {
    authors: [],
    books: [],
    order: [],
    poster: [],
    users: [],
  };

  find(key) {
    return this.#storage[key];
  }

  findBookByName(bookName) {
    return this.#storage.books.find( b => b.name === bookName);
  }

  saveAuthor(author) {
    this.#storage.authors.push(author);
  }

  saveBook(book) {
    const bookExists = this.findBookByName(book.name);
    if (!bookExists) {
      this.#storage.books.push(book);
    }
  }
  
  addBookToStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.addBookToStock(quantity);
  }

  removeBooksFromStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.removeFromStock(quantity);
  }

  findPosterByName(posterName) {
    return this.#storage.books.find((data) => data.name === posterName);
  }

  savePoster(poster) {
    const posterExists = this.findPosterByName(poster.name);
    if (!posterExists) {
      this.#storage.poster.push(poster);
    }
  }
  
  addPosterToStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    book?.addBookToStock(quantity);
  }

  removePosterFromStock(posterName, quantity) {
    const book = this.findPosterByName(posterName);
    book?.removePosterFromStock(quantity);
  }
  
  saveUser(user){
    const userExists = this.#storage.users.find(data => data.email === user.email);
    if(!userExists){
        this.#storage.users.push(user);
    }
  }

  saveOrder(order){
    this.#storage.order.push(order);
  }

  showStorage(){
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.poster);
    console.table(this.#storage.user);
    console.table(this.#storage.order.map(order => order.data));
  }
}