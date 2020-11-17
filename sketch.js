const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var n
function setup() {
  createCanvas(800,400);
n=new Ground(300,200,100,100)
}

function draw() {
  background(255,255,255);
  n.display();  
  drawSprites();
}