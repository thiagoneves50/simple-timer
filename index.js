const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
let timeCompleted = true;
const timer = new Timer(durationInput, startButton, pauseButton, {
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
	},
});

const getPerimeter = () => {
	perimeter * (timeRemaining / duration) - perimeter;
};
