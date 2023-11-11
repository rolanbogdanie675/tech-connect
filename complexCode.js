// Filename: complexCode.js
// Purpose: Demonstrate a complex program in JavaScript

// Class definition for a Car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log("Engine started!");
  }

  drive(speed) {
    console.log(`Driving at ${speed} km/h`);
  }
}

// Function to calculate the sum of two numbers
function sum(a, b) {
  return a + b;
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Camry", 2021);

// Output information about the car
console.log(`My car is a ${myCar.make} ${myCar.model} (${myCar.year})`);

// Start the car's engine
myCar.startEngine();

// Drive the car at different speeds
myCar.drive(50);
myCar.drive(100);

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to calculate the average of an array of numbers
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// Calculate and output the average of the numbers array
const average = calculateAverage(numbers);
console.log(`The average of the numbers is: ${average}`);

// Define a recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Calculate and output the factorial of 5
const factorialValue = factorial(5);
console.log(`The factorial of 5 is: ${factorialValue}`);

// Class definition for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create instances of the Person class
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

// Output information about the persons
person1.introduce();
person2.introduce();

// Define a function to apply a discount to a price
function applyDiscount(price, discountPercentage) {
  return price - (price * discountPercentage) / 100;
}

// Calculate and output the discounted price
const originalPrice = 100;
const discountPercentage = 20;
const discountedPrice = applyDiscount(originalPrice, discountPercentage);
console.log(`The discounted price is: ${discountedPrice}`);

// More code...

// ... (at least 200 lines of code)

// End of the complexCode.js file