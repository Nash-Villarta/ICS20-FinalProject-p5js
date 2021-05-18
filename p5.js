let circles = [];
var ideas = [
  "Draw a Lily Pad",
  "Draw Pac Man",
  "Draw a House",
  "Draw a Circle",
  "Draw a Smiley Face",
  "Draw a Boat",
  "Draw a Plane",
];
var index = 0;

//  Buttons, inputs and canvas
function setup() {
  createCanvas(1000, 500);
  //  This is input for fontsize
  input = createInput();
  input.position(20, 125);
  button = createButton("Set Font (Numbers)");
  button.position(input.x + input.width, 125);
  button.mousePressed(setR);
  //  This is input for color
  inputc = createInput();
  inputc.position(20, 155);
  button = createButton("Set Color (Red, blue)");
  button.position(inputc.x + inputc.width, 155);
  button.mousePressed(setC);
  //  This is for background color
  inputbg = createInput();
  inputbg.position(20, 185);
  button = createButton("Set Background Color");
  button.position(inputbg.x + inputbg.width, 185);
  button.mousePressed(setBG);
}

//  Input variables for font, color, background
function setR() {
  r = input.value();
}
function setC() {
  cvalue = inputc.value();
}
function setBG() {
  bgvalue = inputbg.value();
}
let r = 15;
let cvalue = 0;
let bgvalue = 250;

//  Background drawings and idea texts
function draw() {
  background(bgvalue);
  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
  }
  textSize(32);
  text(ideas[index], 150, 100);
}

//  Buttons to draw circles based on mouse position
function mousePressed() {
  fill(cvalue);
  let c = new Circle(mouseX, mouseY, r);
  circles.push(c);
}
function mouseDragged() {
  fill(cvalue);
  let c = new Circle(mouseX, mouseY, r);
  circles.push(c);
}

//  This function of splice deletes 10000 circles
function mousePressed() {
  if (mouseButton === RIGHT) {
    circles.splice(0, 10000);
  }
}

//  This function generates premade ideas in the ideas index
function keyPressed() {
  if (keyCode === UP_ARROW) {
    index = index + 1;
  }
  if (index == 7) {
    index = 0;
  }
}

//  Constructor for the circles to be made
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  show() {
    strokeWeight(0);
    ellipse(this.x, this.y, this.r * 2);
  }
}
