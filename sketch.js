//Click on Object Example
let green = { //Green Circle
  x: 150,
  y: 100,
  d: 75
};

let magenta = { //Magenta Circle
  x: 375,
  y: 375,
  d: 175
};

let orange = { //Orange Circle
  x: 100,
  y: 300,
  d: 100
};

function preload() {
  static = loadImage("Static.png");
  comp = loadImage("computer4.png");
}

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  imageMode(CORNER); 
  background(static);

  fill('green');
  ellipse(green.x, green.y, green.d, green.d);

  fill('magenta');
  ellipse(magenta.x, magenta.y, magenta.d, magenta.d);

  fill('orange');
  ellipse(orange.x, orange.y, orange.d, orange.d);
  
  if (mouseIsPressed) {
    click();
  }

}

function click() {
  let button = dist(mouseX, mouseY, orange.x, orange.y);
  if (button <= 50) {
    imageMode(CENTER); 
    image(comp, orange.x, orange.y);
    console.log("click!");
  }
}