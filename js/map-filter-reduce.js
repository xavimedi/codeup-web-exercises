const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

const threeLang = users.filter(user => user.languages.length >= 3);

const emails = users.map(user => user.email);

const totalYears = users.reduce((total, user) =>{
	return total + user.yearsOfExperience;
}, 0);

const yearsAvg = totalYears / users.length;

const longestEmail = users.reduce((longest, user) =>{
	if (user.email.length >= longest.length){
		return user.email;
	}
	else{
		return longest;
	}
}, []);

const userNames = users.reduce((names, user) =>{
	names.push(user.name);
	return names;
}, []);


/* bonus */
// const userLangs = users.reduce((languages, user) =>{
// 	languages.push(user.languages);
// 	return languages;
// }, []);

console.log(threeLang);
console.log(emails);
console.log(totalYears);
console.log(yearsAvg);
console.log(longestEmail);
console.log(userNames);
console.log(userLangs);
