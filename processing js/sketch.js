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
    //Creates the circle that will be drawn
    fill(circle.color);
    
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    
    //Checks if circle is touching an edge and changes its direction
    if(circle.xCoor > 640 || circle.xCoor < 0){
        
        circle.color = [random(0,255),random(0,255),random(0,255)]//makes the circle a random color
        
        circle.xSpeed = -circle.xSpeed;//changes speed of the circle

        circle.diameter = random(40,80);//Changes the size of the code
        
    } else if(circle.yCoor > 480 || circle.yCoor < 0){
        
        circle.color = [random(0,255),random(0,255),random(0,255)];
        
        circle.ySpeed = -circle.ySpeed;//Changes the speed of the code
        
        circle.diameter = random(40,80);//Changes the size of the code
        
    //If not touching an edge, circle keeps moving forward    
    } else {
        
        circle.xSpeed = circle.xSpeed;
        
        circle.ySpeed = circle.ySpeed;
        
    }
    
    circle.xCoor += circle.xSpeed;
    
    circle.yCoor += circle.ySpeed;
    
}

