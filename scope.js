// scope

// Root Scope (window)

var fun = 5; 

function funFunction() {
//child scope
	var fun = "helllooo";
	console.log(1, fun);

}

function funnerFunction() {
//child scope
	var fun = "byeeee";
	console.log(2, fun);

}

function funnestFunction() {
//child scope
	fun = "hAHHH";
	console.log(3, fun);

}

console.log("window", fun)