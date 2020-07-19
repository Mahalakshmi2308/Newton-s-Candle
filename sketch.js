
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var groundObject,rope1,rope2,rope3,rope4,rope5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundObject=new roof(350,200,210,20);
    World.add(world,groundObject);
	
	bobObject1 = new bob(270,400,20);
	World.add(world,bobObject1);

	bobObject2 = new bob(310,400,20);
	World.add(world,bobObject2);

	bobObject3 = new bob(350,400,20);
	World.add(world,bobObject3);

	bobObject4 = new bob(390,400,20);
	World.add(world,bobObject4);

	bobObject5 = new bob(430,400,20);
	World.add(world,bobObject5);

	rope1 = new rope(bobObject1.body,groundObject.body);
	World.add(world,rope1);

	rope2 = new rope(bobObject2.body,groundObject.body);
	World.add(world,rope2);

	rope3 = new rope(bobObject3.body,groundObject.body);
	World.add(world,rope3);

	rope4 = new rope(bobObject4.body,groundObject.body);
	World.add(world,rope4);

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(255,255,255);
  
  groundObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.dipslay();
  rope4.display();
 
}



