function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
}

function draw() {
  drawingContext.filter = "blur(10px)";
  fill(0, 20);
  rect(0, 0, width, height);
  
  fill(255);
  noStroke();
  if (mouseIsPressed){
    circle(mouseX, mouseY, 50);  
  } else {
    circle(mouseX, mouseY, 30);
  }
}