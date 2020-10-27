var c;
let noiseOffset= 0.0;
let strokeWidth=2;

function setup() {
  createCanvas(600, 600);
  background(0);
}

function randomColor() {
  var a = random(0, 255);
  var b = random(0, 255);
  var c = random(0, 255);
}

function draw() {
    strokeWeight(strokeWidth);
  noiseOffset+=0.05;
  strokeWidth= noise(noiseOffset) * 20;

  if (mouseIsPressed == true) {
    var d = random(0, 255);
    var e = random(0, 255);
    var f = random(0, 255);
    stroke(d, e, f);
    line(mouseX, mouseY, pmouseX, pmouseY);}
  function keyTyped() {
    if (key === 's') {
      //save the image
      saveCanvas('fileName', 'png');
    } else if (key === 'c') {
      //clear the image
      clear();
    } else if (key === 'e') {
      //eraser tool
      noStroke();
      fill('black');
      ellipse(mouseX, mouseY, 50, 50);
      x = mouseY;
      y = mouseX;
    }
    return false;
  }
}
