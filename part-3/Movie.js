const {Good} = require('./goods')

class Movie extends Good {
  constructor(options = {}) {
    super({ title: options.title })
    this.runtime = options.runtime;
    this.format = options.format;
  }

  returnMovie() {
    super.returnGood();
  }
}

module.exports = { Movie };
