window.addEventListener('load', function() {
  function Pizza(size, topping1, topping2, topping3) {
    this.pizzaSize = size;
    this.t1 = topping1;
    this.t2 = topping2;
    this.t3 = topping3;
  }

  Pizza.prototype.getPizzaDetails = function() {
    return "So you ordered the " + this.pizzaSize + ", with " + this.t1 + ", " + this.t2 + ", and " + this.t3 + ".";
  };

  Pizza.prototype.getPizzaPrice = function() {
    const sizePrice = {
      small: 8,
      medium: 10,
      large: 12,
    };

    const toppingPrice = {
      cheese: 1.5,
      pepperoni: 2,
      olives: 1.25,
    };

    const totalPrice =
      parseFloat(sizePrice[this.pizzaSize.toLowerCase()]) +
      parseFloat(toppingPrice[this.t1.toLowerCase()]) +
      parseFloat(toppingPrice[this.t2.toLowerCase()]) +
      parseFloat(toppingPrice[this.t3.toLowerCase()]);

    return "That'll be $" + totalPrice.toFixed(2) + ". BUY THIS PIZZZAA, IT'S LIKE ALREAADY DONE!";
  };

  document.getElementById('pizzaform').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var form = event.target;
    var sizeInput = form.elements['size'];
    var t1Input = form.elements['t1'];
    var t2Input = form.elements['t2'];
    var t3Input = form.elements['t3'];
    var resultDiv = document.getElementById('result');

    var size = sizeInput.value;
    var topping1 = t1Input.value;
    var topping2 = t2Input.value;
    var topping3 = t3Input.value;

    var pizza = new Pizza(size, topping1, topping2, topping3);

    var pizzaDetails = pizza.getPizzaDetails();
    var totalPrice = pizza.getPizzaPrice();

    resultDiv.innerHTML = '<p>' + pizzaDetails + '</p><p>' + totalPrice + '</p>';
  });
});
