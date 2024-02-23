export class Burger {
  constructor(data) {
      this.id = this.id || Math.ceil(Math.random() * 100000)
      this.name = data.name
      this.price = data.price || 5.99
      this.hasCheese = data.hasCheese || true
      this.hasBacon = data.hasBacon || false
      this.hasPickles = data.hasPickles || false
      this.isDoubled = data.isDoubled || true
      // expand this model with things like ingredients and price
      // hasBacon?
  }
}