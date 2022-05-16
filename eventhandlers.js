let button = document.querySelector("#enter");
let input = document.querySelector("#userinput");
let ul = document.querySelector("ul");


const inputLength = () => {
	return input.value.length;
}


const createListElement = () => {
	if (inputLength() > 0 ) {
		ul.insertAdjacentHTML("beforeend", `<li>${input.value}</li>`);
		input.value = "";
		} 
}

const createListAfterEnter = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement(); 
		} 
}

// const generateLetterButtons = () => {
//   const letterButtonContainer = document.querySelector('#letter-buttons');
//   for (const char of ALPHABET) {
//     letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
//   }
// }

button.addEventListener("click", createListElement);
input.addEventListener("keypress", createListAfterEnter);