const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
const script = fs.readFileSync(path.resolve(__dirname, './scripts.js'), 'utf-8');

const { window } = new JSDOM(html, { runScripts: 'dangerously' });
const { document } = window;

eval(script);

describe('Pizza', () => {
  test('getPizzaDetails should return the correct pizza details', () => {
    const pizza = new Pizza('medium', 'cheese', 'pepperoni', 'olives');
    expect(pizza.getPizzaDetails()).toBe('So you ordered the medium, with cheese, pepperoni, and olives.');
  });

  test('getPizzaPrice should return the correct pizza price', () => {
    const pizza = new Pizza('large', 'pepperoni', 'olives', 'cheese');
    expect(pizza.getPizzaPrice()).toBe("That'll be $15.25. BUY THIS PIZZZAA, IT'S LIKE ALREAADY DONE!");
  });
});

describe('Form submission', () => {
  test('submitting the form should display pizza details and total price', () => {
    const form = document.getElementById('pizzaform');

    form.elements['size'].value = 'large';
    form.elements['t1'].value = 'cheese';
    form.elements['t2'].value = 'pepperoni';
    form.elements['t3'].value = 'olives';

    const event = new window.Event('submit');
    form.dispatchEvent(event);

    const resultDiv = document.getElementById('result');

    const expectedDetails = 'So you ordered the large, with cheese, pepperoni, and olives.';
    const expectedPrice = "That'll be $15.25. BUY THIS PIZZZAA, IT'S LIKE ALREAADY DONE!";
    expect(resultDiv.innerHTML).toBe('<p>' + expectedDetails + '</p><p>' + expectedPrice + '</p>');
  });
});
