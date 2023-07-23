function Pizza(size, topping1, topping2, topping3) {
  this.pizzaSize = size;
  this.t1 = topping1;
  this.t2 = topping2;
  this.t3 = topping3;
}

Pizza.prototype.getPizzaDetails = function() {
  return "So you ordered the " + this.pizzaSize + ", with the toppings: " + this.t1 + ", " + this.t2 + ", and " + this.t3 + ".";
};

module.exports = Pizza;
