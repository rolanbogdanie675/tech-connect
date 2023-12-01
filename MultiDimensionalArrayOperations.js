/*
   Filename: MultiDimensionalArrayOperations.js

   Description: This code demonstrates various sophisticated operations on multi-dimensional arrays.

   Author: [Your Name]

   Date: [Current Date]
*/

// Utility function to generate a random integer within a range
function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to initialize a multi-dimensional array with random numbers
function initializeArray(rows, columns) {
   let arr = [];
   for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < columns; j++) {
         arr[i].push(getRandomInt(-100, 100));
      }
   }
   return arr;
}

// Function to print a multi-dimensional array to the console
function printArray(arr) {
   for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
   }
}

// Function to find the sum of all elements in a multi-dimensional array
function calculateSum(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
         sum += arr[i][j];
      }
   }
   return sum;
}

// Function to find the maximum element in a multi-dimensional array
function findMax(arr) {
   let max = arr[0][0];
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
         if (arr[i][j] > max) {
            max = arr[i][j];
         }
      }
   }
   return max;
}

// Function to multiply two multi-dimensional arrays
function multiplyArrays(arr1, arr2) {
   let result = [];
   for (let i = 0; i < arr1.length; i++) {
      result[i] = [];
      for (let j = 0; j < arr2[0].length; j++) {
         let sum = 0;
         for (let k = 0; k < arr1[0].length; k++) {
            sum += arr1[i][k] * arr2[k][j];
         }
         result[i][j] = sum;
      }
   }
   return result;
}

// Main code execution
const rows = 5;
const columns = 5;

// Initialize two multi-dimensional arrays
console.log("Initializing arrays...");
const array1 = initializeArray(rows, columns);
const array2 = initializeArray(rows, columns);

console.log("Array 1:");
printArray(array1);
console.log("Array 2:");
printArray(array2);

// Calculate and print the sum of both arrays
console.log("Calculating the sum of arrays...");
const sum = calculateSum(array1) + calculateSum(array2);
console.log("The sum of both arrays is:", sum);

// Find and print the maximum element in both arrays
console.log("Finding the maximum element in arrays...");
const max1 = findMax(array1);
const max2 = findMax(array2);
console.log("Max in Array 1:", max1);
console.log("Max in Array 2:", max2);

// Multiply and print the result of the two arrays
console.log("Multiplying arrays...");
const multipliedArray = multiplyArrays(array1, array2);
console.log("Result of array multiplication:");
printArray(multipliedArray);

// Additional sophisticated operations can be added as per requirement

// End of the code