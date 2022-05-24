const todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

const todosImportant = [
	"clean room!",
	"brush teeth!",
	"exercise!",
	"study javascript!",
	"eat healthy!"
];

let todosLength = todos.length;
for (let i=0; i < todosLength; i++) {
	console.log(i);
}

todos.forEach(function(todo, i) {
	console.log(todo, i);
})

// let counterOne = 10;
// while (counterOne > 0) {
// 	console.log(counterOne);
// 	counterOne--;
// // }

// let counterTwo = 10
// do {
// 	console.log(counterTwo);
// 	counterTwo--;
// } while (counterTwo > 0);

// function logTodos(todo, i) {
// 	console.log(todo, i);
// }

// todos.forEach(logTodos);
// todosImportant.forEach(logTodos);