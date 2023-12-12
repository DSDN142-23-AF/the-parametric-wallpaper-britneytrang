//setup - run once when the code is first starts
function setup() {
  createCanvas(200, 200); // this sets the size of the area in which we can draw things. We call it a canvas
  background(255, 153, 204);
}
//draw - this function loops, the code within read through repeatedly while running
function draw() {

  // BEAR

  fill(153, 0, 76);
  stroke(102, 0, 51);
  strokeWeight(1);
  
  // right arm 
  beginShape();
  curveVertex(154, 66);
  curveVertex(154, 66);
  curveVertex(172, 77);
  curveVertex(183, 100);
  curveVertex(180, 110);
  curveVertex(155, 110);
  curveVertex(155, 110);
  endShape();

  // left arm 
  beginShape();
  curveVertex(140, 66);
  curveVertex(140, 66);
  curveVertex(127, 70);
  curveVertex(115, 80);
  curveVertex(110, 95);
  curveVertex(115, 110);
  curveVertex(130, 110);
  curveVertex(130, 110);
  endShape();
    
  // face, ears, body, feet
stroke(102, 0, 51);
strokeWeight(1);
fill(153, 0, 76);
ellipse(165, 40, 15, 20); // left ear 
ellipse(135, 40, 15, 20); // right ear 
ellipse(120, 115, 50, 20); // right leg
ellipse(145, 95, 45, 60); // body
ellipse(150, 50, 40, 40); // face 
ellipse(170, 110, 30, 35); // right foot 
ellipse(105, 110, 25, 35); // left foot 

// eyes
line(135, 43, 140, 50);//left X eye 
line(140, 43, 135, 50);//left X eye 
line(153, 43, 158, 51);//right X eye 
line(158, 43, 153, 48);//right X eye 

// highlights 
fill(154, 71, 109);
ellipse(172, 114, 23, 28); // right foot 
ellipse(103, 113, 18, 30); // left foot 
ellipse(147, 58, 22, 22); // mouth

fill(153, 0, 76);
triangle(143, 51, 151, 51.5, 146, 55); // nose

noFill();
beginShape(); // right mouth line
  curveVertex(146, 55);
  curveVertex(146, 55);
  curveVertex(146, 59);
  curveVertex(149, 60.5);
  curveVertex(148, 60.5);
  endShape();

  beginShape(); // left mouth line
  curveVertex(146, 59);
  curveVertex(146, 59);
  curveVertex(143, 60);
  curveVertex(143, 60);
  endShape();

    // eyes 
    strokeWeight(0);
    stroke(0);
    fill(70);
    ellipse(45, 155, 25, 25);

    fill(115);
    strokeWeight(0);
    ellipse(45.5, 154, 23, 23.5);

    fill(190);
    strokeWeight(0);
    ellipse(46, 153, 20, 20);
    fill(150);
    strokeWeight(0);
    ellipse(42, 150.5, 13, 13);
    fill(50);
    strokeWeight(0);
    ellipse(42, 149, 10, 10);
    fill(255);
    strokeWeight(0);
    ellipse(41, 145.5, 3, 3);
    quad(54, 154, 55, 157, 52, 163, 52, 157);
    quad(51, 151, 52, 155, 51, 159, 49, 155);


    // pupil
    fill(150);
    strokeWeight(0);
    ellipse(42, 150.5, 13, 13);
    fill(50);
    strokeWeight(0);
    ellipse(42, 149, 10, 10);
    fill(255);
    strokeWeight(0);
    ellipse(41, 145.5, 3, 3);
    quad(54, 154, 55, 157, 52, 163, 52, 157);
    quad(51, 151, 52, 155, 51, 159, 49, 155);
    
}

