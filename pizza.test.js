const Pizza = require('./js/scripts');

test('Creating a new Pizza object', () => {
  const pizza = new Pizza('Large', 'Pepperoni', 'Cheese', 'Olives');

  expect(pizza.pizzaSize).toBe('Large');
  expect(pizza.t1).toBe('Pepperoni');
  expect(pizza.t2).toBe('Cheese');
  expect(pizza.t3).toBe('Olives');
});

test('Pizza.getPizzaDetails()', () => {
  const pizza = new Pizza('Large', 'Pepperoni', 'Cheese', 'Olives');

  expect(pizza.getPizzaDetails()).toBe('So you ordered the Large, with the toppings: Pepperoni, Cheese, and Olives.');
});

test('Pizza.getPizzaPrice()', () => {
  const pizza = new Pizza('Large', 'Pepperoni', 'Cheese', 'Olives');

  expect(pizza.getPizzaPrice()).toBe('Total Price: $16.50');
});
