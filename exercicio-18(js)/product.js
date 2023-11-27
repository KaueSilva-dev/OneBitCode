class product {
  constructor(name, description, price, inStock) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = inStock;
  }

  addStock(quantityEntryStock) {
    this.inStock += quantityEntryStock;
  }

  calculatesDiscount(setDescount) {
    const total = this.price*((100-setDescount)/100);
    parseFloat(total);
    return total;
  }
}

const marketFruit = new product('maca','fruta',145.99,200);
marketFruit.addStock(2)
console.log(marketFruit)
console.log(`Total =  R$ ${marketFruit.calculatesDiscount(50)}`);