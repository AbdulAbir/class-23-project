const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies; 

var engine,world;



function setup() {
  
  createCanvas(windowWidth,windowHeight);
 
 engine =  Engine.create();
 world = engine.world

 ball1 = new ball(200,200,40,40);
 ball2 = new ball(200,200,40,40);
 ground11 = new ground(0,800,4000,20);
}

function draw() {
 background("red");
  Engine.update(engine);  
  ball1.display();
  ball2.display();
  ground11.display();
}