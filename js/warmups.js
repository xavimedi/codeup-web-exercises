"use strict";
function seven(){
	return 7;
}
console.log(seven());

//May 1 2023
function findFactors(number) {
	let factors = [];
	for(let i = 0; i <= number;  i++){
		if(number % i == 0){
			factors.push(i);
		}
	}
console.log(factors);
}

findFactors(6); // returns [1,2,3,6];
findFactors(16); // returns [1,2,4,8,16];
findFactors(0); // returns [];
findFactors(true); // returns false;
findFactors("13"); // returns false;
findFactors([54,72,144]); // returns false;
findFactors({value: 64}); // returns false;
findFactors(); // returns false;