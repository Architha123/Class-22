const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;
var ball,ball1;
var con,con1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ball_options ={
    restitution : 0.8
  }
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  ball1 = Bodies.circle(350,10,12,ball_options);
  World.add(world,ball1);

  con = Matter.Constraint.create({
    pointA : {x : 200, y : 20},
    bodyB : ball,
    pointB : {x : 0, y : 0},
    length : 100,
    stiffness : 0.1
  });
  World.add(world,con);

  con1 = Matter.Constraint.create({
    bodyA : ball,
    pointA : {x : 0, y : 0},
    bodyB : ball1,
    pointB : {x : 0, y : 0},
    length : 100,
    stiffness : 0.1
  });
  World.add(world,con1);

  
}



function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball1.position.x,ball1.position.y,12);

  push();
  stroke(255);
  strokeWeight(2);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball1.position.x,ball1.position.y);
  pop();
}

function keyPressed(){
  if(keyCode == RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x :0,y : 0},{x : 0.05,y : 0});
  }
}
