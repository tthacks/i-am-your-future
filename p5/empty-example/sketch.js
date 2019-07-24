//let capture;
let name = "";
let month;
let day;
let birthday = { month, day};
let sign = "";
let inp, birthInput;
let button;
let rowLength;
let columnLength;
let panePos;
let paneSize;
let inc = true;
let dec = false;
let t = 0;
let timeIncrement = 0.001;
let r = 150;
let g = 50;
let b = 100;
let colorRandom = 100;
let lineWidth = 10;
let ellipseDistanceX = 40;
let ellipseDistanceY = 25;
let randomX = 0;
let randomY = 0;

const states = {
  INIT: 0,
  QR: 1,
  VIZ: 2,
  END: 3
};

var state = states.INIT;

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

 capture = createCapture(VIDEO);
 capture.size(displayWidth, displayHeight);
 capture.hide();
 video = document.getElementsByTagName("video")[0];
//  startVideo();
 //capture.size(320, 240);
 //capture.hide();
}

function draw() {
  background(0);
  if(state === states.INIT) {
    noStroke();
    fill(color(24,42,84));
    rect(panePos.x, panePos.y, paneSize.x, paneSize.y, 30);
    textSize(32);
    fill(250, 250, 255);
    text("Tell us about yourself.", displayWidth / 3 + 60, displayHeight / 2 - 60);
    textSize(20);
    text("Name", displayWidth / 2 - 30, displayHeight / 2 - 20);
    text("Date of birth (MM/DD)", displayWidth /2 -90, displayHeight /2 + 60);
    //image(img, displayWidth / 2 - 40, displayHeight / 3 + 40);
  } else if (state === states.QR) {
    // TODO: draw something when we need QR code
  } else if (state === states.VIZ) {
    background(10, 10); // translucent background (creates trails)

    // make a x and y grid of ellipses
    for (let x = 0; x <= width; x = x + random(ellipseDistanceX, ellipseDistanceX+randomX)) {
      for (let y = 0; y <= height; y = y + random(ellipseDistanceY, ellipseDistanceY+randomY)) {
        // starting point of each circle depends on mouse position
        const xAngle = map(handPosX, 0, width, -4 * PI, 4 * PI, true);
        const yAngle = map(handPosY, 0, height, -4 * PI, 4 * PI, true);
        // and also varies based on the particle's location
        const angle = xAngle * (x / width) + yAngle * (y / height);

        // each particle moves in a circle
        const myX = x + 30 * cos(2 * PI * t + angle);
        const myY = y + 30 * sin(2 * PI * t + angle);

        fill(random(r, r+colorRandom), 
            random(g, g+colorRandom), 
            random(b, b+colorRandom));
        ellipse(myX, myY, lineWidth); // draw particle
      }
    }

  t = t + timeIncrement;
    // TODO: use handPosX and handPosY to do a cool visualization
  } else if (state === states.END) {
    // TODO: draw something to show the user a fortune
  }
 //image(capture, 0, 0, 320, 240);
}

// goes from initial state to reading tarot card
function changeBG() {
  var val = random(255);
  background(val);
  state = states.QR;
  inp.remove();
  button.remove();
  birthInput.remove();
  renderReturnData();
}

function nameEvent() {
 name = this.value();
}

function birthdayEvent() {
  var inputBirthday = this.value();
  var birthArray = inputBirthday.split("/");
  month = parseInt(birthArray[0]);
  day = parseInt(birthArray[1]);

  if (!isNaN(month) || !isNaN(day)){
    birthday = { month, day };
  }
}

function renderReturnData() {
  if (isNaN(birthday.month) || isNaN(birthday.day)){
    alert("Try again. Format: MM-DD-YYYY");
    setup();
  }

  sign = getHoroscopeSign(birthday);
  console.log(getFortune(sign, "love"));

  alert("Hello, " + name + "\nYour sign is " + sign + getSignEmoji(sign));
}
