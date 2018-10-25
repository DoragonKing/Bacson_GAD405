//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialisation:A OK")
  createCanvas(1000,1000);

  frameRate(60);

  textSize(100)
  textAlign(CENTER)

  fill(255,0,0)
  rect(width/2, height/2, 20, 50);
}

//Rendering function
function draw() {
  //Set a background color
  background(110, 100, 255);



  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Rendering...")

  //this is gonna be for the shapes and lines
  //chose to have code for line before circle
  strokeWeight(10);

  stroke(255,0,255);
  line(51,51,width-51,51);

  stroke(0,255,255);
  line(51,51,51,height-51);

  stroke(255,255,255);
  line(51,51,width-51,height-51);
//top right to bottom left
  stroke(255,255,0);
  line(width-51,51,51,height-51);
  //bot left to bot right
  stroke(127.5,255,0);
  line(51,height-51,width-51,height-51);

  stroke(255,127.5,0);
  line(width-51, 51,width-51,height-51);

  strokeWeight(1);
  stroke(0);

  //1st the blue circle
fill(0,0,255);
ellipse (51,51,100,100);

//2nd circle
fill(255,0,0);
ellipse(width-51,51,100,100);

//3rd circle
fill(0,255,0);
ellipse(51, height-51, 100,100);

//4th circle
fill(255,255,0);
ellipse(width-51,height-51,100,100);

fill(255);
  text("Frame Count: " +frameCount, width/2, height/ 4+20);

  text("Frame Rate:  " + Math.round(frameRate()), width/2, height/2+20);


//the noloop will be at the bottom always
  noLoop();
}
