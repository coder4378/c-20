var car,wall;
var speed,weight;
function setup () {
    createCanvas(500,500);
    car=createSprite(450,250,50,50);
    car.shapeColor="white";
    wall=createSprite(20,250,20,550);
    wall.shapeColor="yellow";
    speed=random(-75,-105);
    weight=random(400,1500);
    car.velocityX=-speed;
}
function draw () {
    background(9,9,9);
    car.velocityX=speed;
    if (car.x-wall.x<car.width/2+wall.width/2){
        car.velocityX=0;
        var deformation=0.5*weight*speed*speed/22509;
        if(deformation>180){
            car.shapeColor="red"
        }
        if(deformation<180 && deformation>100 ){
            car.shapeColor="yellow"
        }

        if(deformation>100){
            car.shapeColor="green"
        }
    }
    drawSprites();
}