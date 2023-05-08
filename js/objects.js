	"use strict";

	/**
	 * TODO:
	 * Create an object with firstName and lastName properties that are strings
	 * with your first and last name. Store this object in a variable named
	 * `person`.
	 *
	 * Example:
	 *  > console.log(person.firstName) // "Rick"
	 *  > console.log(person.lastName) // "Sanchez"
	 */

	let person = {
		firstName: "Xavier",
		lastName: "Medina",
		sayHello: function () {
			console.log("Hello from " + this.firstName + " " + this.lastName + "!");
		}

	}

	console.log(person.firstName);
	console.log(person.lastName);

	/**
	 * TODO:
	 * Add a sayHello method to the person object that returns a greeting using
	 * the firstName and lastName properties.
	 * console.log the returned message to check your work
	 *
	 * Example
	 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
	 */

	person.sayHello()

	/** TODO:
	 * HEB has an offer for the shoppers that buy products amounting to
	 * more than $200. If a shopper spends more than $200, they get a 12%
	 * discount. Write a JS program, using conditionals, that logs to the
	 * browser, how much Ryan, Cameron and George need to pay. We know that
	 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
	 * display a line with the name of the person, the amount before the
	 * discount, the discount, if any, and the amount after the discount.
	 *
	 * Uncomment the lines below to create an array of objects where each object
	 * represents one shopper. Use a foreach loop to iterate through the array,
	 * and console.log the relevant messages for each person
	 */

	let shoppers = [
		{name: 'Cameron', amount: 180},
		{name: 'Ryan', amount: 250},
		{name: 'George', amount: 320},
	];

	shoppers.forEach(function (shoppers) {
		if (shoppers.amount > 200) {
			console.log(shoppers.name + " is eligible for the discount, owing $" + shoppers.amount * .88 + " instead of $" + shoppers.amount + " saving $" + (shoppers.amount * .12).toFixed(2));
		} else {
			console.log(shoppers.name + " is not eligible for the discount, owing $" + shoppers.amount);
		}
	});

	/** TODO:
	 * Create an array of objects that represent books and store it in a
	 * variable named `books`. Each object should have a title and an author
	 * property. The author property should be an object with properties
	 * `firstName` and `lastName`. Be creative and add at least 5 books to the
	 * array
	 *
	 * Example:
	 * > console.log(books[0].title) // "The Salmon of Doubt"
	 * > console.log(books[0].author.firstName) // "Douglas"
	 * > console.log(books[0].author.lastName) // "Adams"
	 */

	let books = [
		{
			title: "For Whom The Bell Tolls",
			author: {
				firstName: "Ernest",
				lastName: "Hemingway"
			}
		}, {
			title: "The Brothers Karamazov",
			author: {
				firstName: "Fyodor",
				lastName: "Dostoevsky"
			}
		}, {
			title: "The 48 Laws of Power",
			author: {
				firstName: "Robert",
				lastName: "Greene"
			}
		}, {
			title: "The Book of Five Rings",
			author: {
				firstName: "Miyamoto",
				lastName: "Musashi"
			}
		}, {
			title: "The Prince",
			author: {
				firstName: "Niccolo",
				lastName: "Machiavelli"
			}
		}, {
			title: "The Meaning of THE HOLY QURAN",
			author: {
				firstName: "\'Abdullah Yusuf",
				lastName: "\'Ali"
			}
		}

	];

	console.log(books[1].title)
	console.log(books[4].author.firstName)
	console.log(books[5].author.lastName)

	/**
	 * TODO:
	 * Loop through the books array and output the following information about
	 * each book:
	 * - the book number (use the index of the book in the array)
	 * - the book title
	 * - author's full name (first name + last name)
	 *
	 * Example Console Output:
	 *
	 *      Book # 1
	 *      Title: The Salmon of Doubt
	 *      Author: Douglas Adams
	 *      ---
	 *      Book # 2
	 *      Title: Walkaway
	 *      Author: Cory Doctorow
	 *      ---
	 *      Book # 3
	 *      Title: A Brief History of Time
	 *      Author: Stephen Hawking
	 *      ---
	 *      ...
	 */

	// for (let i = 0; i < books.length; i++) {
	// 	console.log("Book # " + (i + 1) + "\n"
	// 		+ "Title: " + books[i].title + "\n"
	// 		+ "Author: " + books[i].author.firstName + " " + books[i].author.lastName);
	// }

	/**
	 * Bonus:
	 * - Create a function named `createBook` that accepts a title and author
	 *   name and returns a book object with the properties described
	 *   previously. Refactor your code that creates the books array to instead
	 *   use your function.
	 * - Create a function named `showBookInfo` that accepts a book object and
	 *   outputs the information described above. Refactor your loop to use your
	 *   `showBookInfo` function.
	 */

// 	function createBook(title, author) {
// 		let newBook = {
// 			title: title,
// 				author: {
// 					firstName: author.firstName,
// 					lastName: author.lastName,
// 				}
// 		};
// 		return newBook;
// 	}
// createBook("Where The Sidewalk Ends", "Shel Silverstein");
	// I got stuck 

	//Cody's Walkthrough
	function createBook(title, firstName, lastName){
		let bookObject = {
			title: title,
			author: {
				firstName: firstName,
				lastName: lastName
			}

		}
		books.push(bookObject);
	}

createBook("Where The Sidewalk Ends", "Shel", "Silverstein");


	function showBookInfo(book){
		return "Title: " + book.title + "\n" + "Author " + book.author.firstName + " " + book.author.lastName;
	}



	books.forEach(function(book,index){
		console.log("Book # " + (index + 1) + "\n" + showBookInfo(book))
	})

	//Thanks, Cody!