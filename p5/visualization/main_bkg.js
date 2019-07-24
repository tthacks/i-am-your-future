/* VARIABLES */

/*
// Tarot1: Magical
let t = 0;
let timeIncrement = 0.01;
let r = 1;
let g = 1;
let b = 1;
let colorRandom = 250;
let lineWidth = 20;
let ellipseDistanceX = 50;
let ellipseDistanceY = 30;
let randomX = 0;
let randomY = 0;
*/


// Main background
let t = 0;
let timeIncrement = 0.001;
let r = 150;
let g = 50;
let b = 100;
let colorRandom = 100;
let lineWidth = 10;
let ellipseDistanceX = 40;
let ellipseDistanceY = 25;
let randomX = 0;
let randomY = 0;


function setup() {
  createCanvas(900, 700);
  noStroke();
}

function draw() {
  background(10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + random(ellipseDistanceX, ellipseDistanceX+randomX)) {
    for (let y = 0; y <= height; y = y + random(ellipseDistanceY, ellipseDistanceY+randomY)) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 30 * cos(2 * PI * t + angle);
      const myY = y + 30 * sin(2 * PI * t + angle);

      fill(random(r, r+colorRandom), 
           random(g, g+colorRandom), 
           random(b, b+colorRandom));
      ellipse(myX, myY, lineWidth); // draw particle
    }
  }

  t = t + timeIncrement;
}
