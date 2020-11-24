
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var db,pap,dustbin,paperball;
function preload()
{
	db=loadImage("dustbingreen.png")
	pap=loadImage("paper.png");
}

function setup() {
	stroke("black");
	strokeWeight(5);
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
Engine.update(engine);


paperball=createSprite(300,200,70,70)
paperball.addImage(pap);
paperball.scale="0.4"

dustbin=createSprite(600,615,100,100)
dustbin.addImage(db);
dustbin.scale="0.4"


	
paper= new Paper(100,655,25,25);
box1=new Box(600,665,100,20);
box2=new Box(540,615,20,100);
box3=new Box(660,615,20,100);
ground=new Ground(400,690,800,20);

Engine.run(engine);
	
  
}


//function draw() {
  
  background(255);
  paperball.x=paper.body.position.x
  paperball.y=paper.body.position.y

paper.display();
ground.display();
box1.display();

box2.display();
box3.display();

drawSprites();
}

function keyPressed(){
if (keyCode === UP_ARROW){

	Body.applyForce(paper.body,paper.body.position,{x:95,y:-85});

}
if (keyCode === DOWN_ARROW){

	Body.applyForce(paper.body,paper.body.position,{x:-95,y:-85});

}
}

