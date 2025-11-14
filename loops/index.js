// While Loops - while condition is true loop
console.log("While Loop");
// while (condition) {
//    body
// }

let x = 0;
while(x <= 5)
{
    console.log(x);
    x++;
}


// Do-while loops - do condition first if while condition true loop
console.log("Do-while Loop");
// do {
//    body
// } while (condition);

x = 0;
do
{
    console.log(x);
    x++;
}
while(x <= 5)

// For Loop - Controlled while loop
console.log("For Loop");
// for (initialization; condition; finalExpression) {
//    body
// }

for(let i = 0; i <= 5; i++)
{
    console.log(i);
}


// Break Statement - exits out of loop if reached
console.log(`Break Statements`);
for(let i = 0; i <= 5; i++)
{
    if(i == 3) break;
    console.log(i);
}

// Continue Statements - skips to next iteration
console.log(`Continue Statements`);
for(let i = 0; i <= 5; i++)
{
    if(i == 3) continue;
    console.log(i);
}