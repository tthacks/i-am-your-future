var capture;
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

let reenieBeanie, robotoLite;
function preload() {
  reenieBeanie = loadFont('assets/reenieBeanie.ttf');
  robotoLite = loadFont('assets/Roboto-Light.ttf');
}

var oldDisplayWidth;
var oldDisplayHeight;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  name = "";
  birthday = "";
  panePos = createVector(displayWidth / 3, displayHeight / 4);
  paneSize = createVector(displayWidth / 3, displayHeight / 2);
  button = createButton('Tell Me My Future');
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
  setupViz(0);

  oldDisplayHeight = displayHeight;
  oldDisplayWidth = displayWidth;
//  startVideo();
 //capture.size(320, 240);
 //capture.hide();
}

// state = states.END;
// name = "eee";
// sign = "Leo";
// tarot = {name: "Three of Swords", value: 13, type: "Love"}; 
// fortune = "rejjhgrjehgkrhc gjkrhgkhrtkghkrtg hjkrthgkrtghj khvjldsjv knvkren vekrjh giehgvj krenkv  njkrenve krhvukdhvie hrierhver";


function draw() {
  if(state === states.INIT) {
    drawViz();
    textSize(50);
    textFont(reenieBeanie);
    fill(250, 250, 255);
    text("I Am Your Future", displayWidth / 3 + 60, displayHeight / 4);
    noStroke();
    fill(color(24,42,84));
    rect(panePos.x, panePos.y + 30, paneSize.x, paneSize.y, 30);
    textSize(30);
    textFont(robotoLite);
    fill(250, 250, 255);
    text("Let's Get To Know You!", displayWidth / 3 + 60, displayHeight / 2 - 90);
    textSize(20);
    text("Name", displayWidth / 2 - 30, displayHeight / 2 - 20);
    text("Date of birth (MM/DD)", displayWidth /2 -90, displayHeight /2 + 60);
    //image(img, displayWidth / 2 - 40, displayHeight / 3 + 40);
  } else if (state === states.QR) {
    // TODO: draw something when we need QR code
    drawViz();
    image(capture, displayWidth / 4, displayHeight /4 , 480, 300);

  } else if (state === states.VIZ) {
    drawViz();
  } else if (state === states.END) {
    // TODO: draw something to show the user a fortune
    drawViz();
    textSize(60);
    textFont(reenieBeanie);
    textAlign(CENTER, TOP);
    fill(250, 250, 255);
    text(fortune, 200, 200, displayWidth - 200, displayHeight - 200);
  }
 //image(capture, 0, 0, 320, 240);
}

// goes from initial state to reading tarot card
function changeBG() {
  background(10, 10);
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
<<<<<<< HEAD
  alert(getFortune(sign, "love")); //TODO: put in question
  alert(readTarot(0)) //TODO: put in card to read

  alert("Hello, " + name + "\nYour sign is " + sign + getSignEmoji(sign));
=======
>>>>>>> 6321661596154e7d07d78d48928e67d251ab4ad5
}
