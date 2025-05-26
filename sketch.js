let x, y;
let speedx = 2, speedy = 2;
let startMoving = false; // Flag to start the square movement

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text('PRESS ANYWHERE ON THE SCREEN TO START', width / 2, height / 2);
}

function draw() {
  background(0);

  // If the user hasn't started the square movement, show the message
  if (!startMoving) {
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text('PRESS ANYWHERE ON THE SCREEN TO START', width / 2, height / 2);
  } else {
    // Move and draw the square after mousePressed
    stroke(255);
    strokeWeight(4);
    fill(255);
    square(x, y, 40);
    x += speedx;
    y += speedy;

    // Check if the square hits the boundary and reverse direction
    if (x + 40 > width || x <= 0) {
      speedx *= -1;
    }
    if (y + 40 > height || y <= 0) {
      speedy *= -1;
    }
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
  startMoving = true; // Start the movement after the mouse is pressed
}

function keyPressed() {
  startMoving = false; // Stop the movement and show the message again when any key is pressed
  background(0);
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text('PRESS ANYWHERE ON THE SCREEN TO START', width / 2, height / 2);
}
