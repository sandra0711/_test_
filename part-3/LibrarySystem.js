class LibrarySystem {
  constructor(options = {}) {
    this.name = options.name;
    this.libraries = options.libraries || [];
  }

  items() {
    // существует метод Array.flatMap() как альтернатива, но он пока экспериментальный
    return this.libraries.reduce((acc, x) => acc.concat(x.items), []);
  }

  availableItems() {
    return this.items().filter((item) => item.isAvailable() && !item.isDamaged());
  }

  unavailableItems() {
    return this.items().filter((item) => !this.availableItems().includes(item));
  }
}

module.exports = { LibrarySystem };
