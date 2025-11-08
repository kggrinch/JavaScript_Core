// Conditions - if a condition is true, execute some code

let age = 45;

// If/ifelse/else
if(age < 18)
{
    console.log("you are too young")
}
else if(age > 65)
{
    console.log("you are too old")
}
else
{
    console.log("You are allowed")
}


// Comparison operators

// Compare a number a number and a string, the string is first converted to a number and then compared.
// == Equality
console.log(2 == 2); // true
console.log("bat" == "bat"); // true
console.log(2 == "2"); // true

// != Inequality
console.log(2 != 3); // true
console.log("bat" != "zoo"); // true
console.log(2 != "3"); // true

// The identify operator performs strict equality. Two operands are strictly equal if the operands data types and values are equal.
// === Identity
console.log(2 === 2); // true
console.log("bat" === "bat"); // true
console.log(2 === "2"); // false

// !== Non-identity
console.log(2 !== 2); // false
console.log("bat" !== "bat"); // false
console.log(2 !== "2"); // true

// <  Less than
console.log(2 < 3); // true
console.log("bat" < "zoo") // true - when comparing strings js uses unicode values to compare characters. ex: "b" < "z" true because b has a smaller unicode value than z
console.log(2 < "3"); // true

// <= Less than or equal
console.log(2 <= 3); // true
console.log("charge" <= "chance"); // false - Both strings start with "cha" and are equal until the 4th character. The Unicode value for "r" is > "n", so "charge" <= "chance" is false.
console.log(2 <= "3"); // true

// > Greater than
console.log(3 > 2); // true
console.log("zoo" > "bat"); // true - when comparing strings js uses unicode values to compare characters. ex: "b" < "z" true because b has a smaller unicode value than z
console.log("3" > 2); // true

// >= Greater than or equal
console.log(3 >= 3); // true
console.log("charge" >= "chance"); // true - when comparing strings js uses unicode values to compare characters. ex: "b" < "z" true because b has a smaller unicode value than z
console.log("3" >= 3); // true

// Unicode - is a computing industry standard that assigns a unique number to characters in over one hundred different languages, 
// including multiple symbol sets and emoji. The Unicode numbers for capital A-Z range from 65 to 90, and lowercase a-z range from 97 to 122.


// Logical Operator
// && | AND | True if both sides are true
console.log(1 < 2 && 2 < 3); // true

// || | OR  | True if at least one side is true
console.log(1 < 2 || 2 < 0); // true

// !  | Not | True if expression is false
console.log(!(2 == 3)); // true


// Truthy and Falsy

// Truthy - A truthy value is a non-boolean value that evaluates to true in a boolean context.
// Examples:
// Non-zero numbers
if(32) console.log("true"); 

// Non-empty string
if("cat") console.log("true");

// Object variable
// if(myObject) console.log("true"); // object not defined so causes runtime error

// Array variable
// if(myArray) console.log("true"); // array not defined so causes runtime error

// Falsy - A falsy value is a non-boolean value that evaluates to false in a boolean context.
// Examples
// Zero
if(!0) console.log("false");

// Empty string
if(!"") console.log("false");

// Not a number
if(!NaN) console.log(`false`);

// Variable that has not been assigned a value
if(!undefined) console.log(`false`);

// No object value
if(!null) console.log(`false`);


// Ternary Operations
// Condition ? expression1 : expression2
let result = 5 > 3 ? 5 : 3;
console.log(result); // 5


// Switch Statements - alternative to writing multiple if-else statements
// Breaks - The break statement stops executing a case's statements and causes the statement immediately following the switch statement to execute. Omitting the break statement causes the next case's statements to execute, even though the case does not match.
// Example

let change = 10;
let coin;
switch(change)
{
    case 1:
        coin = `penny`;
        break;
    case 5:
        coin = `nickle`;
        break;
    case 10:
        coin = `dime`;
        break;
    case 25:
        coin = `quarter`
        break;
    default:
        coin = `undefined`;
        break;
}
console.log(coin);
