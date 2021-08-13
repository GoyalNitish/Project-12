var garden,rabbit;
var gardenImg,rabbitImg;
var leaf,apple;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  ai=loadImage("apple.png");
  li=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

rabbit.x=mouseX
var select_sprite = Math.round(random(1,2));

if (frameCount % 80 ==0){
  if(select_sprite==1){
    createApples();
  }
  else{
    createLeaves();
  }
}


  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(ai);
  apple.scale=0.05;
  apple.velocityY=4
  apple.lifetime=100;
}

function createLeaves(){
leaf=createSprite(random(50,350),40,10,10);
leaf.addImage(li);
leaf.scale=0.05;
leaf.velocityY=4;
leaftime=100;

}





































