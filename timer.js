class Timer {
	constructor(
		initialDuration,
		durationInput,
		startButton,
		pauseButton,
		stopButton,
		setButton,
		callbacks
	) {
		// instance variables
		this.initialDuration = initialDuration;
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		this.stopButton = stopButton;
		this.setButton = setButton;
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		this.startButton.addEventListener("click", this.start);
		this.pauseButton.addEventListener("click", this.pause);
		this.stopButton.addEventListener("click", this.stop);
		this.setButton.addEventListener("click", this.set);
	}
	// Defining method as an arrow function to make 'this' refer to the class Timer (previous valid line trick)
	start = () => {
		// Emiter that timer started
		if (this.onStart) {
			this.onStart(this.timeRemaining);
		}
		this.tick();
		this.interval = setInterval(this.tick, 10);
	};

	pause = () => {
		clearInterval(this.interval);
	};

	stop = () => {
		clearInterval(this.interval);
		this.timeRemaining = 0;
		this.durationInput.value = this.initialDuration.value;
		if (this.onComplete) {
			this.onComplete();
		}
		console.log(this.initialDuration.value);
	};

	set = () => {
		this.stop();
		this.start();
	};

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.pause();
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeRemaining = this.timeRemaining - 0.01;

			if (this.onTick) {
				this.onTick(this.timeRemaining);
			}
		}
	};

	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}
	set timeRemaining(time) {
		this.durationInput.value = time.toFixed(2);
	}
}
