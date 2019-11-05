//Submit button

let scoreArray = []
let score = 0;

let button = document.querySelector(".button");

button.addEventListener("click", alertScreen = () => {
	for (input of answerInputs) {
	if(input.value == "VW" && input.checked) {
		scoreArray.push(1)
	}
}	
let total = scoreArray.reduce((a,b) => a + b)
console.log(total)

alert("You got " + total + " out of 10 correct!")

console.log(answerInputs)
});

//Redo Quiz button
let refresh = document.querySelector(".refresh")

refresh.addEventListener("click", reload = () => {
	location.reload(true),
	scroll(0,0)
});

let answerInputs = document.querySelectorAll("input[type = 'radio']")