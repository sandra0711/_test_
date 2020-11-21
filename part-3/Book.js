const {Good} = require('./goods.js');

class Book extends Good {
  constructor(options = {}) {
    super({ title: options.title }),
    this.length = options.length;
    this.author = options.author;
    this.format = options.format;
    this.language = options.language;
  }
  returnBook() {
    super.returnGood();
    
  }
}
module.exports = { Book };
