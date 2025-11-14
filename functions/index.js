// Function Declaration - a named group of statements. (defined and reusable block of code) 
// Note: Declared function do not have an order, so you can call the function before its declared

// function functionName(parameter1, parameter2, ...) {
//     Statements to execute when function is called
// }

// Default Function
function add(x, y)
{
    console.log(x + y);
}

add(1, 2);


// Retuning Functions
function sum(x, y)
{
    return x + y;
}

let total = sum(1, 3);
console.log(total);


// Recursion
function factorial(x)
{
    if(x <= 1) return 1;
    return x * factorial(x - 1);
}

console.log(factorial(4));


// Function Expressions - Javascript functions may be assigned to a variable. (functions defined in values or variables). Can pass function expressions to other functions.
//                        This is similar to function pointers in c++
//                        A function expression is identical to a function declaration, except the function name is omitted.
// Note: A function expression cannot be used until after the variable is assigned. (has an order. functions must be declared first before assigned)
let display_sum = function(x, y, z)
{
    console.log(x + y + z);
}
display_sum(1, 2, 3);


// Examples of breaking a function down into cleaner expressions
// 1 (declared function)
function hello1() {console.log("Hello")};
setTimeout(hello1, 3000);

// 2 (expression function)
let hello2 = function() {console.log("Hello")};
setTimeout(hello2, 3000);

// 3 (expression function directly in the parameter)
setTimeout(function(){console.log("Hello")}, 3000);


// Arrow Functions - A anonymous function that uses an arrow => to create a compact function. 
// A concise way to write function expressions.  Good for simple functions that you use only once
// Note: Similar order rules as expression functions

// Single return expression Syntax
// (parameter1, parameter2, ...) => expression

// multiple statements.
// (parameter1, parameter2, ...) => { statements; }

// (Declared Function)
function hello3() {console.log(`Hello`)};

// (Function Expression)
let hello4 = function() {console.log("Hello")};

// (Arrow Function)
let hello5 = (name) => console.log(`Hello ${name}!`);

hello5("Bob");