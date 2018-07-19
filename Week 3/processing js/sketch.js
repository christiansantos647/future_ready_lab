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

//Creation of a class for the circle
function circle(x, y, size, color, xSpeed, ySpeed) {
    
    this.xCoor = x;
    
    this.yCoor = y;
    
    this.diameter = size;
    
    this.color = color || [0,0,0];//Allows the user to choose a color or have the circle be black
    
    this.xSpeed = xSpeed || 13;//User can set speed or choose a default horizontal speed
    
    this.ySpeed = ySpeed || 9;//User can set speed ot choose a default vertical speed
}

//reverses the horizontal speed of the circle
function changeHorizontalSpeed(i) {
    
    circleList[i].xSpeed = -circleList[i].xSpeed;//changes speed of the circle
    
}

//reverses the vertical speed of the circle
function changeVerticalSpeed(i) {
    
    circleList[i].ySpeed = -circleList[i].ySpeed;//changes speed of the circle
    
}

//creates new parameters for the circle
function randomize(i) {
    
    circleList[i].color = [random(0,255),random(0,255),random(0,255)];//makes the circle a random color
    
    circleList[i].diameter = random(40,80);//Changes the size of the code
    
}

var circleList = [];

//Options for the number of balls on the screen
var balls = [2,5,9,16];

function setup() {
    
    createCanvas(canvasWidth, canvasHeight);//Creates the screen for the animation
    
    frameRate(100);//Regulates how fast the animation is going
    
    //adds the number of balls needed for the animation
    for(var ballNumber = 0; ballNumber < balls[round(random(0,3))]; ballNumber++){
    
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

        ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter);
        
        //Checks if the circle is touching any other circle
        for(var z = 0; z < circleList.length; z++){
            
            requiredDistance = (circleList[z].diameter + circleList[i].diameter)/2;
            
            if(circleList[i] == circleList[z]) {
                
                //moves onto the next object
                z++;
                
            } else if(dist(circleList[i].xCoor, circleList[i].yCoor, circleList[z].xCoor, circleList[z].yCoor) < requiredDistance) {
                
                randomize(i);
                
                //changes the speed so that both balls move at a new average speed
                var newHorizontalSpeed = (abs(circleList[z].xSpeed) + abs(circleList[i].xSpeed)) / 2;
                
                var newVerticalSpeed = (abs(circleList[z].ySpeed) + abs(circleList[i].ySpeed)) / 2;
                
                //changes the speed of both 
                circleList[z].ySpeed = newVerticalSpeed;
                
                circleList[z].xSpeed = newHorizontalSpeed;
                
                circleList[i].ySpeed = -newVerticalSpeed;
                
                circleList[i].xSpeed = -newHorizontalSpeed;
                    
                //function to bounce the ball
                //changeHorizontalSpeed(z);

                //changeVerticalSpeed(z);
                
                //changeHorizontalSpeed(i);
                
                //changeVerticalSpeed(i);
                
                circleList[z].xCoor += circleList[z].xSpeed;
                
                circleList[z].yCoor += circleList[z].ySpeed;


            }
            
        }          
        
        //Checks if circle is touching an edge and changes its direction
        if(circleList[i].xCoor > width || circleList[i].xCoor < 0){

            randomize(i);
            
             //adds speed when hitting a wall, but if the speed is too high, it it reset
            circleList[i].xSpeed += 1
            
            
            if (circleList[i].xSpeed > 25) {
                
                circleList[i].xSpeed = 10
                
            }

            changeHorizontalSpeed(i);

        } else if(circleList[i].yCoor > height || circleList[i].yCoor < 0){

            randomize(i);
            
            //adds speed when hitting a wall, but if the speed is too high, it it reset
            circleList[i].ySpeed += 1
            
            if (circleList[i].ySpeed > 25) {
                
                circleList[i].ySpeed = 10
                
            }
            changeVerticalSpeed(i);

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
