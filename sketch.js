
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1000,650);
	paper=new Paper(30,350,40);
	

	Engine.run(engine);
  
}


function draw() {
  
  background("yellow");
 

  groundObject.display();
  dustbinObj.display();
   paper.display();
}
function keyPressed(){
	console.log("inside key pressed")
	if(keyCode === UP_ARROW) {
		console.log("inside up arrow pressed")
		Matter.Body.applyForce(paper.body,paper.body.position,{x:410,y:410})
	}
}
