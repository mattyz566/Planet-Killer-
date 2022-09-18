var backgroundImg 
var Jerry
var JerryImg
var Obstacle1Image
var Obstacle2Image

 function preload(){ 
    backgroundImg = loadImage("Jungle background 1.webp") 
    JerryImg = loadImage("Jerry.png")
    Obstacle1Image = loadImage("Obstacle one.png")
    Obstacle2Image = loadImage("Obstacle 2.png")
    arrowImage = loadImage("Archerarrow.png")
  }
     function setup() {    
      createCanvas(800, 500);  
       bg = createSprite(400,250,1000,250) 
       bg.addImage(backgroundImg) 
       bg.x = width/4
       bg.velocityX = -3

       Jerry = createSprite(100,400,50,100)
       Jerry.addImage(JerryImg)
       Jerry.scale = 0.5

       Obstacle2 = createSprite(600,400,50,200)
       Obstacle2.addImage(Obstacle2Image)
       Obstacle2.scale = 0.8
      }
       function draw() { 
          background(220);   
          if(bg.x<100){
          bg.x = width/4
          }
          spawnArrow()
          drawSprites() 

          if(keyDown(LEFT_ARROW)){
            Jerry.x = Jerry.x -5
          }
          
          if(keyDown(RIGHT_ARROW)){
            Jerry.x = Jerry.x +5
          }

          
          if(keyDown(UP_ARROW)){
            Jerry.x = Jerry.x -5
          }
          
          if(keyDown(DOWN_ARROW)){
            Jerry.x = Jerry.x +5
          }
         }

          function spawnArrow(){
          if(keyDown("space")){
          var Arrow = createSprite(600,410,50,200)
         Arrow.addImage(arrowImage)  
         Arrow.scale = 0.3
         Arrow.velocityX = -2
          }
          }



