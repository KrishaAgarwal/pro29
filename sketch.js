const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand, block1, block2, block3;
var polygon, slingShot;

var gameState = "onSling";

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //polygon = createSprite(50, 200, 30, 30);
  polygon = new Polygon(65,180);

  slingShot = new SlingShot(polygon.body, {x: 100, y: 200});

  stand = new Ground(450,350,400,20);
  //level 1
  block1 = new Box(300,320,50,50);
  block2 = new Box(360,320,50,50);
  block3 = new Box(420,320,50,50);
  block4 = new Box(480,320,50,50);
  block5 = new Box(540,320,50,50);
  block6 = new Box(600,320,50,50);
  //level 2
  block7 = new Box(330,265,50,50);
  block8 = new Box(390,265,50,50);
  block9 = new Box(450,265,50,50);
  block10 = new Box(510,265,50,50);
  block11 = new Box(570,265,50,50);
  //level 3
  block12 = new Box(360,215,50,50);
  block13 = new Box(420,215,50,50);
  block14 = new Box(480,215,50,50);
  block15 = new Box(540,215,50,50);
  //level 4
  block16 = new Box(390,165,50,50);
  block17 = new Box(450,165,50,50);
  block18 = new Box(510,165,50,50);
  //level 5
  block19 = new Box(420,115,50,50);
  block20 = new Box(480,115,50,50);
  //level 6
  block21 = new Box(450,65,50,50);
}

function draw() {
  background(145,264,186);
  //Engine.update(engine); 

  textSize(30);
  textFont("Castellar");
  text("Tower Siege",300,30);
  
  drawSprites();
  

  stand.display();
  //level 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  //level 2
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  //level 3
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  //level 4
  block16.display();
  block17.display();
  block18.display();
  //level 5
  block19.display();
  block20.display();
  //level 6
  block21.display();

  slingShot.display();
  polygon.display();

  //mouseReleased();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  slingShot.fly();
  gameState = "launched";
}
