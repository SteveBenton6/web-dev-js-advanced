// Functions & Default Parameters [Day 54]

function greetUser(greetingPrefix, userName = "user") {
  console.log(`${greetingPrefix} there, ${userName}!`);
}

greetUser("Hi", "Steve");
greetUser("Hello");

// Rest Parameters & The Spread Operator [Day 54]

function sumUp(numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}
console.log(sumUp([1, 5, 10, 11]));

// Using rest parameters

function sumUpR(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}
console.log(sumUpR(1, 5, 10, 11, 20));

// Using spread operator

const inputNumbers = [1, 5, 10, 11, 23];
console.log(sumUpR(...inputNumbers));

// Displaying the function object

console.dir(sumUpR);
