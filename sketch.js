
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,bananaGroup; 
var FoodGroup, obstacleGroup, obstacleImage; 
var score


function preload(){
  
  monkey_running =                       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}

function setup() {
  createCanvas(600,400); 
  
  monkey = createSprite(50,320,10,10); 
  monkey.addAnimation("moving", monkey_running); 
  monkey.scale = 0.1;   
  
  ground = createSprite(400,350,900,10); 
  ground.velocityX = -4; 
  ground.x = ground.width/2; 
  
  bananaGroup = new Group(); 
  obstacleGroup = new Group(); 
  
  invisibleGround = createSprite(390,350,900,10); 
  invisibleGround.visible = false; 
}

function draw() {
  background("white"); 
  if (keyDown("space")){
    monkey.velocityY = -12; 
  }  
  
  spawnBanana(); 
  spawnObstacles(); 
  
  monkey.velocityY = monkey.velocityY + 0.8; 
  
  ground.x = ground.width/2; 
  
  monkey.collide(invisibleGround);  
  
  drawSprites(); 
  
  text ("score " + Math.round(frameCount/frameRate()), 500,50); 
}

function spawnObstacles(){
  if (frameCount%300 === 0){
    obstacle = createSprite (300,325,10,10); 
    obstacle.addImage(obstacleImage); 
    obstacle.velocityX = -4;
    obstacle.scale = 0.1; 
    obstacleGroup.add(obstacle); 
  }
}

function spawnBanana(){
  if(frameCount%80 === 0){
    var banana = createSprite(400,120,10,10); 
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200)); 
    //banana.lifetime = 10; 
    banana.scale = 0.1; 
    banana.velocityX = -4; 
    bananaGroup.add(banana); 
  }
}








