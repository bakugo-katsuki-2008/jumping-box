var canvas;
var music;
var block1, block2, block3, block4
var wbox
var toph, righth, lefth


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100, 600, 180, 130);
    block1.shapeColor = "blue";

    block2 = createSprite(300, 600, 180, 130);
    block2.shapeColor = "red";

    block3 = createSprite(500, 600, 180, 130);
    block3.shapeColor = "green";

    block4 = createSprite(700, 600, 180, 130);
    block4.shapeColor = "yellow";

    //create box sprite and give velocity
    wbox = createSprite(random(20,750),100, 50,50)
    wbox.shapeColor = "white"
    wbox.velocityY = 5
    wbox.velocityX = 2

    righth = createSprite(800,300, 20, 800)
    righth.visible = false;

    lefth = createSprite(0,300, 20, 800)
    lefth.visible = false;

    toph = createSprite(400,0, 800, 20)
    toph.visible = false;
    
}

function draw(){
    background(rgb(169,169,169));
    //create edgeSprite
    //add condition to check if box touching surface and make it box

    bonce();
    drawSprites();
}

function bonce(){
    if(block1.isTouching(wbox) && wbox.bounceOff(block1)){
        wbox.shapeColor = "blue"
        music.play();
    }
    if(block2.isTouching(wbox) && wbox.bounceOff(block2)){
        wbox.shapeColor = "red"
        music.play();
    }
    if(block3.isTouching(wbox) && wbox.bounceOff(block3)){
       wbox.velocityX = 0
       wbox.velocityY = 0
       music.stop();
    }
    if(block4.isTouching(wbox) && wbox.bounceOff(block4)){
        wbox.shapeColor = "yellow"
        music.play();
    }
    if(toph.isTouching(wbox)){
        wbox.bounceOff(toph);
        music.stop();
    }
    if(lefth.isTouching(wbox)){
        wbox.bounceOff(lefth);
    }
    if(righth.isTouching(wbox)){
        wbox.bounceOff(righth);
    }
    
}
