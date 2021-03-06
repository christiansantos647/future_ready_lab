/*eslint-env browser*/
function playGame() {
    

    alert("First, enter a low number, then a high number. Then, guess a random number within the low and high number. Each bound must be less than 1000 and greater than 0");

    //Obtains the bounds of the game
    //Uses parseInt() to ensure that numbers rather than strings are used

//Checks if the lower bound is within the range given
    var from = parseInt(prompt("Enter the lower bound"));
    
    function checkLowerBound() {
        while (from < 0 || from > 1000 ||isNaN(from)) {
                from = parseInt(prompt("Please pick a number less than 1000 and greater than 0"));
            }
    }
//Checks if higher bound is within the given range and greater than the lower bound
    var to = parseInt(prompt("Enter the higher bound"));
    
    function checkHigherBound() {
        while (to < 0 || to > 1000 || isNaN(to) || to < from) {
            from = parseInt(prompt("Please pick a number less than 1000 and greater than 0 and higher than your lower bound"));
        }
    }

    //Use Math.round() to get whole number
    var target = Math.round((Math.random() * (to - from)) + from);

    var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));

    var totalGuesses = 1
    
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

    alert("Congrats! You guessed the number in " + totalGuesses + " guesses!");
}