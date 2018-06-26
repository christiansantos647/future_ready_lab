/*eslint-env browser*/
function playGame() {
    

    alert("First, enter a low number, then a high number. Then, guess a random number within the low and high number. Each bound must be less than 1000 and greater than 0");

    //Obtains the bounds of the game
    //Uses parseInt() to ensure that numbers rather than strings are used

//Checks if the lower bound is within the range given
    var from = parseInt(prompt("Enter the lower bound"));

        while (isNaN(from)) {
            from = parseInt(prompt("That is not a real number. Please enter the lower bound"));
        }
        while (from < 0 || from > 1000) {
            from = parseInt(prompt("Please pick a number less than 1000 and greater than 0"));
        }
//Checks if higher bound is within the given range and greater than the lower bound
    var to = parseInt(prompt("Enter the higher bound"));

        while (isNaN(to)) {
            to = parseInt(prompt("That is not a real number. Please enter the higher bound"));
        }
        while (to < 0 || to > 1000) {
            from = parseInt(prompt("Please pick a number less than 1000 and greater than 0"));
        }
        while (to < from) {
            to = parseInt(prompt("Please pick a number greater than your lower bound"));
        }

    //Use Math.round() to get whole number
    var target = Math.round((Math.random() * (to - from)) + from);

    var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));

    var totalGuesses = 1
while (target != currentGuess) {
    if (currentGuess > (from - 1) && currentGuess < (to + 1)) {

        if (currentGuess < target) {

            currentGuess = parseInt(prompt("Enter a higher number than " + currentGuess));

            totalGuesses++;

        } else if (currentGuess > target) {

            currentGuess = parseInt(prompt("Enter a lower number than " + currentGuess));

            totalGuesses++;

        } 

    } else {

        currentGuess = parseInt(prompt("Please enter a number within the range"));

    }

}
    alert("Congrats! You guessed the number in " + totalGuesses + " guesses!");
}