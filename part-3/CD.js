const {Good} = require('./goods')

class CD extends Good{
  constructor(options = {}) {
    super ({ title: options.title }),
    this.runtime = options.runtime;
    this.artist = options.artist;
    this.label = options.label;
  }

  returnCD() {
    super.returnGood();
  }
}
module.exports = { CD };
