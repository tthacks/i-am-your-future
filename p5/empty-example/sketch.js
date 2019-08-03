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

let reenieBeanie, robotoLite, oleo, caviarDreams, caviarDreamsBold;
function preload() {
  reenieBeanie = loadFont('assets/reenieBeanie.ttf');
  robotoLite = loadFont('assets/Roboto-Light.ttf');
  oleoBold = loadFont('assets/OleoScriptSwashCaps-Bold.ttf');
  oleoReg = loadFont('assets/OleoScriptSwashCaps-Regular.ttf');
  caviarDreams = loadFont('assets/CaviarDreams.ttf');
  caviarDreamsBold = loadFont('assets/Caviar_Dreams_Bold.ttf');
  caviarDreamsItalic = loadFont('assets/CaviarDreams_Italic.ttf');
}

var oldDisplayWidth;
var oldDisplayHeight;

let textX;
let textY;
let textGapY;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  name = "";
  birthday = "";
  panePos = createVector(displayWidth / 2, displayHeight/2-10);
  paneSize = createVector(displayWidth / 3 - 80, displayHeight / 3 + 50);

  textX = displayWidth/3 + 90 + 120;
  textY = displayHeight/2 - 135;
  textGapY = 70;

  button = createButton('Next');
  button.position(displayWidth/2 - button.width/2 - 13, textY + textGapY*3 + 70);
  button.mousePressed(changeBG);
  button.size(45, 45);
  button.style('color: white; border-radius: 50%; background-color: purple; border-style:none');

  inp = createInput('');
  inp.position(textX+35, textY + textGapY*1.4);
  inp.size(178, 20);
  inp.input(nameEvent);

  birthInput = createInput('');
  birthInput.position(textX+60, textY + textGapY*2.7 + 28);
  birthInput.size(120, 20)
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

// state = states.VIZ;
 //name = "eee";
 //sign = "Leo";
 //tarot = {name: "Three of Swords", value: 13, type: "Love"}; 
// fortune = "rejjhgrjehgkrhc gjkrhgkhrtkghkrtg hjkrthgkrtghj khvjldsjv knvkren vekrjh giehgvj krenkv  njkrenve krhvukdhvie hrierhver";

function randomQR() {
  if (state === states.QR) {
    var r = Math.floor(Math.random() * 15) + 1;
    state = states.VIZ;
    tarot = TarotEnum.properties[r];
    setupViz(tarot.value);
    setTimeout(transitionToEnd, 3000);

  }
}

var once = false;
function draw() {
  if(state === states.INIT) {
    /* The main page to get user input */
    drawViz();
    textSize(80);
    rectMode(CENTER);
    textFont(reenieBeanie);
    fill(250, 250, 255);
    text("I Am Your Future", displayWidth /3 + 95 , displayHeight / 4);
    noStroke();
    //fill(color(153, 51, 255, 20));
    fill(color(164, 0, 220, 140));
    
    rect(panePos.x, panePos.y, paneSize.x-60, paneSize.y, 30);
    textSize(30);
    textFont(caviarDreams);
    fill(250, 250, 255);

    text("First, let us stalk you", textX, textY);
    textSize(20);
    
    text("Your beautiful name", textX + 33, textY + textGapY);
    text("The first day you saw the light of the world (mm/dd)", textX-100, textY + textGapY*2.7);

    //image(img, displayWidth / 2 - 40, displayHeight / 3 + 40);
  } else if (state === states.QR) {
    /* The page to scan tarot QR code */
    noStroke();
    drawViz();
    textFont(caviarDreamsBold);
    textSize(60);
    rectMode(CENTER);
    stroke(0);
    fill(250, 250, 255);
    text("Take a deep breath in \n\n Pick your Tarot card \n\n Scan Your Tarot QR code", displayWidth / 4 + 30, displayHeight / 4 - 90);
    imageMode(CENTER);
    image(capture, displayWidth / 2 , displayHeight / 2, 500, 500);
    if (!once) {

      setTimeout(randomQR, 10000);
      once = true;
    }

  } else if (state === states.VIZ) {
    /* Interactive page where user waves hand */
    noStroke();
    drawViz();
    textSize(80);
    textFont(caviarDreamsBold);
    rectMode(CENTER);
    stroke(0);
    fill(250, 250, 255);
    textAlign(CENTER);
    text("Wave your hand \n\n to gather the energy \n\n from the universe!",displayWidth / 2, displayHeight / 2, displayWidth - 200, displayHeight - 200);
  } else if (state === states.END) {
    /* Final page to show fortune message */
    noStroke();
    drawViz();
    stroke(0);
    textSize(60);
    textFont(caviarDreamsBold);
    rectMode(CENTER);
    fill(250, 250, 255);
    text(fortune, displayWidth / 2, displayHeight / 2, displayWidth - 200, displayHeight - 200);
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
}
