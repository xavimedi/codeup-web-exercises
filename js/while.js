"use strict"

function whileLoop() {
    let i = 1;

    while (i < 65536) {
        i = i * 2
        console.log(i);
    }
}

//Ice cream problem


function sellCones() {
    let allCones = Math.floor(Math.random() * 50) + 50;
    let conesBought = Math.floor(Math.random() * 5) + 1;
    do {
        (allCones = (allCones - conesBought))
        console.log("Here's the " + conesBought + " ice cream cones you ordered!");
        allCones--
    } while (allCones > conesBought);
    if (allCones === 0){
        console.log("Yay! Sold all the cones!");
    }
    else if (allCones < conesBought){
        console.log("Sorry, I cannot sell you " + conesBought + " for I only have " + allCones + " left.")
    }
}
