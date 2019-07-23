//let capture;
let name = "";
let month;
let day;
let birthday = { month, day};
let sign = "";
let inp, birthInput;
let button;
let inputComplete = false;
let rowLength;
let columnLength;
 
function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  button = createButton('tell me my future');
  button.position(width/2 + 100, height/2 + 80);
  button.mousePressed(changeBG);
  inp = createInput('');
  inp.position(width/2, height/2)
  inp.input(nameEvent);

  birthInput = createInput('');
  birthInput.position(width/2, height/2 + 40);
  birthInput.input(birthdayEvent);
  
  //vis stuff
 rowLength = width / 10 + 1;
 columnLength = height / 10 + 1;
 bubbles = new Array();
 //capture = createCapture(VIDEO);
 //capture.size(320, 240);
 //capture.hide();
}
 
function draw() {
  background(0);
 //image(capture, 0, 0, 320, 240);
}
 
function changeBG() {
  var val = random(255);
  background(val);
  inputComplete = true;
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

  alert("Hello, " + name + "\nYour sign is " + sign + getSignEmoji(sign));
}