/*eslint-env browser*/

var from = 0;
var to = 0;
var target = 0;
var currentGuess = 0;
var totalGuesses = 0;

    //Obtains the bounds of the game
    //Uses parseInt() to ensure that numbers rather than strings are used

//Checks if the lower bound is within the range given
    function checkLowerBound() {
        from = parseInt(prompt("Enter the lower bound"));
       while (from < 0 || from > 1000 ||isNaN(from)) {
                from = parseInt(prompt("Please pick a number less than 1000 and greater than 0"));
            }
    }

//Checks if higher bound is within the given range and greater than the lower bound

    function checkHigherBound() {
        while (to < 0 || to > 1000 || isNaN(to) || to < from) {
            from = parseInt(prompt("Please pick a number less than 1000 and greater than 0 and higher than your lower bound"));
        }
    }




    //Use Math.round() to get whole number
    
    function checkForWin() {
        while (target != currentGuess) {
            if (currentGuess > (from - 1) && currentGuess < (to + 1)) {

                if (currentGuess < target) {

                    currentGuess = parseInt(prompt("Enter a higher number than " + currentGuess));

                    totalGuesses++;

                } else if (currentGuess > target) {

                    currentGuess = parseInt(prompt("Enter a lower number than " + currentGuess));

                    totalGuesses++;

                } 

            } else if (isNaN(currentGuess)) {

                currentGuess = parseInt(prompt("Please enter a number within the range"));

            } else {

                currentGuess = parseInt(prompt("Please enter a number within the range"));

            }

        }
    }
function playGame() {
    
    alert("First, enter a low number, then a high number. Then, guess a random number within the low and high number. Each bound must be less than 1000 and greater than 0");    
    
   // from = parseInt(prompt("Enter the lower bound"));

    checkLowerBound(from);

    to = parseInt(prompt("Enter the higher bound"));
    
    checkHigherBound();
    
    target = Math.round((Math.random() * (to - from)) + from);

    currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));

    totalGuesses = 1
    
    checkForWin();
    
    alert("Congrats! You guessed the number in " + totalGuesses + " guesses!");
}