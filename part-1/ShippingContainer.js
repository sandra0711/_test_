const { Box } = require('./Box.js');

class ShippingContainer {
  constructor({destination, maxWeight, maxBoxes, boxes = []}) {
    this.destination = destination,
    this.boxes = boxes,
    this.maxWeight = maxWeight,
    this.maxBoxes = maxBoxes
  }
  currentWeight() {
    return this.boxes.reduce((weightTotal, el) => { return weightTotal += el.weight }, 0);
  }
  boxesCount() {
    return this.boxes.length;
  }
  addBox(newBox) {
    if (this.currentWeight() + newBox.weight <= this.maxWeight && this.boxes.length < this.maxBoxes ) {
      this.boxes.push(newBox);
      return true;
    }
    return false;
  }
}

module.exports = { ShippingContainer };
