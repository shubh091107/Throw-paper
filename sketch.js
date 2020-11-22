
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1
var box2
var box3
var ground
var paper1


function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(1300,650,200,20)
	box2 = new Box(1400,610,20,100)
	box3 = new Box(1200,610,20,100)
	ground = new Floor(750,690)
    paper1 = new Paper(100,650)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ground.display()
  paper1.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.75,y:-0.3})
	}
}



