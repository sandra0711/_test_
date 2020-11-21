const { Library } = require('./Library.js')

class MediaKiosk extends Library {
  constructor(options = {}) {
    super({
      name: options.name,
      location: options.location,
      items: options.items
    });
  }

  isDamaged() {
    return this.damaged;
  }

  recordDamage() {
    this.damaged = true;
  }

  repair() {
    this.damaged = false;
  }

}

module.exports = { MediaKiosk };
