//import { text } from "body-parser";


//create all the variables
var life = 200;
var score = 0;
var temp = 0;
var less = true;

function setup() {

  //create the canvas
  createCanvas(600,600);

  //create all the objects give velocity to them
   border1 = createSprite(0,295,10,600);
   border2 = createSprite(600,295,10,600);
   border3 = createSprite(295,0,600,10);
   border4 = createSprite(295,600,600,10);
  
   bubble1 = createSprite(10,590,20,20);
   bubble2 = createSprite(590,590,20,20);
   bubble3 = createSprite(50,50,20,20);
   bubble4 = createSprite(590,50,20,20);
   bubble5 = createSprite(60,295,20,20);
   bubble6 = createSprite(530,275,20,20);
   bubble7 = createSprite(295,10,20,20);
   bubble8 = createSprite(295,590,20,20);
   bubble9 = createSprite(500,590,20,20);
   bubble10 = createSprite(480,290,20,20);

  bubble1.velocityY = -2;
  bubble2.velocityY = -2;
  bubble3.velocityY = -2;
  bubble4.velocityY = -2;
  bubble5.velocityY = -2;
  bubble6.velocityY = -2;
  bubble7.velocityY = -2;
  bubble8.velocityY = -2;
  bubble9.velocityY = -2;
  bubble10.velocityY = -2;


  bubble1.velocityX = -3;
  bubble2.velocityX = -3;
  bubble3.velocityX = -3;
  bubble4.velocityX = -3;
  bubble5.velocityX = -3;

  bubble9.velocityX = 3;
  bubble6.velocityX = 3;
  bubble7.velocityX = 3;
  bubble8.velocityX = 3;
  bubble10.velocityX = 3;

  player = createSprite(295,295,40,40);
  player.shapeColor = "white";

  
   bulletgroup = createGroup();


}



function draw() {

  //clear the background
  background(0);
  
  //show the player life and score
  textSize(20);
  fill("white");
  text("Life " + life , 285,350);
  text("Score " + score , 285,390);

  
  
  //make all the bubbles bounce of  with the borders
  bubble1.bounceOff(border1);
  bubble2.bounceOff(border1);
  bubble3.bounceOff(border1);
  bubble4.bounceOff(border1);
  bubble5.bounceOff(border1);
  bubble6.bounceOff(border1);
  bubble7.bounceOff(border1);
  bubble8.bounceOff(border1);
  bubble9.bounceOff(border1);
  bubble10.bounceOff(border1);

  bubble1.bounceOff(border2);
  bubble2.bounceOff(border2);
  bubble3.bounceOff(border2);
  bubble4.bounceOff(border2);
  bubble5.bounceOff(border2);
  bubble6.bounceOff(border2);
  bubble7.bounceOff(border2);
  bubble8.bounceOff(border2);
  bubble9.bounceOff(border2);
  bubble10.bounceOff(border2);

  bubble1.bounceOff(border3);
  bubble2.bounceOff(border3);
  bubble3.bounceOff(border3);
  bubble4.bounceOff(border3);
  bubble5.bounceOff(border3);
  bubble6.bounceOff(border3);
  bubble7.bounceOff(border3);
  bubble8.bounceOff(border3);
  bubble9.bounceOff(border3);
  bubble10.bounceOff(border3);

  bubble1.bounceOff(border4);
  bubble2.bounceOff(border4);
  bubble3.bounceOff(border4);
  bubble4.bounceOff(border4);
  bubble5.bounceOff(border4);
  bubble6.bounceOff(border4);
  bubble7.bounceOff(border4);
  bubble8.bounceOff(border4);
  bubble9.bounceOff(border4);
  bubble10.bounceOff(border4);

  

  //when space is pressed fire the bullets
  if(keyDown(32))
  {
    bullets();
  }
  

  //create edge sprites
  createEdgeSprites();

  
//make the player move in up direction
  if(keyDown(UP_ARROW))
  {
   player.velocityY = -4;

  }

  //reset the  player position
  if(player.y<0)
  {

    player.y = 620;
  }


  //make the player stop
  if(keyDown(DOWN_ARROW))
  {
   player.velocityY = 0;

  }

  //make the score increase
  
  if(bubble1.isTouching(bulletgroup) )
  {
    bubble1.x = 20;
    bubble1.y = 580;
    score = score + 0.5;
    bubble1.velocityY = -4;

  }

  if(bubble2.isTouching(bulletgroup) )
  {
    bubble2.x = 295;
    bubble2.y = 580;
    score = score + 0.5;
    bubble2.velocityY = -4;

  }
  if(bubble3.isTouching(bulletgroup) )
  {
    bubble3.x = 20;
    bubble3.y = 295;
    score = score + 0.5;
    bubble3.velocityY = -4;

  }
  if(bubble4.isTouching(bulletgroup) )
  {
    bubble4.x = 580;
    bubble4.y = 295;
    score = score + 0.5;
    bubble4.velocityY = -4;

  }
  if(bubble5.isTouching(bulletgroup) )
  {
    bubble5.x = 295;
    bubble5.y = 20;
    score = score + 0.5;
    bubble5.velocityY = -4;

  }
  if(bubble6.isTouching(bulletgroup) )
  {
    bubble6.x = 580;
    bubble6.y = 580;
    score = score + 0.5;
    bubble6.velocityY = -4;

  }
  if(bubble7.isTouching(bulletgroup) )
  {
    bubble7.x = 342;
    bubble7.y = 20;
    score = score + 0.5;
    bubble7.velocityY = -4;

  }

  if(bubble8.isTouching(bulletgroup) )
  {
    bubble8.x = 542;
    bubble8.y = 580;
    score = score + 0.5;
    bubble8.velocityY = -4;

  }
  if(bubble9.isTouching(bulletgroup) )
  {
    bubble9.x = 123;
    bubble9.y = 20;
    score = score + 0.5;
    bubble9.velocityY = -4;

  }
  if(bubble10.isTouching(bulletgroup) )
  {
    bubble10.x = 242;
    bubble10.y = 580;
    score = score + 0.5;
    bubble10.velocityY = -4;

  }

  
//make the life decrease
  if(bubble1.isTouching(player) || bubble2.isTouching(player) || bubble3.isTouching(player) || bubble4.isTouching(player) || bubble5.isTouching(player) || bubble6.isTouching(player) || bubble7.isTouching(player) || bubble8.isTouching(player) || bubble9.isTouching(player) || bubble10.isTouching(player))
  {
    life = life - 2;
    less = true;
    

  }

  //make the game over
  if(life === 0)
  {

    temp = 1;
    
    
   

  }

  if(temp === 1)
  {
    bubble1.velocityY = 0;
    bubble2.velocityY = 0;
    bubble3.velocityY = 0;
    bubble4.velocityY = 0;
    bubble5.velocityY = 0;
    bubble6.velocityY = 0;
    bubble7.velocityY = 0;
    bubble8.velocityY = 0;
    bubble9.velocityY = 0;
    bubble10.velocityY = 0;

    bubble1.velocityX = 0;
    bubble2.velocityX = 0;
    bubble3.velocityX = 0;
    bubble4.velocityX = 0;
    bubble5.velocityX = 0;
    bubble6.velocityX = 0;
    bubble7.velocityX = 0;
    bubble8.velocityX = 0;
    bubble9.velocityX = 0;
    bubble10.velocityX = 0;
 
    text("GAME OVER" , 200,200);
    player.velocityY = 0;
    less = false;

  }

   if(less === false)
   {
     life = 0;

   }
  
  
//create draw sprites
  drawSprites();
}


//create the bullets through a function and add the bullets in a group
function bullets()
{


  

  var bull = createSprite(player.x,player.y - 25,10,10);

  
  bull.shapeColor = "red";
  bull.velocityY = -5;

  

  bulletgroup.add(bull);



}


