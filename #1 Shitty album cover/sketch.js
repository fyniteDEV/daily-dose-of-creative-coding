var circleSize = 82;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(15);
  noFill();
  
  
  for (let i = 1; i < 50; i++) {
    stroke(27, 112, 101, 40)
    circle(850, 850, i ** 2);
  }
  
  
  for (let i = 1; i < circleSize; i++){
    strokeWeight(1.5);
    stroke(i * 10, 0, i * 2.5, 200);
    circle(-50, -50, i ** 1.7);
  }
  
  noStroke();
  fill(200);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(140);
  text("ALBUM", 400, 300);
  
  textStyle(NORMAL);
  textSize(30);
  text("by artist", 400, 400)
}