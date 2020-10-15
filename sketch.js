var c;

function setup() {
  createCanvas(600, 600);
  background(0);
  strokeWeight(2);
}

function randomColor() {
  var a = random(0, 255);
  var b = random(0, 255);
  var c = random(0, 255);
}

function draw() {
  if (mouseIsPressed == true) {
    var d = random(0, 255);
 var e = random(0, 255);
 var f = random(0, 255);
 stroke(d,e,f);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }

function keyTyped() {
  if (key === 's') {
    saveCanvas('fileName', 'png');
  }
  return false;
}
}
