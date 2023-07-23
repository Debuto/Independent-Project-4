#Project Name: Pizza Parlor (Pizza Time!)

### By: **Deante Cacatian**

## To Clone this repository:

1. Go to the main page
2. Click on the CODE button
3. Copy the URL to the repository
4. Open Git Bash (or whichever terminal is appropiate for your OS)
5. Change your directory to where you want to add the cloned remote repository (use the commannd cd ex. \fie_path\destination)
6. Type this in Git Bash: git clone https://github.com/Debuto/Independent-Project-2.git
7. Press ENTER output should look similiar to below:

$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```bash
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
<br>

### Followed by Application setup instructions: <br>

---

Download a zip or clone repository in desired local directory. Open with VScode or appropiate software. Run with Live server, the result should be a HTML file with a survey to recommend a language to learn for coding. 

--- 
<br>

## Description:

This is a website for a pizza parlor. You're able to order atleast 3 toppings and choose a size for your pizza, and no more!

*This is Deante's 4th portfolio project with Epicodus!
Epicodus and coding partners from weekly lessons for knowledge of HTML
This HTML will display a simple webpage*

Link to site on GitHub Pages: https://github.com/Debuto/Independent-Project-4.git

<br>

---

# Technologies used: 

* VScode
* Javasript
* HTML
* CSS
* Git Bash
* Github

<br>

Tests:

Describe: Pizza() <br><br>
Test: "It should return a Pizza object with up to three properties for toppings and size. After 3 choices are selected will return string with pizza ordered and price!" <br>

---
Code: <br><br>
```js
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
  ```

Expected Output:  
```js
const Pizza = require('./scripts');

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

```

---

# Known bugs:

Issue with test.js, previous tests were successful before window.addeventlistener. Unable ton find dir in OneDrive. Possible Onedrive issue...

Other than that HTML and js work as intended..

---

#### Copyright (c) <2023> <Deante Cacatian>

- Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

- The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.