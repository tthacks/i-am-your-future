//let capture;
let name = "";
let birthday = "";
let inp, birthInput;
let button;
let rowLength;
let columnLength;
let showPane = true;
let panePos;
let paneSize;
let inc = true;
let dec = false;
 
function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  name = "";
  birthday = "";
  panePos = createVector(displayWidth / 3, displayHeight / 4);
  paneSize = createVector(displayWidth / 3, displayHeight / 2);
  button = createButton('tell me my future');
  button.position(displayWidth / 2 - button.width / 2, displayHeight / 2 + 160);
  button.mousePressed(changeBG);
 inp = createInput('');
 inp.position(displayWidth/2 - inp.width / 2, displayHeight/2);
 inp.input(nameEvent);
 birthInput = createInput('');
 birthInput.position(displayWidth / 2 - birthInput.width/2, displayHeight / 2 + 80);
 birthInput.input(birthdayEvent);

 //capture = createCapture(VIDEO);
 //capture.size(320, 240);
 //capture.hide();
}
 
function draw() {
  background(0);
  if(showPane) {
    noStroke();
    fill(color(24,42,84));
    rect(panePos.x, panePos.y, paneSize.x, paneSize.y, 30);
    textSize(32);
    fill(250, 250, 255);
    text("Tell us about yourself.", displayWidth / 3 + 60, displayHeight / 2 - 60);
    textSize(20);
    text("Name", displayWidth / 2 - 30, displayHeight / 2 - 20);
    text("Date of birth (MM/DD)", displayWidth /2 -90, displayHeight /2 + 60);
    image(img, displayWidth / 2 - 40, displayHeight / 3 + 40);
  }
 //image(capture, 0, 0, 320, 240);
}
 
function changeBG() {
  var val = random(255);
  background(val);
  showPane = false;
  inp.remove();
  button.remove();
  birthInput.remove();
    renderReturnData();
}
 
function nameEvent() {
 name = this.value();
 fullscreen(true);
}

function birthdayEvent() {
  birthday = this.value();
  }

function renderReturnData() {
  console.log("Hello, " + name + "\nYou were born on " + birthday);
}