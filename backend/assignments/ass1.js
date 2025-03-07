/*
Complete the following tasks using JavaScript.
Do not use any advanced methods beyond what you have learned (loops, conditionals, and basic array methods).

Task 1: Working with Arrays
Create an array called numbers containing the numbers from 1 to 10.
Use a loop to print each number in the numbers array.
*/

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
}


/*
Task 2: Filtering Even Numbers
Create a function called getEvenNumbers that takes an array as a parameter.
Inside the function, use the filter method to return only the even numbers from the array.
Call the function with the numbers array and print the result.
*/
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

const evenNumbers = getEvenNumbers(numArray);
console.log(evenNumbers);


/*
Task 3: Doubling Numbers
Create a function called doubleNumbers that takes an array as a parameter.
Use the map method to return a new array where each number is doubled.
Call the function with the numbers array and print the result.
*/

function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

const doubledNumbers = doubleNumbers(numArray);
console.log(doubledNumbers);


/*
Task 4: Adding and Removing Elements
Create an empty array called fruits.
Use the push method to add "apple", "banana", and "orange" to the array.
Remove the last fruit using the pop method.
Print the fruits array.
*/

const fruits = [];
fruits.push("apple", "banana", "orange");
console.log(fruits.pop());
console.log(fruits);


/*
Task 5: Counting Positive Numbers
Create a function called countPositiveNumbers that takes an array as input.
Use a loop and a conditional statement to count how many numbers in the array are greater than 0.
Return the count.
Test the function with [-2, 5, -10, 8, 0, 3] and print the result.
*/

function countPositiveNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}

const numbersToCount = [-2, 5, -10, 8, 0, 3];
console.log(countPositiveNumbers(numbersToCount));