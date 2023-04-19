"use strict"

function showMultiplicationTable(input){
   for (let m = 1; m <= 10; m++) {
       console.log(`${input} * ${m} = ${input * m}`)
   }
}


function tenRandomNumbers() {
    for (let i = 1; i < 10; i++) {
        let number = Math.floor(Math.random() * (200 - 20 + 1)) + 20
        if (number % 2 === 0){
            console.log(number + " is even");
        }
        else {
            console.log(number + " is odd");
        }


    }
}

function numberPyramid(){
    let height = "";
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < i; j++){
            height += i;
        }
        height += "\n";
    }
    console.log(height);
}

function fives(){
    let hunnerd = 100
    for (let i = 0; i < 20; i++){
        console.log(hunnerd - (i * 5));
    }
}
