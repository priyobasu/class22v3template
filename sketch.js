const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

let engine;
let world;

var ball,ball2
var con;
var connection;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ball_prop={
    restitution:0.8
  }

  ball=Bodies.circle(200,200,20,ball_prop);

  World.add(world,ball)

   con=Constraint.create({
    pointA:{x:200,y:10},
    bodyB:ball,
    length:100,
    stiffness:0.1
  })

  World.add(world,con);

  
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20,20)

 push();
  stroke("red");
 line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
 pop();
  
}

function keyPressed(){

  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
}


