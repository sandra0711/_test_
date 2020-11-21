class Good {
  constructor(options = {}) {
    this.title = options.title;
  }

  isAvailable() {
    return !this.isCheckedOut();
  }

  checkout() {
    this.checkedOut = true;
  }

  isCheckedOut() {
    return this.checkedOut;
  }

  returnGood() {
    this.checkedOut = false;
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
module.exports = { Good };
