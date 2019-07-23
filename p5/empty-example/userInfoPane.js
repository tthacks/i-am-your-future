class UserInfoPane {
 
    constructor() {
      this.paneWidth = 100;
      this.paneHeight = 150;
      this.isOpen = true;
      this.xPos = width/2 - this.paneWidth / 2;
      this.yPos = height/2 - this.paneHeight / 2;
      this.name = '';
      this.step = 0;
    }
    
     display() {
       fill(230);
       stroke(255);
       rect(this.xPos, this.yPos, this.paneWidth, this.paneHeight);
     }
    
   }//end class