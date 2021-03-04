const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob
var rope
var ground
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var engine, world;

function setup(){
    var canvas = createCanvas(3000,800)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600,600,2200,20);

    bob = new Bob (300,200,40);
    rope = new Rope(bob.body, { x: 500, y: 50 });

    b1 = new Box(700,100,50,50) //700
    b2 = new Box(700,100,50,50)
    b3 = new Box(700,100,50,50)
    b4 = new Box(700,100,50,50)
    b5 = new Box(700,100,50,50)
    b6 = new Box(700,100,50,50)

    b7 = new Box(900,100,50,50) //900
    b8 = new Box(900,100,50,50)
    b9 = new Box(900,100,50,50)
    b10 = new Box(900,100,50,50)

    b11 = new Box(800,100,50,50) //800
    b12 = new Box(800,100,50,50)
    b13 = new Box(800,100,50,50)
    b14 = new Box(800,100,50,50)
    b15 = new Box(800,100,50,50)
    b16 = new Box(800,100,50,50)

    b17 = new Box(700,100,50,50) //700
    b18 = new Box(700,100,50,50)
    b19 = new Box(700,100,50,50)
    b20= new Box(700,100,50,50)




}

function draw(){
    background("blue");
    Engine.update(engine);
    ground.display();
    rope.display();
    bob.display();
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
    b19.display()
    b20.display()

    text(mouseX + " , " + mouseY, mouseX,mouseY)
    
    
}

function mouseDragged() {

    Matter.Body.setPosition (bob.body,{x: mouseX , y: mouseY});
    
  }
  