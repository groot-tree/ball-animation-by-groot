var ball1 = createSprite(0, 200,10,10);
ball1.shapeColor = "purple";
ball1.velocityY = -5;
ball1.velocityX = 5;

var ball2 = createSprite(400,200,10,10);
ball2.shapeColor = "purple";
ball2.velocityY = -5;
ball2.velocityX = 5;

var ball3 = createSprite(200,0,10,10);
ball3.shapeColor = "yellow";
ball3.velocityY = 5;
ball3.velocityX = -5;

var ball4 = createSprite(200,400,10,10);
ball4.shapeColor = "yellow";
ball4.velocityY = 5;
ball4.velocityX = -5;

var ball5 = createSprite(0, 200,10,10);
ball5.shapeColor = "yellow";
ball5.velocityY = 5;
ball5.velocityX = -5;

var ball6 = createSprite(400,200,10,10);
ball6.shapeColor = "yellow";
ball6.velocityY = 5;
ball6.velocityX = -5;

var ball7 = createSprite(200,0,10,10);
ball7.shapeColor = "purple";
ball7.velocityY = -5;
ball7.velocityX = 5;

var ball8 = createSprite(200,400,10,10);
ball8.shapeColor = "purple";
ball8.velocityY = -5;
ball8.velocityX = 5;


var ball9 = createSprite(0,400,15,15);
ball9.shapeColor = "white";
ball9.velocityY = -7.5;
ball9.velocityX = 7.5;

var ball10 = createSprite(400,0,15,15);
ball10.shapeColor = "black";
ball10.velocityY = 7.5;
ball10.velocityX = -7.5;

var ball11 = createSprite(400,400,15,15);
ball11.shapeColor = "white";
ball11.velocityY = -7.5;
ball11.velocityX = 7.5;

var ball12 = createSprite(0,0,15,15);
ball12.shapeColor = "black";
ball12.velocityY = 7.5;
ball12.velocityX = -7.5;

var ball13 = createSprite(200,400,20,20);
ball13.shapeColor = "gold";
ball13.velocityY = -6;

var ball14 = createSprite(200,0,20,20);
ball14.shapeColor = "silver";
ball14.velocityY = 6;

var ball15 = createSprite(0,200,20,20);
ball15.shapeColor = "gold";
ball15.velocityX = 6;

var ball16 = createSprite(400,200,20,20);
ball16.shapeColor = "silver";
ball16.velocityX = -6;
















function draw() {
  
  background("red");
  
  
  createEdgeSprites();
  
  ball1.bounceOff(edges);
  
  ball2.bounceOff(edges);
  
  ball3.bounceOff(edges);
  
  ball4.bounceOff(edges);
  
  ball5.bounceOff(edges);
  
  ball6.bounceOff(edges);
  
  ball7.bounceOff(edges);
  
  ball8.bounceOff(edges);
  
  ball9.bounceOff(edges);
  
 ball10.bounceOff(edges);
  
ball11.bounceOff(edges);

ball12.bounceOff(edges);

ball13.bounceOff(edges);

ball14.bounceOff(edges);

ball15.bounceOff(edges);

ball16.bounceOff(edges);

    drawSprites();
}