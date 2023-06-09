"use strict";
// function seven(){
// 	return 7;
// }
// console.log(seven());

//May 1, 2023
// function findFactors(number) {
// 	let factors = [];
// 	for(let i = 0; i <= number;  i++){
// 		if (typeof number !== "number"){
// 			return false
// 		}
// 		else if(number % i === 0) {
// 			factors.push(i);
// 		}
// 	} if (factors.length === 0){
// 		return false
// 	}
// 	console.log(factors);
// }
// //was not able to fix function before the 15 was up
// findFactors(6); // returns [1,2,3,6];
// findFactors(16); // returns [1,2,4,8,16];
// findFactors(0); // returns [];
// findFactors(true); // returns false;
// findFactors("13"); // returns false;
// findFactors([54,72,144]); // returns false;
// findFactors({value: 64}); // returns false;
// findFactors(); // returns false;

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
//
//
// console.log(countEs("Ease")); // returns 2;
// console.log(countEs("teleconference")); // returns 5;
// console.log(countEs("TOM")); // returns 0;
// console.log(countEs(true)); // returns false;
// console.log(countEs(['e', 'E'])); // returns false;
// console.log(countEs()); // returns false;

// 3 May 2023


// Write a function that takes in a string and returns true if the argument contains at least one instance of the letter 'e'. This should be case-insensitive. If the argument is not a string, or if the argument does not contain 'e' it should return false.
// function findE(string) {
// 	return countEs(string) > 0;
// }
//
// console.log(findE("apple")); // returns true
// console.log(findE(7)); // returns false
// console.log(findE("yam")); //returns false
// console.log(findE("Edd"));// returns true
// console.log(findE("Eagle")); // returns true
// console.log(findE("")); // returns false
// console.log(findE(true)); // returns false

//4 May 2023
// Write a function named fizzBuzz that prints to the console the number 1-100. If the number is divisible by 3, print fizz instead of the number. If the number is divisible by 5, print buzz. If the number is divisible by both 3 and 5, print fizzBuzz.
//
// function fizzBuzz(){
// 	let number = Math.floor(Math.random() * 100) + 1
// 	if (number % 3 === 0 && number % 5 === 0){
// 		console.log("fizzBuzz");
// 	}
// 	else if (number % 3 ===0  && number % 5 !== 0){
// 		console.log("fizz");
// 	}
// 	else if (number % 5 === 0 && number % 3 !== 0){
// 		console.log("buzz");
// 	}
// 	else console.log("neither fizz nor buzz")
// }

// function fizzBuzz(){
// 	for (let i = 1; i <= 100; i++){
// 		if (i % 3 === 0 && i % 5 === 0){
// 			console.log("fizzBuzz");
// 		}
// 		else if (i % 3 ===0  && i % 5 !== 0){
// 			console.log("fizz");
// 		}
// 		else if (i % 5 === 0 && i % 3 !== 0){
// 			console.log("buzz");
// 		}
// 		else console.log(i);
// 	}
// }

// function squares() {
// 	let x = 2;
// 	do {
// 		console.log(x);
// 		x = x ** 2;
// 	} while (x < 1000000);
// }
// Write a function that takes in an array of numbers and returns all of the numbers added together (We'll be assuming that only arrays are going to be used with this function).


//10 May 2023
// function addEmUp(array) {
// 	let total = 0;
// 	for(let i = 0; i < array.length; i += 1){
// 		total += array[i];
// 	}
// 	return total;
// }
//
// console.log(addEmUp([2,6,19])); // returns 27
// console.log(addEmUp([-99, 180, -5])); // returns 76
// console.log(addEmUp([44,10,7])); // returns 61
// console.log(addEmUp([-100])); // returns -100
// console.log(addEmUp([1,2,3,4,5,6,7,8,9,10])); // returns 55
// console.log(addEmUp([-13, -92, -3500])) // returns -3605

//11 May 2023

// Write a function that takes in a string and returns an object describing the string. The object should have a string property that contains the original string, a numberOfEs property that contains a count of the number of e's in the string (case-insensitive), and a isEvenLength property that contains a boolean for whether the string's length is even or not.

// function isEvenLength(string){
// 	if (string.length % 2 === 0){
// 		return true;
// 	}
// 	else return false;
// }

// function explainString(string){
// 	let info = [typeof(string), countEs(string), isEvenLength(string)]
// 	return info;
// }


//David's Solution
// function explainString(str){
// 	return {
// 		string: str,
// 		numberOfEs: countEs(str),
// 		isEvenLength: str.length % 2 === 0
// 	}
// }
//
//
//
// console.log(explainString("cheese")) // returns {string: "cheese", numberOfEs: 3, isEvenLength: true}
// console.log(explainString("dog")) // returns {string: "dog", numberOfEs: 0, isEvenLength: false}

// Write a function that takes in an array of objects and returns an array containing all of the names from the original array.

const hamsters = [
	{
		name: "Hamtaro",
		heightInMM: 86,
		fur: ['orange', 'white'],
		gender: "male",
		dateOfBirth: "August 6"
	} , {
		name: "Bijou",
		heightInMM: 75,
		fur: ['white'],
		gender: "female",
		dateOfBirth: "July 10"
	} , {
		name: "Oxnard",
		heightInMM: 100,
		fur: ['grey', 'white'],
		gender: "male",
		dateOfBirth: "May 3"
	} , {
		name: "Boss",
		heightInMM: 120,
		fur: ['brown', 'white'],
		gender: "male",
		dateOfBirth: "September 21"
	} , {
		name: "Snoozer",
		heightInMM: 85,
		fur: ['brown', 'white', "pink"],
		gender: "male",
		dateOfBirth: "January 14"
	}
];

//12 May 2023
// function extractNames(arr) {
// 	var names = [];
// 	for  (let i = 0; i < hamsters.length; ++i)
// 		names.push(hamsters[i].name);
// 	return names;
// }
//
// console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];
//
// //15 May 2023
//
// // Write a function that takes in an array of objects and returns the object with the largest heightInMM property
//
// const getTallest = function(arr){
// 	let tallest = {heightInMM: 0};
// 	arr.forEach(function (obj){
// 		if (obj.heightInMM > tallest.heightInMM){
// 			tallest = obj;
// 		}
// 	});
// 	return tallest;
// }
//
// console.log(getTallest(hamsters)); // returns {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"}
// console.log(getTallest(hamsters));



// Write a function that takes in an array of objects and returns an array of the objects from the array that only have one fur color.

// function singleFurColor(objArr){
// 	let arr = [];
//
// 	objArr.forEach(function(obj){
// 		if(obj.fur.length === 1){
// 			arr.push(obj);
// 		}
// 	});
//
// 	return arr;
// }
//
// console.log(singleFurColor(hamsters)); // returns [{name: "Bijou", heightInMM: 75, fur: ['white'], gender: "female", dateOfBirth: "July 10"}];

// Write a function that takes in an array of objects and returns the object with the most colors in the fur array.

// function mostColorful(hamsters){
//  	let colors = {fur: 0};
//  	arr.forEach(function (obj){
//  		if (obj.fur > tallest.heightInMM){
//  			tallest = obj;
//  		}
//  	});
//  	return tallest;
// }
//
// console.log(mostColorful(hamsters)); // returns {name: "Snoozer", heightInMM: 85, fur: ['brown', 'white', "pink"], gender: "male", dateOfBirth: "January 14"};

// 18 May 2023

// Write a JavaScript function that takes in a number and returns an object with the following fields: number, which will contain the original number; evenOrOdd, which will contain a string ("even" or "odd") as to whether the value is even or odd; factors, an array of numbers that are evenly divisible within the number passed; and numberOfDigits, a number counting the number of digits with the number passed.

function describeNumber(number) {

	let evenOrOdd = [];
	let factors = [];
	let numberOfDigits = number.toString();

	var numberInfo = {
		number: number,
		evenOrOdd: evenOrOdd,
		Factors: factors,
		numberOfDigits: numberOfDigits.length
	}

	for(let i = 1; i <= number; i++) {
		if(number % i == 0) {
			factors.push(i);
		}
	}

	if (number % 2 === 0) {
		evenOrOdd.push("even");
	} else evenOrOdd.push("odd")

	return numberInfo;
}

console.log(describeNumber(19)); // returns {number: 19, evenOrOdd: "odd", factors: [1,19], numberOfDigits: 2};
console.log(describeNumber(2)); // returns {number: 2, evenOrOdd: "even", factors: [1,2], numberOfDigits: 1};

//19 May 2023

// Write a JavaScript function that takes in an array of numbers and returns an array of the same length where all of the numbers have been replaced with the number multiplied by 3.

function multiplyElementsByThree(array) {
	let newArray = [];
	for (let i = 0; i < array.length; i++){
		newArray.push((array[i]) * 3)
	}
	return newArray;
}

console.log(multiplyElementsByThree([3,4,5])); // returns [9, 12, 15];
console.log(multiplyElementsByThree([12,8])); // returns [36, 24];
console.log(multiplyElementsByThree([100])); // returns [300];
console.log(multiplyElementsByThree([15, 9, 33, 16, 50])); // returns [45, 27, 99, 48, 150];