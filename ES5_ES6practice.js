const player = "bobby";
let experience = 100; 
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true; 
	console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel);

const obj = {
	player: "bobby";
 	experience: 100; 
	wizardLevel: false;
}

// if you want to turn these into variables: 
const { player, experience } = obj;

const name = "john snow";

// const obj = {
// 	[name]: "hello",
// 	["ray + smith"]
// }

// if you have variables and you want to put them in an object: 

const a = "Simon";
const b = true;
const c = {};

const obj = {
	a,
	b,
	c
}

// Template strings

const name = "sally";
const age = 34;
const pet = "horse";

// const greeting = `Hello ${name} you seemm to be ${age-10}. What a lovely ${pet} you have.`

function greet(name="", age=30, pet="cat") {
	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`

}
// symbols are used to create unique type
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');





