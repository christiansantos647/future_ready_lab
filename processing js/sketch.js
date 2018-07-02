//setup is run once at the beginning before we draw
var circle = {
    diameter: 80,
    xCoor: 0,
    yCoor: 0,
    color: [255,0,0], //RGB values give circle a red color
    xSpeed: 5,
    ySpeed: 5
}

function setup() {
  createCanvas(640, 480);
    background(20,255,46);
    frameRate(100);
}

function draw() {
  fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    
    //if we hit the right edge of the canvas
    if(circle.xCoor > 640 || circle.xCoor < 0){
        circle.color = [random(0,255),random(0,255),random(0,255)]//makes the circle black
        circle.xSpeed = -circle.xSpeed;//changes speed of the circle
        circle.diameter = random(40,80);
    } else if(circle.yCoor > 480 || circle.yCoor < 0){
        circle.color = [random(0,255),random(0,255),random(0,255)];
        circle.ySpeed = -circle.ySpeed;
        circle.diameter = random(40,80);
        
    } else {
        circle.xSpeed = circle.xSpeed;
        circle.ySpeed = circle.ySpeed;
    }
    
    circle.xCoor += circle.xSpeed;
    circle.yCoor += circle.ySpeed;
}

