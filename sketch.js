
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;

var KOBE_BRYANT;
var KOBE_BEAN;
var BEAN_BRYANT;



function preload()
{
 
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

  paper1 = new Paper(100,640,20);
  
  
  ground = new Ground(600,790,1200,20);

  KOBE_BRYANT = new Kobe(900,730,20,150);
	KOBE_BEAN = new Kobe(1000,780,200,20);
	BEAN_BRYANT = new Kobe(1100,730,20,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);

 
  
  paper1.display();
  
  ground.display();

  KOBE_BRYANT.display();
  KOBE_BEAN.display();
BEAN_BRYANT.display();
  
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
   
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85, y:-85});

 }
 }




