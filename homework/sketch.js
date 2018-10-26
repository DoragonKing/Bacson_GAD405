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
  rect(130,100,10,150);
  rect(130,320,10,30);
  rect(140,90,10,200);
  rect(140,330,10, 20);
  //line 11
  rect(150,80,10,220);
  rect(160,70,10,240);
  //line 13
  rect(170,70,10,90);
  rect(180,60,10,90);
  //line 15
  rect(190,60,10,80);
  rect(200,60,10,70);
  //line 17
  rect(210,60,10,60);
  rect(220,60,60,50);
  //line24, skipped due to 18 being larger
  rect(280,70,10,50);
  rect(290,70,10,60);
  //back track, forgot to due the bangs
  rect(220,150,70,10);
  rect(230,170,50,10);
  rect(240,180,30,10);
  rect(250,190,10,10);
  //that's the bangs done, now back to the normal pattern
  //now on line 26
  rect(300,80,10,60);
  rect(310,80,10,80);
  //line 28
  rect(320,90,10,110);
  rect(320, 270 ,10 ,40);
  rect(330, 110 ,10 ,200);
  //line 30
  rect(340, 120 ,10 ,180);
  rect(350, 140,10,140);
  //last one
  rect(360,150,10,110);

  //hair shade starts at x=100 pixels
  fill(75,35,99)
  rect(100,170,10,90)
  rect(110,160,10,120)
  //following line x1
  rect(120,230,10,60)
  rect(130,250,10,50)
  rect(130,310,60,10)
  //here is the corner pieces, the code gets unorganised here
  rect(140,290,10,10)
  rect(170,300,10,10)
  rect(140,320,30,10)
  rect(150,330,10,10)
  //hair shine, not done yet, will do later
  //now its all metal

  fill(202)
  rect(90,90,10,30)

}
