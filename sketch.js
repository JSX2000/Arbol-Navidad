
var r = [];
var g = [];
var b = [];
var r1 = [];
var g1 = [];
var b1 = [];
function setup() {
  createCanvas(400, 400);
  list2 = [];
  for (var i = 0; i < 100; i++) {
    list = [];
    list.push(random(0, 400));
    list.push(random(0, 400));
    list.push(random(0.5, 1.5));
    list.push(random(0, 8));
    list2.push(list)
      r = floor(random(0, 255));
  g = floor(random(0, 255))
  b = floor(random(0, 255))
  r1 = floor(random(0, 255));
  g1 = floor(random(0, 255))
  b1 = floor(random(0, 255))
  }
  
}

function fall(y, speed) {
  y += speed;
  if (y > 400) {
    y = 0;
    speed = random(0.5, 1.5);
  }
}

function show(x, y, d) {
  stroke(255);
  fill(255);
  circle(x, y, d);
}

function draw() {
  background(220);
  for (var i = 0; i < 100; i++) {
    list2[i][1] += list2[i][3];
    if (list2[i][1] > 400) {
    list2[i][1] = 0;
  }
    show(list2[i][0], list2[i][1], list2[i][3]);
  }
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

}