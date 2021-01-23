//variables
var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup,objectsG;
var gameState = "Play";
var end,endImg;
var boyDead,boyDeadImg;


function preload(){
  
//preloading images
pathImg = loadImage("Road.png");
boyImg = loadAnimation("runner1.png","runner2.png");
cashImg = loadImage("cash.png");
diamondsImg = loadImage("diamonds.png");
jwelleryImg = loadImage("jwell.png");
swordImg = loadImage("sword.png");
endImg = loadImage("gameOver.png");
boyDeadImg = loadImage("runner1.png");

}

function setup(){
 
//creating canavas  
createCanvas(400,400);

//creating background
path=createSprite(200,200);
path.addImage(pathImg);
path.scale=1;
// HAVING DOUBT ???
path.y = path.height/4;
path.velocityY = 2;
  
//creating boy running
boy = createSprite(70,370,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.05;
  
//creating new group  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
objectsG=new Group();
  
}


function draw() {

background("black");

//updating score  
if(cashG.isTouching(boy)) {
   cashG.destroyEach();
   treasureCollection = treasureCollection + 5;
  }
  
if(diamondsG.isTouching(boy)) {
   diamondsG.destroyEach();
   treasureCollection = treasureCollection + 10;
  }
  
if(jwelleryG.isTouching(boy)) {
   jwelleryG.destroyEach();
   treasureCollection = treasureCollection + 15;
      
  }
  
//making gamestate end  
if(swordGroup.isTouching(boy)) {
   swordGroup.setVelocityYEach = 0;
   treasureCollection = treasureCollection + 0;
   gameState = "End";
   boyDead = createSprite(boy.x,boy.y,20,20);
   boyDead.addImage("runner1",boyDeadImg);
   boyDead.scale=0.05;
   boy.destroy();
   path.velocityY=0;
  }
  
//if gamestate equal to play
if(gameState === "Play"){
   
  boy.x = World.mouseX;
  createCash();
  createDiamonds();
  createJwellery();
  createSword();
  
}
 
//if gamestate is equal to end  
if(gameState === "End"){
   end = createSprite(200,200,40,40);
   end.addImage("gameOver",endImg);
   end.scale=0.5;
   cashG.destroyEach();
   jwelleryG.destroyEach();
   diamondsG.destroyEach();
   swordGroup.destroyEach(); 
   path.velocityX =0;
   
 }

//boy collide with edges
edges = createEdgeSprites();
boy.collide(edges);


drawSprites();

//printing score
textSize(20);
fill("red");
text("Treasure : "+ treasureCollection,150,30);

console.log(path.y);
}


//creating cash function
function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.1;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}


//creating diamonds function
function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
 }
}


//creating jwellery function
function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.1;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
 }
}


//creating sword function
function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.08;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
 }
}