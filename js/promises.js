"use strict";

// const userPromise = "https://api.github.com/users"
// const repoPromise = "https://api.github.com/repositories"

// Handle an API Promise

let username = "xavimedi";

lastCommit(username)
	.then(commitDate =>{
		console.log(`Last commit date for ${username}: ${commitDate}`);
	})
	.catch(error =>{
		console.log("Cannot resolve this request");
	});

function lastCommit(username){
	const userUrl = `https://api.github.com/users/${username}/events`;

	return new Promise((resolve, reject) =>{
		fetch(userUrl)
			.then(response =>{
				if (!response.ok){
					console.log("User could not be found");
					setTimeout(() => reject(new Error("Timeout error")), 3000);
				}
				return response.json();
			})
			.then(events =>{
				const pushEvents = events.filter(event => event.type === 'PushEvent');
				if (pushEvents.length === 0){
					console.log("User has not pushed any commits thus far");
					setTimeout(() => reject(new Error("Timeout error")), 3000);
				}
				const lastCommitDate = pushEvents[0].created_at;
				resolve(lastCommitDate);
			})
			.catch(error => console.log("Cannot resolve this request"));
	});
}


// console.log(fetch(userPromise, {headers: {'Authorization': 'token GITHUB_KEY'}}));


// Create your own API Promise
// function wait(num){
// 	return new Promise((resolve, reject) =>{
// 		setTimeout(()=>{
// 			resolve()
// 		}, num)
//
// 	})
//
// }
//
// wait(1000).then(() => console.log('One second has elapsed'));
// wait(3000).then(() => console.log('Three seconds has elapsed'));

// notes from lecture


// Promise.all([userPromise, repoPromise])
//   .then(function (data){
// 	  console.log(data);
//   })
//   .catch(function (error){
//   });

// Promise.race([userPromise, repoPromise])
//   .then(function (data){
// 	  console.log(data);
//   })
//   .catch(function (data){
//   });

// Promise.resolve('one').then((one) => {
//   console.log(one);
//   return 'two';
// }).then((two) => {
//   console.log(two);
//   return 'three';
// }).then((three) => {
//   console.log(three);
// });

// Promise.resolve('one').then((data) => {
//   console.log(data);
//   return 'two';
// }).then((data) => {
//   console.log(data);
//   return 'three';
// }).then((data) => {
//   console.log(data);
// });

// fetch('https://api.github.com/users')
//   .then(response =>{
//   response.json()
// 	  .then(users =>{
// 	  users.forEach(user => {
// 		  console.log(user.login);
// 	  });
//   });
// });

// fetch('https://api.github.com/users')
//   .then(response => response.json())
//   .then(users => {
// 	  users.forEach( userObj => {
// 		  // do something with each username
// 		  console.log(userObj.login);
// 	  })
//   })
//   .catch(error => console.error(error));

// function getGithubUsernames() {
//   return fetch('https://api.github.com/users')
// 	  .then(response => response.json())
// }
//
// later on...
//
// getGithubUsernames().then( users => {
//   users.forEach( userObj => {
// 	  // do something with each username
// 	  console.log(userObj.login);
//   });
// }).catch(error => console.error(error));

// function makeRequest() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.1) {
//         resolve('Here is your data: ...');
//       } else {
//         reject('Network Connection Error!');
//       }
//     }, 1500);
//   });
// }
//
// const request = makeRequest();
// console.log(request); // pending promise
// request.then(message => console.log('Promise resolved!', message));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// request.catch(message => console.log('Promise rejected!', message));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"

// const myPromise = new Promise((resolve, reject) => {
// 	if (Math.random() > 0.5) {
// 		resolve();
// 	} else {
// 		reject();
// 	}
// });
// console.log(myPromise);

// const myPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (Math.random() > 0.5) {
// 			resolve();
// 		} else {
// 			reject();
// 		}
// 	}, 1900);
// });
//
// console.log(myPromise); // a pending promise
//
// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));

// function makeRequest() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (Math.random() > 0.1) {
// 				resolve("All clear, partner");
// 			} else {
// 				reject("There's a snake in your boot!");
// 			}
// 		}, 1500);
// 	});
// }
//
// const request = makeRequest();
// console.log(request); // pending promise
// request.then(message => console.log('Promise resolved!', message));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// request.catch(message => console.log('Promise rejected!', message));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.