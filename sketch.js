var path,pathImageStart,pathImagePlay

var gameState="play";

var startButton, startButtonImage;

var backgroundImage;

var playerCar,playerCarImage;


var carImage1,carImage2,carImage3,carImage4, car;

function preload(){

    pathImageStart = loadImage("images/start.jpg")

    startButtonImage = loadImage("images/STARt_BUTTON.png")

    pathImagePlay = loadImage("images/ROAD.png")
    backgroundImage= loadImage("images/FOREST_BACKGROUND.jpg")
    playerCarImage= loadImage("images/PC_CAR.png")

    carImage1= loadImage("images/CAR_1.png")
    carImage2= loadImage("images/CAR_2.png")
    carImage3= loadImage("images/CAR_3.png")
    carImage4= loadImage("images/CAR_4.png")
}

function setup(){
    createCanvas(1200,700)

    path= createSprite(600,350);
    path.addImage(pathImageStart);
    path.scale=1.9

    startButton= createSprite(600,630)
    startButton.addImage(startButtonImage);
    startButton.visible=false;
    startButton.scale=0.2


    playerCar= createSprite(330,420)
    playerCar.addImage(playerCarImage);
    playerCar.scale=0.2
    //playerCar.velocityY=-2

    if(gameState==="play"){
    path.velocityY=4;
    }

}

function draw(){
    background("black");

    if (gameState==="start"){
        drawSprites();

        textSize(80);
        fill("red");
        text("TITLE",550, 150);

        startButton.visible=true;
        playerCar.visible=false;

        if(mousePressedOver(startButton)){
            gameState="play";

         }
    
    }

    if(gameState==="play"){
        
        background(backgroundImage)


        path.addImage(pathImagePlay);
        path.scale=1;
        

        if(path.y>500){
            path.y=350
        }

        startButton.visible=false;
        playerCar.visible=true

        //gameCamera.x=600;
        //gameCamera.y=playerCar.y;
        
       

        if(keyDown(RIGHT_ARROW)){
            playerCar.x=playerCar.x+15;
        }
    
        if(keyDown(LEFT_ARROW)){
            playerCar.x=playerCar.x-15;
        }

        if(playerCar.x<290 ||playerCar.x>920){
            playerCar.x=660
        }

        if(keyDown(UP_ARROW) && path.velocityY<=10){
            path.velocityY=path.velocityY+1
        }

        if(keyDown(DOWN_ARROW)){

            if(path.velocityY>4){
                path.velocityY=path.velocityY-1
            }
            else{
                path.velocityY=4
            }
        }
        spawnCars();
        drawSprites();
    }
}

function spawnCars(){
    if(frameCount%(Math.round(random(50,90)))===0){
        car= createSprite(660,600)
        var randomNum=Math.round(random(1,4))
        switch(randomNum){
            case 1:
                car.addImage(carImage1)
                car.scale=0.2;
                break ;
            case 2:
                car.addImage(carImage2)
                car.scale=0.1;
                break;
            case 3:
                car.addImage(carImage3)
                car.scale=0.2;
                break;
            case 4:
                car.addImage(carImage4)
                car.scale=0.2;
                break;
        }
        car.velocityY=6;

        car.x=Math.round(random(290,920))
        car.lifetime= 400;
        
    }
}