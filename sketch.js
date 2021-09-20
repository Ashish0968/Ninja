var ninja , ninjaRunning , ninjaAttack1 , ninjaAttack2 ;
var bg ,bgImg ;

function preload(){
ninjaRunning = loadImage("Running.gif");
ninjaAttack1 = loadImage("Attack.gif");
ninjaAttack2 = loadImage("Attack 2.gif");

bgImg =loadImage("bg.gif")

}

function setup() {
  createCanvas(1250,610);
  ninja = createSprite(150, 400, 50, 50);
  ninja.scale = 0.5

  bg = createSprite(625,305,1250,610)
  bg.addImage("bg",bgImg)
  bg.velocityX = -2

  ninja.addImage("ninjaRunning",ninjaRunning);
}

function draw() {
  background(0);  
  drawSprites();
}