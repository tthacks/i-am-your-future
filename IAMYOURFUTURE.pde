import controlP5.*;

ControlP5 cp5;
UserInfoPane uip;

boolean paneIsOpen;
PVector userPanePos;

int page = 0; 
String name = "";


void setup() {
size(1000, 1000);
background(0);
cp5 = new ControlP5(this);
userPanePos = new PVector(width / 4, height / 3);
uip = new UserInfoPane(width, height);
paneIsOpen = true;
String name = "";

//setup controllers for panes
  cp5.addTextfield("INSERT YOUR NAME")
  .setPosition(userPanePos.x + 30, userPanePos.y + 30)
  .setSize(uip.wid * 3 / 4, 20)
  .setFont(createFont("arial", 12))
  .setValue(name);
  
  cp5.addButton("next")
  .setPosition(uip.pos.x + 30, uip.pos.y + 200)
  .setValue(0);
}

void draw() {
  background(0);
if(paneIsOpen) {
  stroke(255);
  fill(240, 240, 240, 30);
  rect(userPanePos.x, userPanePos.y, width / 2, height / 3);
}
}

void next(int theValue) {
  page++;
  if(page == 2)
  {
    paneIsOpen = false;
  }
  println("Value of page: " + page);
}
