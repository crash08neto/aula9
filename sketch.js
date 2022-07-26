var balls;
function setup() {
  createCanvas(400,400);
  balls = createSprite(200, 200, 20, 20)
}

function draw() 
{
  background("black");
  if(keyDown("w")){
    balls.velocityY = -2
  }
  if(keyDown("a")){
    balls.velocityX = -2
  }
    if(keyDown("s")){
    balls.velocityY = 2
  }
    if(keyDown("d")){
    balls.velocityX = 2
  }

drawSprites();
}




