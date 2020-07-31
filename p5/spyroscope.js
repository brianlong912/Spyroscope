
//Global variables
//parameters to adjust - eventually might make sliding adjuster on screen
var size = 700;				//size of window, also determines size of large, outer circle
var cir = .92 * size / 2;			//size of the small circle that goes around the larger circle
var multiply = .9;			//relative position of "pen" in the smaller circle
var r = cir * multiply;
var Npart = 200;			//number of partitions to divide the larger circle
var Nsteps = 2.1e4;			//number of steps to take until finish drawing

//calculate globals from parameters
var dTheta1;
var dTheta2;
var theta1;
var theta2;
var center;
var x;
var y;

function setup() {
	createCanvas(size, size);
	// frameRate(10);

	dTheta1 = 2 * PI / Npart;
	dTheta2 = -dTheta1 * (size / cir) / 2;
	console.log(dTheta1)
	console.log(dTheta2)
	center = size / 2 - cir;
}

function draw() {
	background(220);
	translate(width / 2, height / 2);
	noFill();
	theta1 = 0;
	theta2 = 0;
	x = center + r;
	y = 0;

	beginShape();
	for (i = 0; i < Nsteps; i++) {
		vertex(x, y);

		//calculate next position
		theta1 += dTheta1;
		theta2 += dTheta2;

		x = center * cos(theta1) + r * cos(theta2);
		y = center * sin(theta1) + r * sin(theta2);
	}
	endShape();
}