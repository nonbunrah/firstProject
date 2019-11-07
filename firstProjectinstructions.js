//sessionStorage
let nameSubmit = document.querySelector(".enterName")
let playButton = document.querySelector(".play")

playButton.addEventListener("click", savePlayerName = () => {
	sessionStorage.setItem("playerName", nameSubmit.value)
	console.log(sessionStorage.getItem("playerName"))
	console.log(nameSubmit)
	window.location.href="quiz.html"
})