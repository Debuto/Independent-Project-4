function Pizza(size, topping1, topping2, topping3) {
  this.pizzaSize = size;
  this.t1 = topping1;
  this.t2 = topping2;
  this.t3 = topping3;
}

Pizza.prototype.getPizzaDetails = function() {
  return "So you ordered the " + this.pizzaSize + ", with the toppings: " + this.t1 + ", " + this.t2 + ", and " + this.t3 + ".";
};

Pizza.prototype.getPizzaPrice = function() {
  const sizePrice = {
    small: 8,
    medium: 10,
    large: 12,
  };

  const toppingPrice = {
    cheese: 1,
    pepperoni: 2,
    olives: 1.5,
  };

  const totalPrice =
    parseFloat(sizePrice[this.pizzaSize.toLowerCase()]) +
    parseFloat(toppingPrice[this.t1.toLowerCase()]) +
    parseFloat(toppingPrice[this.t2.toLowerCase()]) +
    parseFloat(toppingPrice[this.t3.toLowerCase()]);

  return "Total Price: $" + totalPrice.toFixed(2);
};

module.exports = Pizza;
