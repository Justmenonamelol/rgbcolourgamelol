let numSquares = 6;
let colours = [];
let pickedColour;
let squares = document.querySelectorAll(".square");
let colourDisplay = document.querySelector(".colourDisplay");
let cssBodySelect = document.querySelector(".body");
let messageDisplay = document.querySelector(".message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector(".reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
			reset();
		});
	}
}
function setupSquares() {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function () {
			let clickedColour = this.style.backgroundColor;
			if (clickedColour === pickedColour) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColours(clickedColour);
				h1.style.backgroundColor = clickedColour;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}
function reset() {
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	messageDisplay.textContent = "";
	for (i = 0; i < squares.length; i++) {
		if (colours[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colours";
}

resetButton.addEventListener("click", function () {
	reset();
});

function changeColours(colours) {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colours;
	}
}
function pickColour() {
	let random = Math.floor(Math.random() * colours.length);
	return colours[random];
}
function generateRandomColours(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(randomColour());
	}
	return arr;
}
function randomColour() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
