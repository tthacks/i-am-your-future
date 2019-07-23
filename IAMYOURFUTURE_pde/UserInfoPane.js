import * as cp5 from 'controlP5';

class UserInfoPane {
 
 constructor() {
   this.cp5 = new ControlP5(this);
   this.paneWidth = 100;
   this.paneHeight = 150;
   this.isOpen = true;
   this.xPos = width/2 - this.paneWidth / 2;
   this.yPos = height/2 - this.paneHeight / 2;
   this.name = '';
   this.step = 0;
 }
 
  renderPane() {
    fill(230);
    stroke(255);
    rect(this.xPos, this.yPos, this.paneWidth, this.paneHeight);
    nameField = cp5.addTextField("myName");
    nameField.setPosition(this.xPos, this.yPos);
    
  }
  
 goNext(step) {
   step = step + 1;
   if(step == 1) { //final step
   this.isOpen = false;
   }
 }//end goNext
 
}//end class
