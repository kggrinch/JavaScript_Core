// String Object - allows you to manipulate and work with text (strings)

let userName = "Hello World!";

// String methods

// charAt
// Returns the char at specific index
console.log(userName.charAt(0)); // H

// indexOf
// Returns the index of the first occurrence of specified character. (case sensitive)
console.log(userName.indexOf(`o`)); // 4

// lastIndexOf
// Returns the index of the last occurrence of specified character. (case sensitive)
console.log(userName.lastIndexOf(`o`)); // 7

// length
// Returns the number of characters in the string. This includes spaces
console.log(userName.length); // 12 

// String array
// Can access the individual characters as if it were an array
console.log(userName[2]); // l

// Replace
console.log(userName.replace(`World`, `Bob`));

// String slicing
// substring
// Returns substring [first_index, last_index] - first_index included | last_index not included
console.log(userName.substring(0, 5)); // Hello 
console.log(userName.substring(6)); // World!

// Split
// Returns an array of strings formed by splitting the string into substrings. The given delimiter separates substrings.
let words = userName.split(" ");
console.log(words[0]); // Hello

let char = userName.split("");
console.log(char[3]); // l

let str_copy = userName.split();
console.log(str_copy);


// toLowerCase()
console.log(userName.toLowerCase());

// toUpperCase()
console.log(userName.toUpperCase());

// trim()
// Returns the string with leading and trailing whitespaces removed
console.log(userName.trim());