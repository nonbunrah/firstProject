//image click

document.createElement("")

let imageClick = document.querySelector("img")

//imageClick.addEventListener("click", )
	let clicked = () => {
	console.log('hey!')
}

console.log(imageClick)

//Submit button

let scoreArray = []

let button = document.querySelector(".button");

button.addEventListener("click", alertScreen = () => {
	scoreArray.length = 0
	for (input of answerInputs) {
	if(input.value == "VW" && input.checked) {
		scoreArray.push(1)
	}
}	

let total = scoreArray.reduce((a,b) => a + b)
if (total <= 5) {
	alert("You suck! You got " + total + " out of 10 correct!")
} else if (total > 5 && total <= 8) {
	alert("Not bad! You got " + total + " out of 10 correct!")
} else if (total === 9) {
	alert("Nice job! You got " + total + " out of 10 correct!")
} else if (total === 10) {
	alert("Wow! Perfect Score! 10 out of 10!")
}

console.log(total)
console.log(answerInputs)
});

//Redo Quiz button
let refresh = document.querySelector(".refresh")

refresh.addEventListener("click", reload = () => {
	location.reload(true),
	scroll(0,0)
});

let answerInputs = document.querySelectorAll("input[type = 'radio']")

let pName = document.querySelector(".playerName")

pName.textContent = `Player Name: ${sessionStorage.playerName}`;