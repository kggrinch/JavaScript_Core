// Type Conversions - Change the datatype of a value to another (strings, ints, bools) ect

// This Appends 1 to the end of the string
let age = "25";
age += 1;

console.log(age); // Output: 251

// Proper conversion (String = Number)
let age2 = "25";
age2 = Number(age2);
age2 += 1;
console.log(age2); // Output: 26

let x = "Pizza";
let y = "Pizza";
let z = "Pizza";

x = Number(x);
y = String(y);
z = Boolean(z)
console.log(x, typeof(x)); // Output: NaN (not a number) 'number'
console.log(y, typeof(y)); // output: pizza string 'string'
console.log(z, typeof(z)); // Output: True 'boolean' (as long as there is some value inside the boolean conversion the boolean will be true)

x = "0";
y = "0";
z = "0";

x = Number(x);
y = String(y);
z = Boolean(z)
console.log(x, typeof(x)); // Output: 0 'number'
console.log(y, typeof(y)); // output: 0'string'
console.log(z, typeof(z)); // Output: True 'boolean' (as long as there is some value inside the boolean conversion the boolean will be true)


x = "";
y = "";
z = ""; 

x = Number(x);
y = String(y);
z = Boolean(z); // good to check if user entered something
console.log(x, typeof(x)); // Output: 0 'number'
console.log(y, typeof(y)); // output: '' 'string'
console.log(z, typeof(z)); // Output: False 'boolean' (Nothing inside boolean so its false)

let a;
let b;
let c;
a = Number(a);
b = String(b);
c = Boolean(c); // good to check if user entered something
console.log(a, typeof(a)); // Output: NaN (not a number) 'number'
console.log(b, typeof(b)); // output: undefined 'string'
console.log(c, typeof(c)); // Output: False 'boolean' (Nothing inside boolean so its false)