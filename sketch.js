const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    polygon1 = loadImage("polygon.png")
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(100,200,20)
    World.add(world,polygon)

    ground = new Ground(600,height,1200,20);
    
    stand = new Ground(390,300,200,20)
    stand1 = new Ground(600,200,200,20)



   box1 = new Box(330,235,30,40);
   box2 = new Box(360,235,30,40);
   box3 = new Box(390,235,30,40);
   box4 = new Box(420,235,30,40);
   box5 = new Box(450,235,30,40);
   box6 = new Box(360,195,30,40);
   box7 = new Box(390,195,30,40);
   box8 = new Box(420,195,30,40);
   box9 = new Box(390,155,30,40);

   box10 = new Box(610,195,30,40);
   box11 = new Box(605,195,30,40);
   box12 = new Box(615,195,30,40);
   box13 = new Box(608,180,30,40);
   box14 = new Box(613,180,30,40);
   box15 = new Box(609,165,30,40);

 

   //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(this.polygon,{x:100, y:200})
}

function draw(){
    background("pink");
    Engine.update(engine);
    imageMode(CENTER)
    image(polygon1,polygon.position.x,polygon.position.y,40,40)
    strokeWeight(4);
    
    text("throw the stone on the blocks",100,100);

    //log6.display();
    slingshot.display(); 
    fill ("red")
    box1.display();

    fill ("green")
    box2.display();

    fill ("yellow")
    box3.display();

    fill("grey")
    box4.display();

    fill("blue")
    box5.display();

    fill("pink")
    box6.display();
   
   fill("grey")
    box7.display();

    fill("black")
    box8.display();

    fill("purple")
    box9.display();
   
    fill("blue")
    box10.display()

    fill("green")
    box11.display()

    fill("black")
    box12.display()

    fill("grey")
    box13.display()

    fill("red")
    box14.display()

    fill("yellow")
    box15.display()

   fill("brown")
    stand.display();

    fill("brown")
    stand1.display();










}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
