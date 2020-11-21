const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var goal1,goal2,goal3,goal4,goal5,goal6;
var ground;
var end;
var sling;
var ball;
var score = 0;
var Gamestate = "Onsling";

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  goal1 = new Goal(600,350);
  goal2 = new Goal(650,350);
  goal3 = new Goal(700,350);
  goal4 = new Goal(625,275);
  goal5 = new Goal(675,275);
  goal6 = new Goal(650,225);
  ground = new Ground();
  end = new End();
  ball = new Ball(50,300);
  sling = new Sling(ball.body,{x:200,y:200});
}

function draw() {

  Engine.update(engine);

  background(0,0,0);  
  drawSprites();
  fill("white")
  text("PRESS SPACE TO RESTART BALL",400,25)
  goal1.display();
  goal2.display();
  goal3.display();
  goal4.display();
  goal1.score();
  goal2.score();
  goal3.score();
  goal4.score();
  goal5.score();
  goal6.score();
  text("Score:"+score,50,25);
  text("Turn The Zombies Into Ghosts",100,50);
  goal5.display();
  goal6.display();
  ground.display();
  end.display();
  ball.display();
  sling.display();
  camera.position.x = ball.body.position.x;
}
function mouseDragged(){
  if(Gamestate != "launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
  }
  
  
  function mouseReleased(){
      sling.fly();
      Gamestate = "launched";
  }
 
  function keyPressed(){
    if(keyCode === 32){
        sling.attach(ball.body);
    }
    Gamestate = "onSling";
}