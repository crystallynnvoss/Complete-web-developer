// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".


var database = [ 
	{
		username: "Crystal", 
		password: "secret"
	},
	{
		username: "Converse", 
		password: "secrets"
	},
	{
		username: "Adeline", 
		password: "supersecret"
	}
];

var newsfeed = [
	{
		username: "Jah",
		timeline: "Sleep"
	},
	{
		username: "Bohdi",
		timeline: "Bark"
	},
	{
		username: "Pearl",
		timeline: "Swim"
	}
];


function isUserValid(user, pass) {
	for (let i=0; i < database.length; i++) {
		if (database[i].username === user &&
			database[i].password === pass) {
			return true;
		} 
	}
	return false;
}

function signIn(user, pass) {
	if (isUserValid(user, pass)) {
		console.log(newsfeed);
	} else {
			alert("Sorry wrong username and password");
	}
}
	

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);




