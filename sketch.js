function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  background("pink");
}

function draw() {
  noFill();

  let myColor = lerpColor(color("#8A2BE2"), color("#FF8C00"), frameCount / 180); //provide the functions you use (lerpcolor)

  stroke(myColor); //use the variable

  translate(width / 2, height / 2);
  rotate(frameCount * 3);

  rect(45, 100, 10);
  rect(90, 12, 200);

  if (frameCount === 120) {
    noLoop();
  }

  translate(width / 4, height / 4);
  rotate(frameCount * 3);
  rect(10, 10, 10);

  if (frameCount === 120) {
    noLoop();
  }
}
