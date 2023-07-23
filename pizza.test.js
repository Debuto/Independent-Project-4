const Pizza = require('./js/scripts');

test('Creating a new Pizza object', () => {
  const pizza = new Pizza('Large', 'Pepperoni', 'Mushrooms', 'Olives');

  expect(pizza.pizzaSize).toBe('Large');
  expect(pizza.t1).toBe('Pepperoni');
  expect(pizza.t2).toBe('Mushrooms');
  expect(pizza.t3).toBe('Olives');
});

test('Pizza.getPizzaDetails()', () => {
  const pizza = new Pizza('Large', 'Pepperoni', 'Mushrooms', 'Olives');

  expect(pizza.getPizzaDetails()).toBe('So you ordered the Large, with the toppings: Pepperoni, Mushrooms, and Olives.');
});
