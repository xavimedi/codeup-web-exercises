"use strict"

function skipNumber(){
    let twennysem = 27
    console.log("Number to skip is: " + twennysem)
    for (let i = 1; i < 50; i++){
        if (i % 2 === 0) {
            continue;
        }
        if (i === twennysem){
            console.log("Yikes! skipping number " + twennysem);
        }
        else{
            console.log("Here's a different odd number: " + i)
        }
        if (i >= 49){
            break;
        }
    }
}
