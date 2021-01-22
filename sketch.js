const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18
var wreckingball
var rope
var ground

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground (500,480,1000,20)
	b1=new Brick (600,100,50,50)
	b2=new Brick (600,100,50,50)
	b3=new Brick (600,100,50,50)
	b4=new Brick (600,100,50,50)
	b5=new Brick (600,100,50,50)
	b6=new Brick (750,100,50,50)
	b7=new Brick (750,100,50,50)
	b8=new Brick (750,100,50,50)
	b9=new Brick (750,100,50,50)
	b10=new Brick (750,100,50,50)
	b11=new Brick (900,100,50,50)
	b12=new Brick (900,100,50,50)
	b13=new Brick (900,100,50,50)
	b14=new Brick (900,100,50,50)
	b15=new Brick (900,100,50,50)
	b16=new Brick(1050,100,50,50)
	b17=new Brick (1050,100,50,50)
	b18=new Brick (1050,100,50,50)

	wreckingball=new Ball (500,300,70)
	rope=new Rope (wreckingball.body,{x:500,y:100})
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display()
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  b13.display()
  b14.display()
  b15.display()
  b16.display()
  b17.display()
  b18.display()
  wreckingball.display()
  rope.display()
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(wreckingball.body, {x: mouseX , y: mouseY});
}



