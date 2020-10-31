
var car,wall, weight,speed;

function setup() {  
    createCanvas(800,400);
    
    speed =random(55,90);
    weight =random(400,1500);
    car = createSprite(50,200,50,50);
    car.shapeColor= "blue";
    car.velocityX = speed;
    wall = createSprite(750,200,40,height/2);
    wall.shapeColor= "gold";
                                                                           
  }
  
  function draw() {
    background("Black"); 

    // car.collide(wall);
     
    if(wall.x-car.x < (car.width+wall.width/2))
    {
       car.velocityX = 0;
       var deformation = (0.5 * weight * speed* speed)/22509;
       
       if(deformation<100)
       {
         car.shapeColor= color(0,255,0);
         
       }
        if(deformation<180 && deformation>100)
        {
          car.shapeColor=color(230,230,0);
         
        }
        if(deformation>180)
        {
          car.shapeColor =color(255,0,0);
         
        }
       
    }
  
    

    drawSprites();
  }