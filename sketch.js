var r = [];
var g = [];
var b = [];
var r1 = [];
var g1 = [];
var b1 = [];
var circulos = [];

function setup() {
  createCanvas(400, 400);
  r = floor(random(0, 255));
  g = floor(random(0, 255))
  b = floor(random(0, 255))
  r1 = floor(random(0, 255));
  g1 = floor(random(0, 255))
  b1 = floor(random(0, 255))
}

function draw() {
  background(220);
  fill(128, 64, 0);
  stroke(128, 64, 0);
  square(150, 300, 100);

  fill(0, 143, 57);
  stroke(0, 143, 57);
  triangle(100, 300, 300, 300, 200, 20);

  stroke(255);
  fill(255);

  fill(r, g, b)
  circle(240, 250, 15)
  circle(200, 100, 15)
  circle(170, 170, 15)
  circle(220, 190, 15)
  circle(180, 270, 15)
  circle(140, 230, 15)

  if (mouseIsPressed) {
    stroke(r, g, b);
    circle(240, 250, 15)
    circle(200, 100, 15)
    circle(170, 170, 15)
    circle(220, 190, 15)
    circle(180, 270, 15)
    circle(140, 230, 15)
  }

  fill(255);
  stroke(150);
  square(-1, 389, 402);

}