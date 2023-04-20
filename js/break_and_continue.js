"use strict"

let skip;
    while (true){
        skip = prompt("Please enter an odd number between 1 and 50");
        if (skip>= 1 && skip <= 50 && skip% 2 !== 0) {
        break;
    }
}

console.log(`Number to skip is: ${skip}`);

for (let i = 1; i <= 50; i += 2) {
    if (i === parseInt(userInput)) {
        console.log("Yikes! Skipping number: " + skip);
        continue;
    }
    console.log("Here's another odd number: " + i);
}