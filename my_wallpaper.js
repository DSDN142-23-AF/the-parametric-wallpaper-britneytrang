//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(255, 153, 204); //pink
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

    drawBear(0,0)
    drawEye(50,150)
  
}
    function drawEye(eyeX, eyeY) {
 
        fill(70); // dark grey 
        strokeWeight(0);
        ellipse(eyeX - 9, eyeY + .5, 32, 32);
        fill(150); // grey 
        strokeWeight(0);
        ellipse(eyeX - 8, eyeY - 1, 28, 28);
        fill(200); // light grey
        strokeWeight(0);
        ellipse(eyeX-7, eyeY - 3, 24, 24);
        

        // pupil
    fill(150); // grey
    strokeWeight(0);
    ellipse(eyeX - 13, eyeY - 8, 13, 13);
    fill(50); // black 
    strokeWeight(0);
    ellipse(eyeX - 14, eyeY - 9, 10, 10);
    fill(255); // white
    strokeWeight(0);
    ellipse(eyeX - 15, eyeY - 13, 3, 3);
    quad(50, 150, 53, 157, 49, 163, 46, 157);
   quad(45, 145, 48, 150, 44, 155, 40, 150);

    }

function drawBear(x,y){

  drawEye(110, 100)

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
}