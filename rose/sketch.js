function setup() {
  createCanvas(800, 800);
  frameRate(5);
  r = width/3;
}

var r;
var n = 25;
var d = 7;

function draw() {
  background(0);
  fill(255);
  stroke(255);
  push();
    beginShape(LINES);
      translate(width/2, height/2);
      for(var theta = 0; theta <= TWO_PI*4; theta+=PI/3000){
        var x = r*cos((n/d)*theta)*cos(theta/d);
        var y = r*cos((n/d)*theta)*sin(theta/d);
        var z = r;
        vertex(x,y);
      }
    endShape();
  pop();
}