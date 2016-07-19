function setup() {
  createCanvas(400, 400);
}

var n = 2;
var r = 100;

function draw() {
  background(0);
  fill(255);
  stroke(255);
  push();
    beginShape();
      translate(width/2, height/2);
      for(var theta = 0; theta <= TWO_PI; theta+=TWO_PI/360){
        var x = r*cos(theta);
        var y = r*sin(theta)*pow(sin(theta/2), n-1);
        var z = r;
        vertex(x,y);
      }
    endShape();
  pop();
}