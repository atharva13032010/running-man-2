var invisibleGround1
var invisibleGround2

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  if(path.y > 400 ){
    path.y = height/2;
  }
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
   
  runnerImg = loadAnimation("Runner-1.png, Runner-2.png");
  boy = createSprite();
  boy.setAnimation(runnerImg);

  invisibleGround1 = createSprite(395,200,400,5);
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite(5,200,400,5)
  invisibleGround2.visible = false;
}

function draw() {
  background(0);

}
