const initialDuration = document.querySelector("#initial-duration");
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const stopButton = document.querySelector("#stop");
const setButton = document.querySelector("#set-btn");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

// Setting initial input on the timer
durationInput.value = initialDuration.value;

let duration;
let timeCompleted = true;
const timer = new Timer(
	initialDuration,
	durationInput,
	startButton,
	pauseButton,
	stopButton,
	setButton,
	{
		onStart(totalDuration) {
			if (timeCompleted === true) {
				duration = totalDuration;
				timeCompleted = false;
			}
		},
		onTick(timeRemaining) {
			circle.setAttribute(
				"stroke-dashoffset",
				perimeter * (timeRemaining / duration) - perimeter
			);
		},
		onComplete() {
			console.log("Timer is completed");
			timeCompleted = true;
			circle.setAttribute("stroke-dashoffset", 0);
			durationInput.value = initialDuration.value;
		},
	}
);

const getPerimeter = () => {
	perimeter * (timeRemaining / duration) - perimeter;
};
