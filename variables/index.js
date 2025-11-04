// Variables - A container that stores a value.


// Let - creates a variables that has scope features (best option if not const)
// const - creates a variable that has scope features but cannot be changed (best option for const values). Usually primitive data types are all capitalized when
//         when using const, but strings and objects dont follow this convention
// var - same as let but has weird scoping (not the best option. Use let instead)

// Undefined vs Null
//      undefined - a variable has been declared but not defined or assigned a value. Assigned a undefined object by default
//      null - nothing or no value. A value assigned when you want to specify something to have no value
let not_defined; // undefined object
let null_value = null; // null


const first_name = `Bob`; // string
let age = 20; // int
let gpa = 4.0 // float
let student = true; // boolean


// Console output
// automatically ends line
console.log(`This is: ${not_defined} type: ${typeof not_defined}`);
console.log(`This is: ${null_value} type: ${typeof null_value}`);
console.log(`Your first name is: ${first_name} type: ${typeof first_name}`);
console.log(`Your age is: ${age} type: ${typeof age}`);
console.log(`Your gpa is: ${gpa} type: ${typeof gpa}`);
console.log(`Are you a student: ${student} type: ${typeof student}`)

// Dynamic web changes exercise
document.getElementById(`p1`).textContent = `Your first name is: ${first_name} type: ${typeof first_name}`;
document.getElementById(`p2`).textContent = age;
document.getElementById(`p3`).textContent = (`Are you a student: ${student} type: ${typeof student}`)
