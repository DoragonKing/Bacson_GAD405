function setup () {
  console.log("Initialising")

  createCanvas(600,800);

}

function draw () {

  background (116);
  strokeWeight(0);
  fill( 62,106,217 );
  //rectangle 1
  rect(50,400, 10,60);
  rect(60,380,10,100);
  //rectacngle 3
  rect(70,360,10,130);
  rect(80,350,10,80);
  //rectangle 5
  rect(90,340,10,70);
  rect(100,330,10,50);
  //rectangle 7
  rect(110,330,10,40);
  rect(120,320,10,40);
  rect(120,160,10,70);
  //rectangle 9 after this we will have 0.1 rectangles, also these are all blue
}
