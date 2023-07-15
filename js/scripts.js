window.addEventListener("load", function() {
  function Pizza(size, topping1, topping2, topping3) {
    this.pizzaSize = size;
    this.t1 = topping1;
    this.t2 = topping2;
    this.t3 = topping3;
  }

  var form = document.forms["pizzaform"];
        var sizeInput = form.elements["size"];
        var t1Input = form.elements["t1"];
        var t2Input = form.elements["t2"];
        var t3Input = form.elements["t3"];

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var size = sizeInnput.value;
    var topping1 = t1Input.value;
    var topping2 = t2Input.value;
    var topping3 = t3Input.value;
  });
});