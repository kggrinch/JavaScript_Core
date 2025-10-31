// Arithmetic operators - operands (values, variables, ect.)
//                        operators (+, -, /, *, %)

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


