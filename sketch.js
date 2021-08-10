var path,boy,power;
var drink,coin,bomb;
var pathimg,runner;
var invisibleground1,invisibleground2;


function preload(){
  //pre-load images
  pathimg=loadImage("path.png");
  runner=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
    path.addImage(pathimg);
    path.velocityY=4;
    path.scale=1.2;

  boy = createSprite(320,300);
    boy.addAnimation("runner",runner);
    boy.scale=0.09;

  invisibleground1 = createSprite(20,200,50,400);
    invisibleground1.visible = false; 


  invisibleground2 = createSprite(380,200,50,400);
    invisibleground2.visible = false;
}


function draw() {
  background(0);

  if (path.y>350)
  {
    path.y= height/2;
  }


  boy.x=mouseX;
    if (boy.x>300)
    {
      path.velocityY=0;
      boy.visible=false;
    }

    if (boy.x50)
    {
      path.velocityY=0;
      boy.visible=false;
      
    }

  boy.collide(invisibleground1);
  boy.collide(invisibleground2);

  drawSprites();
}
