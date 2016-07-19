function setup() {
  createCanvas(900,900);
  background(0);
  colorMode(HSB);
}

var points = 17;

function draw() {
  var radius = width/2 - width/10;
  stroke(255);
  
  for(var beta = 0; beta < TWO_PI; beta += TWO_PI/points){
    
    var x = radius*cos(beta) + width/2;
    var y = radius*sin(beta) + height/2;
    
    for(var theta = 0; theta < TWO_PI; theta += TWO_PI/points){
      var hu = map(theta*beta, 0, TWO_PI*2, 0, 255);
      stroke(hu, 255, 255);
      var x1 = radius*cos(theta) + width/2;
      var y2 = radius*sin(theta) + height/2;
      line(x, y, x1, y2);
      
    }
  }
  
}