/* Interactive visualization for Tarot reader */

let TarotVizEnums = [
    /************************* CAREER *************************/
    // SIXOFPENTACLES: 1,
    {
        t: 0,
        timeIncrement: 0.01,
        r: 1,
        g: 1,
        b: 1,
        colorRandom: 250,
        lineWidth: 15,
        ellipseDistanceX: 50,
        ellipseDistanceY: 30,
        randomX: 0,
        randomY: 0    
    },
  
    // HANGEDWOMAN: 2,
    {
        t: 0,
        timeIncrement: 0.01,
        r: 1,
        g: 1,
        b: 1,
        colorRandom: 250,
        lineWidth: 15,
        ellipseDistanceX: 50,
        ellipseDistanceY: 30,
        randomX: 0,
        randomY: 0    
    },
  
    // KINGOFCUPS: 3,
    {
        t: 0,
        timeIncrement: 0.01,
        r: 1,
        g: 1,
        b: 1,
        colorRandom: 250,
        lineWidth: 15,
        ellipseDistanceX: 50,
        ellipseDistanceY: 30,
        randomX: 0,
        randomY: 0    
    },
  
    // FOUROFSWORDS: 4,
    {
        t: 0,
        timeIncrement: 0.01,
        r: 1,
        g: 1,
        b: 1,
        colorRandom: 250,
        lineWidth: 15,
        ellipseDistanceX: 50,
        ellipseDistanceY: 30,
        randomX: 0,
        randomY: 0    
    },
  
    // EIGHTOFSWORDS: 5,
    {
        t: 0,
        timeIncrement: 0.01,
        r: 1,
        g: 1,
        b: 1,
        colorRandom: 250,
        lineWidth: 15,
        ellipseDistanceX: 50,
        ellipseDistanceY: 30,
        randomX: 0,
        randomY: 0    
    },
  
    /************************* LIFE *************************/
   
    // HIGHPRIESTESS: 6,
    {
        t: 0,
        timeIncrement: 0.01,
        r: 1,
        g: 1,
        b: 1,
        colorRandom: 250,
        lineWidth: 15,
        ellipseDistanceX: 50,
        ellipseDistanceY: 30,
        randomX: 0,
        randomY: 0    
    },
  
    // ACEOFCUPS: 7,
    {
        t: 0,
        timeIncrement: 0.01,
        r: 1,
        g: 1,
        b: 1,
        colorRandom: 250,
        lineWidth: 15,
        ellipseDistanceX: 50,
        ellipseDistanceY: 30,
        randomX: 0,
        randomY: 0    
    },
  
    // THEDEVIL: 8,
    {
        t: 0,
        timeIncrement: 0.01,
        r: 1,
        g: 1,
        b: 1,
        colorRandom: 250,
        lineWidth: 15,
        ellipseDistanceX: 50,
        ellipseDistanceY: 30,
        randomX: 0,
        randomY: 0    
    },
  
    // PRINCESSOFSWORDS: 9,
    {
        t: 0,
        timeIncrement: 0.01,
        r: 1,
        g: 1,
        b: 1,
        colorRandom: 250,
        lineWidth: 15,
        ellipseDistanceX: 50,
        ellipseDistanceY: 30,
        randomX: 0,
        randomY: 0    
    },
  
    // HIEROPHANT: 10,
    {
        t: 0,
        timeIncrement: 0.01,
        r: 1,
        g: 1,
        b: 1,
        colorRandom: 250,
        lineWidth: 15,
        ellipseDistanceX: 50,
        ellipseDistanceY: 30,
        randomX: 0,
        randomY: 0    
    },
  
    /************************* LOVE *************************/
    // THELOVERS: 11,
    {
        t: 0,
        timeIncrement: 0.001,
        r: 150,
        g: 50,
        b: 100,
        colorRandom: 100,
        lineWidth: 10,
        ellipseDistanceX: 40,
        ellipseDistanceY: 25,
        randomX: 0,
        randomY: 0    
    },
    
    // NINEOFCUPS: 12,
    {
        t: 0,
        timeIncrement: 0.001,
        r: 200,
        g: 50,
        b: 30,
        colorRandom: 50,
        lineWidth: 8,
        ellipseDistanceX: 40,
        ellipseDistanceY: 10,
        randomX: 0,
        randomY: 0    
    },
    
    // THREEOFSWORDS: 13,
    {
        t: 0,
        timeIncrement: 0.005,
        r: 150,
        g: 50,
        b: 100,
        colorRandom: 100,
        lineWidth: 10,
        ellipseDistanceX: 20,
        ellipseDistanceY: 50,
        randomX: 0,
        randomY: 0    
    },
    
    // THREEOFCUPS: 14,
    {
        t: 0,
        timeIncrement: 0.001,
        r: 150,
        g: 150,
        b: 100,
        colorRandom: 100,
        lineWidth: 10,
        ellipseDistanceX: 40,
        ellipseDistanceY: 25,
        randomX: 0,
        randomY: 0    
    },
    
    // TWOOFCUPS: 15,
    {
        t: 0,
        timeIncrement: 0.001,
        r: 130,
        g: 100,
        b: 200,
        colorRandom: 100,
        lineWidth: 10,
        ellipseDistanceX: 40,
        ellipseDistanceY: 55,
        randomX: 5,
        randomY: 0    
    },    
  ];
  
  let vTarot;
  
  function setupViz(value) {
    // createCanvas(900, 700);
    noStroke();
    vTarot = new Tarot(TarotVizEnums[value]);
  }
  
  function drawViz() {
    background(10, 10); // translucent background (creates trails)
  
    // make a x and y grid of ellipses
    for (let x = 0; x <= width; x = x + random(vTarot.ellipseDistanceX, vTarot.ellipseDistanceX+vTarot.randomX)) {
      for (let y = 0; y <= height; y = y + random(vTarot.ellipseDistanceY, vTarot.ellipseDistanceY+vTarot.randomY)) {
        // starting point of each circle depends on mouse position
        const xAngle = map(handPosX, 0, width, -4 * PI, 4 * PI, true);
        const yAngle = map(handPosY, 0, height, -4 * PI, 4 * PI, true);
        // and also varies based on the particle's location
        const angle = xAngle * (x / width) + yAngle * (y / height);
  
        // each particle moves in a circle
        const myX = x + 30 * cos(2 * PI * vTarot.t + angle);
        const myY = y + 30 * sin(2 * PI * vTarot.t + angle);
  
        fill(random(vTarot.r, vTarot.r+vTarot.colorRandom), 
             random(vTarot.g, vTarot.g+vTarot.colorRandom), 
             random(vTarot.b, vTarot.b+vTarot.colorRandom));
        ellipse(myX, myY, vTarot.lineWidth); // draw particle
      }
    }
  
    vTarot.t = vTarot.t + vTarot.timeIncrement;
  }
  
  class Tarot {
    constructor(inputVal) {
        this.lineWidth = inputVal.lineWidth;
        this.t = inputVal.t;
        this.timeIncrement = inputVal.timeIncrement;
        this.r = inputVal.r;
        this.g = inputVal.g;
        this.b = inputVal.b;
        this.colorRandom = inputVal.colorRandom;
        this.lineWidth = inputVal.lineWidth;
        this.ellipseDistanceX = inputVal.ellipseDistanceX;
        this.ellipseDistanceY = inputVal.ellipseDistanceY;
        this.randomX = inputVal.randomX;
        this.randomY = inputVal.randomY;
    }
  }
  