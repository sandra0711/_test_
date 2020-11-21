const {Good} = require('./goods')
class VideoGame extends Good {
  constructor(options = {}) {
    super({ title: options.title }),
      this.platform = options.platform;
    this.developer = options.developer;
    this.genre = options.genre;
  }

  returnGame() {
    super.returnGood();
  }
}
module.exports = { VideoGame };
