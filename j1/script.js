// Task1 - Array Initialization
// Create an array of 10 random integers between 1 and 100.

let number = [20, 25, 27, 22, 26, 23, 28, 24, 29, 21];
console.log(number);

//Task2 - Array Manipulation:
//push
let p1 = number.push(30);
console.log(number);
//pop
let p2 = number.pop();
console.log(number);
//unshift
let u = number.unshift(19);
console.log(number);
//shift
let s = number.shift();
console.log(number);

// Task3 - Array Sorting:
//Ascending order
number.sort((a, b) => a - b);
console.log(number);
//descending order
number.sort((a, b) => b - a);
console.log(number);

//Task4 - Array Iteration:
//forEach
number.forEach(num => console.log(num));

//Task5 - Array Transformation:
//map
let array1 = [2, 4, 6, 8, 12];
let squr = array1.map(sqr => sqr ** 2);
console.log(squr);

//Task6 - Array Filtering:
num2 = [12, 8, 3, 2, 5];

let even = num2.filter(ary => ary % 2 === 0);
console.log(even);

//Task7 - Array Reduction:
sum = num2.reduce((accum, current) => accum + current);
console.log(sum);



