var race;
var doorsGroup;
var state = "mainly";

function preload(){
    img = loadImage("R.webp")
}

function setup(){
    createCanvas(400,400);
    race = createSprite(200, 200);
    race.addImage("tower", img);
    race.velocityX = 1;

    vsr = createSprite(100,200,20,20);
    vsr.shapeColor = "red";

    doorsGroup = new Group();
  }

  function draw(){
  background("Pink");
  console.log("a posiçao y do quadrado e " + vsr.position.y);
    drawSprites();
  if(state === "mainly"){
    if (keyDown("UP_ARROW")) {
        vsr.y = vsr.y -3;
    }
    if (keyDown("DOWN_ARROW")) {
        vsr.y = vsr.y +3;
    }
    if(race.x > 300){
        race.x = 200;
    }
    if(vsr.y < 77 || vsr.y > 326){
        vsr.y = 200;
    }
    if (doorsGroup.isTouching(vsr)) {
        vsr.destroy();
        gameState = "end";
    }
}
    myEnemy();
  }
  function myEnemy(){
    if (frameCount % 240 === 0) {
        var doors = createSprite(200, -50, 20, 20);
        doors.shapeColor = "red";
        
        doors.y = Math.round(random(77,326));
          
        doors.velocityX = -1;
        
        vsr.depth = doors.depth;
        vsr.depth +=1;
       
        //designe tempo de vida a variável
        doors.lifetime = 800;

    
        
        //adicione cada porta ao grupo
        doorsGroup.add(doors);
      }
  }
  
