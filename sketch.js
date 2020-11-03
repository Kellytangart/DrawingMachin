var hue;
var rainbow = true;
var words = ["Press r for a topic", "Tamagotchi", "Mighty Beans", "Ipod", "Tech Deck", "Idog", "ZhuZhu Pets", "Beyblade", "Aquapets"];
var index = 0

function setup() {
  createCanvas(890, 600);
  background(0);
  strokeWeight(2);
  hue = 0;
  cursor('tool.png')
}

function draw() {
  cursor('tool.png')
  fill('pink');
  textSize(22);
  textFont("Comic Sans MS");
  text(words[index], 25, 25);
}

function mouseDragged() {
  if (rainbow) {
    if (hue > 360) {
      hue = 0;
    } else {
      hue++;
    }
  }
  colorMode(HSL, 360);
  stroke(hue, 200, 200);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyTyped() {
  if (key === 's') {
    //save the image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    //clear the image
    clear();
    background(0);
  } else if (key === 'o') {
    //eraser tool
    noStroke();
    fill('black');
    ellipse(mouseX, mouseY, 50, 50);
    x = mouseY;
    y = mouseX;
  } else if (key === 'r') {
    index = Math.floor(random(0, words.length));
    clear();
    background(0);
  }
  return false;
}
