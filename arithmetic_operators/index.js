// Arithmetic operators - operands (values, variables, ect.)
//                        operators (+, -, /, *, %)
//
let x = 2;
let y = 4;
let result;

result = x + y;
console.log(`2 + 4 = ${result}`);

result = x - y;
console.log(`2 - 4 = ${result}`);

result = x * y;
console.log(`2 * 4 = ${result}`);

result = x / y; // returns a float
console.log(`2 / 4 = ${result}`);

result = x ** 2;
console.log(`2 ** 4 = ${result}`);

result = x % y;
console.log(`2 % 4 = ${result}`);


/*
 Augmented assignment operators
*/
let value = 2;
console.log(`value: ${value}`);

value += 1;
console.log(`value += 1: ${value}`);

value -= 1;
console.log(`value -= 1: ${value}`);

value *= 2;
console.log(`value *= 2: ${value}`);

value /= 2;
console.log(`value /= 2: ${value}`);

value %= 2;
console.log(`value %= 3: ${value}`);

/*
    Increment/decrement by 1 operators 
*/
let index = 0;
console.log(`index: ${index}`);

index++;
console.log(`index++: ${index}`);

index--;
console.log(`index--: ${index}`);


/*
    Operator Precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

// 1 + 2 * 3 ^ (1)
// 1 + 6
// 7
let result2 = 1 + 2 * 3 ** (2 - 1);
console.log(`1 + 2 * 3 ** (2 - 1) = ${result2}`);

// Math library functions
// Math Object Library - built-in object that provides a collection of properties and methods


// Math Functions

const PI = Math.PI;
const E = Math.E;

console.log(PI);
console.log(E);

x = 3.21;
y = 2;
z = x;

// Rounding
z = Math.round(x);
console.log(z);

// Floor 
z = x;
z = Math.floor(z);
console.log(z);

// Ceil
z = x;
z = Math.ceil(z);
console.log(z);

// trunc (remove decimal portions)
z = x;
z = Math.trunc(z);
console.log(z);

// Power
z = Math.pow(x, y);
console.log(z);

// Square Root
z = Math.sqrt(z);
console.log(z);

// Log
z = Math.log(x);
console.log(z);

// Cos & Sin & tan
z = Math.cos(2 * PI);
console.log(z);

z = Math.sin(PI / 2);
console.log(z);

z = Math.tan(PI);
console.log(z);

z = Math.abs(z);
console.log(z);

// Sign of a number
console.log(Math.sign(-5)); // Output: -1
console.log(Math.sign(8));  // Output: 1
console.log(Math.sign(0));  // Output: 0

// Max/Min
x = 1;
y = 2;
z = 3;
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);
console.log(max);
console.log(min);


// Random number generator
const upper_range = 100;
const lower_range = 50;

// Without floor and upper_range/lower_range we will always get a random long decimal value
let random = Math.floor(Math.random() * (upper_range - lower_range)) + lower_range;
console.log(random);






 



