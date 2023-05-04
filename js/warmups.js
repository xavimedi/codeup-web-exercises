"use strict";
function seven(){
	return 7;
}
console.log(seven());

//May 1, 2023
function findFactors(number) {
	let factors = [];
	for(let i = 0; i <= number;  i++){
		if (typeof number !== "number"){
			return false
		}
		else if(number % i === 0) {
			factors.push(i);
		}
	} if (factors.length === 0){
		return false
	}
	console.log(factors);
}
//was not able to fix function before the 15 was up
findFactors(6); // returns [1,2,3,6];
findFactors(16); // returns [1,2,4,8,16];
findFactors(0); // returns [];
findFactors(true); // returns false;
findFactors("13"); // returns false;
findFactors([54,72,144]); // returns false;
findFactors({value: 64}); // returns false;
findFactors(); // returns false;

// David's Solution
//
// function findFactors(num) {
// 	if (typeof num === "number" && !isNaN(num)){
// 		let bucket = [];
// 		for (let i = 1; i <= num; i++){
// 			if (num % i === 0){
// 				bucket.push(i);
// 			}
// 		}
// 		return bucket;
// 	} else {
// 		return false
// 	}
// }

// 2 May 2023
// Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case-insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.

function countEs(string) {
	let count = 0;
	if (typeof string === "string"){
		for (let i = 0; i < string.length; i++) {
			if (string.toLowerCase()[i] === "e") {
				count++;
			}
		}
		return count;
		}
	else return false;
	}


console.log(countEs("Ease")); // returns 2;
console.log(countEs("teleconference")); // returns 5;
console.log(countEs("TOM")); // returns 0;
console.log(countEs(true)); // returns false;
console.log(countEs(['e', 'E'])); // returns false;
console.log(countEs()); // returns false;

// 3 May 2023


// Write a function that takes in a string and returns true if the argument contains at least one instance of the letter 'e'. This should be case-insensitive. If the argument is not a string, or if the argument does not contain 'e' it should return false.
function findE(string) {
	return countEs(string) > 0;
}

console.log(findE("apple")); // returns true
console.log(findE(7)); // returns false
console.log(findE("yam")); //returns false
console.log(findE("Edd"));// returns true
console.log(findE("Eagle")); // returns true
console.log(findE("")); // returns false
console.log(findE(true)); // returns false

//4 May 2023
// Write a function named fizzBuzz that prints to the console the number 1-100. If the number is divisible by 3, print fizz instead of the number. If the number is divisible by 5, print buzz. If the number is divisible by both 3 and 5, print fizzBuzz.

function fizzBuzz(){
	let number = Math.floor(Math.random() * 100) + 1
	if (number % 3 === 0 && number % 5 === 0){
		console.log("fizzBuzz");
	}
	else if (number % 3 ===0  && number % 5 !== 0){
		console.log("fizz");
	}
	else if (number % 5 === 0 && number % 3 !== 0){
		console.log("buzz");
	}
	else console.log("neither fizz nor buzz")
}