/* Interactive visualization for Tarot reader */

let TarotVizEnums = [
    /****** LOVE ******/
    // 0. THELOVERS
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
    
    // 1. THREEOFSWORDS
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
    
    // 2. NINEOFCUPS
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
    
    // 3. THREEOFCUPS
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
    
    // 4. TWOOFCUPS
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
    
    /****** CAREER ******/
    // SIXOFPENTACLES
    {
        t: 0,
        timeIncrement: 0.01,
        r: 1,
        g: 1,
        b: 1,
        colorRandom: 250,
        lineWidth: 20,
        ellipseDistanceX: 50,
        ellipseDistanceY: 30,
        randomX: 0,
        randomY: 0    
    }

    // HANGEDWOMAN
    
    // KINGOFCUPS
    
    // FOUROFSWORDS
    
    // EIGHTOFSWORDs
    
    
    /****** LIFE ******/
    // HIGHPRIESTESS
    
    // ACEOFCUPS
    
    // THEDEVIL
    
    // PRINCESSOFSWORDS
    
    // HIEROPHANT
    
  ];
  
  let tarot;
  
  function setup() {
    createCanvas(900, 700);
    noStroke();
    tarot = new Tarot(TarotVizEnums[4]);
  }
  
  function draw() {
    background(10, 10); // translucent background (creates trails)
  
    // make a x and y grid of ellipses
    for (let x = 0; x <= width; x = x + random(tarot.ellipseDistanceX, tarot.ellipseDistanceX+tarot.randomX)) {
      for (let y = 0; y <= height; y = y + random(tarot.ellipseDistanceY, tarot.ellipseDistanceY+tarot.randomY)) {
        // starting point of each circle depends on mouse position
        const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
        const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
        // and also varies based on the particle's location
        const angle = xAngle * (x / width) + yAngle * (y / height);
  
        // each particle moves in a circle
        const myX = x + 30 * cos(2 * PI * tarot.t + angle);
        const myY = y + 30 * sin(2 * PI * tarot.t + angle);
  
        fill(random(tarot.r, tarot.r+tarot.colorRandom), 
             random(tarot.g, tarot.g+tarot.colorRandom), 
             random(tarot.b, tarot.b+tarot.colorRandom));
        ellipse(myX, myY, tarot.lineWidth); // draw particle
      }
    }
  
    tarot.t = tarot.t + tarot.timeIncrement;
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
  