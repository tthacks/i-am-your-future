let userInfoPane;

function setup() {
  createCanvas(500, 680);
  background(100);
  control = new ControlP5(this);
 userInfoPane = new UserInfoPane();
}


function draw() {
  background(100);
  if(userInfoPane.isOpen) {
    userInfoPane.renderPane();
  }
}
