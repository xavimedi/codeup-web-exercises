"use strict"
console.log("hello from external JavaScript!")

alert("Welcome to my website!")

    const userInput = prompt("What\'s your favorite color?" );
alert(userInput + " is my favorite color too!");
alert("I need to ask you some questions, okay?")
alert("Keep in mind, renting a movie costs $3 per day per movie, cool?")
    const movieInputLittleMermaid = prompt("How many days did you rent The Little Mermaid?")
    const movieInputBrotherBear = prompt("How many did you rent Brother Bear?")
    const movieInputHercules = prompt("How many days did you rent Hercules?")
    const totalMovieCost = ((Number(movieInputLittleMermaid)) + (Number(movieInputHercules)) + (Number(movieInputBrotherBear))) * 3
alert("You owe Blockbuster $" + totalMovieCost)

alert("Alright, let\'s go over your contracting work.")
    const googlePay = prompt("How much did Google pay you per hour?")
    const googleHours = prompt("How many hours did you work for Google?")
    const facebookPay = prompt("How much did Facebook pay you per hour?")
    const facebookHours = prompt("How many hours did you work for Facebook?")
    const amazonPay = prompt("How much did Amazon pay you per hour?")
    const amazonHours = prompt("How many hours did you work for Amazon?")
    const totalPay = ((googlePay) * (googleHours)) + ((facebookPay * facebookHours)) + ((amazonPay * amazonHours))
alert("Wow! You made $" + totalPay + "!")

alert("Let's check if you can take that Codeup Class.")
    let studentAvailability = confirm("Are you free 9AM to 5PM, Monday to Friday?")
    let classOpen = confirm("Does the class have an open spot?")
    let canAttend = studentAvailability && classOpen
alert("It is " + canAttend + " that you can attend!")

alert("I see you have some of my discounted good and services in your shopping cart.")
    let membership = confirm("Are you a member of my store?")
    let custItems = prompt("Okay, and how many items are you attempting to purchase?")
    let offer = confirm("Is the discount still valid?")
function grocery(offer, membership, custItems){
    if(offer === true && (membership === true || custItems >= 2)) {
        alert("Alright, that will be $56.89, please. Cash or card?")
    }
    else{
        return alert("Exit the premises immediately.")
    }
}
grocery(offer, membership, custItems)
