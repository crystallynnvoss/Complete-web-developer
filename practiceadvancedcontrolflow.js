// ternary operators

// condition ? expr1 : expre2;

function isUserValid(bool) {
	return bool;
}

let answer = isUserValid(true) ? "You may enter" : "Access Denied"

var automatedAnswer = 
	"Your account # is " + (isUserValid(false) ? "1234" : "not available");

function condition() {
	if (isUserValid(true)) {
		return "You may enter"; 
	} else {
		return "Access denied"; 
	}
}

var answer2 = condition(); 

//switch

function moveCommand(direction) {
	var whatHappens; 
	switch(direction) {
		case "forward":
			whatHappens = "you encounter a monster";
			break;
		case "forward":
			whatHappens = "you arrive home";
			break;
		case "forward":
			whatHappens = "you found a river";
			break;
		case "forward":
			whatHappens = "you run into a troll";
			break;
		default:
		whatHappens = "please enter a valid direction";
	}
	return whatHappens;
}