var Sun,Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune;
var Sunimg,Mercuryimg,Venusimg,Earthimg,Marsimg,Jupiterimg,Saturnimg,Uranusimg,Neptuneimg;

function preload(){
  Sunimg = loadImage("galaxy/sun.jpg");
  Mercuryimg = loadImage("galaxy/mercury.jpg");
  Venuimg = loadImage("galaxy/venus.jpg");
  /*Earthimg = loadImage ("galaxy/Earth.jpg");
  Marsimg = loadImage("galaxy/Mars.jpg");
  Jupiterimg = loadImage("galaxy/Jupiter.jpg");
  Saturnimg = loadImage("galaxy/Saturn.jpg");
  Uranusimg = loadImage("galaxy/uranus.jpg");
  Neptuneimg = loadImage("galaxy/neptune.jpg");*/
  
}

function setup() {
  createCanvas(800,400);

  Sun = createSprite(400, 200, 50, 50);
  Sun.addImage("Sun",Sunimg);
  Sun.scale = 0.5;

  Mercury = createSprite(380,187, 50, 50);
  Mercury.addImage("Mercury",Mercuryimg);
  Mercury.scale = 0.5;

  Venus = createSprite(400,150, 50, 50);
  Venus.addImage("Venus",Venusimg);
  Earth.scale = 0.5;

  /*Earth = createSprite(400, 200, 50, 50);
  Earth.addImage("Earth",Earthimg);
  Earth.scale = 0.5;

  Mars = createSprite(400, 200, 50, 50);
  Mars.addImage("Mars",Marsimg);
  Mars.scale = 0.5;

  Jupiter = createSprite(400, 200, 50, 50);
  Jupiter.addImage("Jupiter",Jupiterimg);
  Jupiter.scale = 0.5;

  Saturn = createSprite(400, 200, 50, 50);
  Saturn.addImage("Saturn",Saturnimg);
  Saturn.scale = 0.5;

  Uranus = createSprite(400, 200, 50, 50);
  Uranus.addImage("Uranus",Uranusimg);
  Uranus.scale = 0.5;

  Neptune = createSprite(400, 200, 50, 50);
  Neptune.addImage("Neptune",Neptuneimg);
  Neptune.scale = 0.5;*/

  
}

function draw() {
  background("black"); 

  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(angle);

  if(Sun.collide(Mercury)){
    Mercury.destroy;
  }

  if(Sun.collide(Venus)){
    Venus.destroy;
  }

  /*if(Sun.collide(Earth)){
    Earth.destroy;
  }

  if(Sun.collide(Mars)){
    Mars.destroy;
  }

  if(Sun.collide(Jupiter)){
    Jupiter.destroy;
  }

  if(Sun.collide(Saturn)){
    Saturn.destroy;
  }

  if(Sun.collide(Uranus)){
    Uranus.destroy;
  }
  if(Sun.collide(Neptune)){
    Neptune.destroy;
  }*/

  angle= angle = anglespeed;
  if(frameCount % 1 ===0){
    Sun.scale = Sun.scale + 0.01;
  }

  drawSprites();
}