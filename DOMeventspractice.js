// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it 


const button = document.getElementById('enter');
const input = document.getElementById('userinput')
const ul = document.querySelector("ul");
const deletebutton = document.querySelector("delbutton");
const clickableli = document.getElementsByClassName("newli");
const stayOnTarget = document.getElementById('stayOnTarget')
stayOnTarget.addEventListener('click', function(event){
	// console.log(event.target,event.currentTarget); currentTarget is ul, target is li
	if (event.target.className != 'delbutton') {
		if (event.target.className == "done")
			event.target.className = "";
		else
			event.target.className = "done"
	}

})




button.addEventListener("click", function() {
	if (input.value.length > 0) {
		var li = document.createElement("li");
		var delbutton = document.createElement("button");
		delbutton.className= "delbutton";
		delbutton.textContent = "Delete";
		delbutton.addEventListener('click', function(event){
			event.target.Parentnode.remove();

		});
		li.setAttribute("class", "newli")
		li.appendChild(document.createTextNode(input.value));
		li.appendChild(delbutton);

		ul.appendChild(li);

		input.value = ''
	}
})

input.addEventListener("keydown", function(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = ''
	}
})

// deletebutton.addEventListener("click", function(event) {
// 	document.deleteElement(li)
// })


// clickableli.addEventListener("click", function() {
//     clickableli.classList.add("done")
// });




const el = document.createElement('div');

// ✅ Set ID attribute on element
el.setAttribute('id', 'my-id');

// ✅ Add text content to element
el.textContent = 'Hello world';
