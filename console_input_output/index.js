/*
    Output - Outputting to console
*/

console.log("Hello, world!");
console.log(42);                    
console.log(true);           

let first_name = "Bob";
let age = 25;


// String Interpolation (Template Literals) - best option
//
console.log(`My name is ${first_name} and I am ${age} years old.`);

// Original (similar to c++)
console.log("Name:", first_name, "Age:", age);

// Formatted (dated)
console.log("%s is %d years old.", first_name, 21)

// Styled Console Output (Browser Only)
console.log("%cHello Stylish World!", "color: blue; font-size: 20px;");

// Grouping - group a console log output
console.group(`User Info`);
console.log(`Name: ${first_name}`);
console.log(`Age: ${age}`);
console.groupEnd();

// Debugging Helpers
console.warn("This is a warning!");
console.error("This is an error!");
console.info("Some extra info");


/*
    Input - Inputting from console
*/

// Option 1) Window Prompt
let username = window.prompt(`Whats your username?`);
console.log(`username: ${username}`);

// Option 2) HTML textbox
let username2;
document.getElementById(`my_submit`).onclick = function()
{
    username2 = document.getElementById(`my_text`).value;
    console.log(`username2: ${username2}`);
    document.getElementById(`my_h1`).textContent = `Welcome ${username2}`;
}







