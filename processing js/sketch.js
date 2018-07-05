//setup is run once at the beginning before we draw
/* var circle = {
    diameter: 80,
    xCoor: 0,
    yCoor: 0,
    color: [255,0,0], //RGB values give circle a red color
    xSpeed: 5,
    ySpeed: 5
} */

//Creation of a class for the circle
function circle(x, y, size, color, xSpeed, ySpeed) {
    
    this.xCoor = x;
    
    this.yCoor = y;
    
    this.diameter = size;
    
    this.color = color || [0,0,0];//Allows the user to choose a color or have the circle be black
    
    this.xSpeed = xSpeed || 13;//User can set speed or choose a default horizontal speed
    
    this.ySpeed = ySpeed || 9;//User can set speed ot choose a default vertical speed
}

/*

var Circle = new circle(0,0,80,[255,0,0],10,13);

var circle2 = new circle(0,30,50);

*/
var circleList = [];

//var circleNumber = [2,4,6,8]


//Allows user to set the width of the screen
var canvasWidth = parseInt(prompt("Please enter the width of the screen"));

//Checks if the canvas width is possible. If not, user is asked to input a new value
while(canvasWidth < 0 || isNaN(canvasWidth)) {
    
    canvasWidth = parseInt(prompt("Please enter the width of the screen"));

}

//Allows user to set the height of the screen
var canvasHeight = parseInt(prompt("Please enter the height of the screen"));

//Checks if the canvas height is possible. If not, user is asked to input a new value
while(canvasHeight < 0 || isNaN(canvasHeight)) {
    
    canvasHeight = parseInt(prompt("Please enter the height of the screen"));

}

//Options for the number of balls on the screen
var balls = [2,5,9,16];


function setup() {
    
    createCanvas(canvasWidth, canvasHeight);//Creates the screen for the animation
    
    //background(255,255,255);
    
    //Regulates how fast the animation is going
    frameRate(100);
    
    //Creates a number that will determine which index in the array "balls" will be used to decide the number of balls used in the animation
    ballOption = round(random(0,3));
    
    //adds the number of balls needed for the animation
    for(var ballNumber = 0; ballNumber < balls[ballOption]; ballNumber++){
    
        //Adds a new circle to the array "balls" with random parameters that adhere to the boundaries of the screen
        circleList.push(new circle(random(0, canvasWidth), random(0,canvasHeight), random(0,100),[random(0,255),random(0,255),random(0,255)],random(1,20),random(1,20)));

    }
    
}

function draw() {
    
    background(255,255,255);//Balls will leave no trail

    //Regulates the movement of each ball
    for(var i = 0; i < circleList.length; i++) {
    
        //Creates the circle that will be drawn
        fill(circleList[i].color);

        ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter );
        
/*
        //Checks if the circle is touching a corner 
        if(circleList[i].xCoor > canvasWidth && circleList[i].yCoor > canvasHeight || circleList[i].xCoor > canvasWidth && circleList[i].yCoor < 0 || circleList.xCoor < canvasWidth && circleList < canvasHeight || circleList[i].xCoor < 0 && circleList[i].yCoor < 0) {
            
            circleList[i].color = [random(0,255),random(0,255),random(0,255)];//makes the circle a random color

            circleList[i].xSpeed = -circleList[i].xSpeed;//changes speed of the circle
            
            circleList[i].ySpeed = -circleList[i].ySpeed;

            circleList[i].diameter = random(40,80);//Changes the size of the code
        }
*/        
 /*
        //Checks if the circle is touching any other circle
        for(var z = 0; z < circleList.length; z++){
            
            if(circleList[i] == circleList[z]) {
                
                circleList[i].xSpeed = circleList[i].xSpeed;

                circleList[i].ySpeed = circleList[i].ySpeed;
                
            } else if(circleList[i].xCoor == circleList[z].xCoor && circleList[i].yCoor == circleList[z].yCoor) {
                
                circleList[i].color = [random(0,255),random(0,255),random(0,255)];//makes the circle a random color

                circleList[i].xSpeed = -circleList[i].xSpeed;//changes speed of the circle

                circleList[i].ySpeed = -circleList[i].ySpeed;

                circleList[i].diameter = random(40,80);//Changes the size of the code
            }
            
        }    
*/        
        
        //Checks if circle is touching an edge and changes its direction
        if(circleList[i].xCoor > canvasWidth || circleList[i].xCoor < 0){

            circleList[i].color = [random(0,255),random(0,255),random(0,255)];//makes the circle a random color

            circleList[i].xSpeed = -circleList[i].xSpeed;//changes speed of the circle

            circleList[i].diameter = random(40,80);//Changes the size of the code

        } else if(circleList[i].yCoor > canvasHeight || circleList[i].yCoor < 0){

            circleList[i].color = [random(0,255),random(0,255),random(0,255)];//makes the circle a random color

            circleList[i].ySpeed = -circleList[i].ySpeed;//Changes the speed of the code

            circleList[i].diameter = random(40,80);//Changes the size of the code

        //If not touching an edge, circle keeps moving forward    
        } else {

            circleList[i].xSpeed = circleList[i].xSpeed;

            circleList[i].ySpeed = circleList[i].ySpeed;

        }
        
        //The actual circle movement
        circleList[i].xCoor += circleList[i].xSpeed;

        circleList[i].yCoor += circleList[i].ySpeed;

   }
   
}

