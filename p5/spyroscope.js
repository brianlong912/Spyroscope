
//Global variables
//parameters to adjust - eventually might make sliding adjuster on screen
var R = 300;				//size of large circle, also determines size of window
var r;						//size of the small circle that goes around the larger circle
var multiply;			//relative position of "pen" in the smaller circle
var pen;
var Npart = 200;			//number of partitions to divide the larger circle
var Nsteps = 2e3;			//number of steps to take until finish drawing
var NstepsTyping;

//calculate globals from parameters
var dTheta1;
var dTheta2;
var theta1;
var theta2;
var center;
var x;
var y;

let rSlider;
let mulSlider;
let stepSlider;
// let stepInput;
// let stepSubmit;

function setup() {
	createCanvas(2 * R, 2 * R + 100);

	text('Radius of smaller cog', 10, 2 * R);

	rSlider = createSlider(0, 1, 0.5, 0.01);
	rSlider.position(10, 2 * R + 20);

	mulSlider = createSlider(0, 1, 1, 0.01);
	mulSlider.position(10, 2 * R + 40);

	stepSlider = createSlider(0, 1e4, 2e3, 100);
	stepSlider.position(10, 2 * R + 60);
	
	/*
	stepInput = createInput('');
	stepInput.input(stepInputEvent);

	stepSubmit = createButton('Submit');
	stepSubmit.mousePressed(stepSubmitEvent);
	*/

}

/*Code if you want the nSteps to be user input	*/

// function stepSubmitEvent() {
// 	Nsteps = NstepsTyping;
// 	console.log(Nsteps);
// }

// function stepInputEvent() {
// 	NstepsTyping = this.value();
// 	console.log(NstepsTyping);
// }

function draw() {
	background(220);
	translate(R, R);
	noFill();

	r = rSlider.value() * R;
	multiply = mulSlider.value();
	Nsteps = stepSlider.value();

	pen = r * multiply;
	dTheta1 = 2 * PI / Npart;
	dTheta2 = -dTheta1 * (R / r - 1);
	center = R - r;
	theta1 = 0;
	theta2 = 0;
	x = center + pen;
	y = 0;

	beginShape();
	for (i = 0; i < Nsteps; i++) {
		vertex(x, y);

		//calculate next position
		theta1 += dTheta1;
		theta2 += dTheta2;

		x = center * cos(theta1) + pen * cos(theta2);
		y = center * sin(theta1) + pen * sin(theta2);
	}
	endShape();
}