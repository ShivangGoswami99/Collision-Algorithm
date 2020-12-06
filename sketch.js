//variables
var movingRect,fixedRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  //creating sprites
  movingRect=createSprite(400, 20, 80, 30);
  //colour
  movingRect.shapeColor="cyan";
  //movingRect.debug="true";
  //sprite
  fixedRect=createSprite(600,400,50,80);
  //colour
  fixedRect.shapeColor="cyan";
  //fixedRect.debug="true";

  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="cyan";

  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="cyan";

  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="cyan";

  gameObject4=createSprite(400,100,50,50);
  gameObject4.shapeColor="cyan";
}

function draw() {
  //background
  background("black");  

// follow the mouse
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

  if(isTouching(movingRect,gameObject2)) {
    movingRect.shapeColor="red";
    gameObject2.shapeColor="red";
  }
  else {
    movingRect.shapeColor="cyan";
    gameObject2.shapeColor="cyan";
  }
   //drawing Sprites
  drawSprites();
}

function isTouching(object1,object2) {
  if (object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    && object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object2.height/2
    ) {
      return true;    
    }
   else {
     return false;
   }
}