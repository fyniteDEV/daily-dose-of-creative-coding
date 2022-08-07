let cHours;
let cMins;
let cSecs;
let tickTock;
let font;

function setup() {
  createCanvas(600, 600);
  font = loadFont("assets\\SmallTypeWriting.ttf");
}

function draw() {
  var currentDate = new Date();
  cHours = currentDate.getHours();
  cMins = currentDate.getMinutes();
  cSecs = currentDate.getSeconds();

  background(38, 70, 83);
  translate(300, 300);
  angleMode(DEGREES);
  
  // Background look
  push();
  fill(242, 232, 207);
  strokeWeight(15);
  stroke(40);
  circle(0, 0, 495);
  
  strokeWeight(2);
  stroke(150);
  for (let i = 0; i < 12; i++) {
    rotate(30);
    line(0, 241, 0, 254);
  }

  stroke(100);
  for (let j = 0; j < 60; j++) {
    rotate(6);
    line(0, 237, 0, 239);
  }
  pop();

  push();
  // Tick-tock
  if (cSecs % 2 == 0){
    tickTock = "TICK";
  } else {
    tickTock = "TOCK";
  }
  noStroke();
  textFont(font);
  textAlign(CENTER);
  textSize(110);
  fill(40);
  text(tickTock, 0, 120);
  pop();

  //Hours
  push();
  stroke(56, 102, 65);
  strokeWeight(15);
  rotate(cHours * 30);
  line(0, 0, 0, -140);
  pop();

  // Minutes
  push();
  stroke(106, 153, 78);
  strokeWeight(10);
  rotate(cMins * 6);
  line(0, 0, 0, -200);
  pop();

  // Seconds
  push();
  stroke(188, 71, 73);
  strokeWeight(5);
  rotate(cSecs * 6);
  line(0, 20, 0, -230);
  pop();

  // Middle screw thingy
  stroke(188, 71, 73);
  strokeWeight(5);
  fill(40);
  circle(0, 0, 10);
}
