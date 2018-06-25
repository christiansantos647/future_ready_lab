/*eslint-env browser*/
function playGame() {
    

    alert("First, enter a low number, then a high number. Then, guess a random number within the low and high number");

    //Obtains the bounds of the game
    //Uses parseInt() to ensure that numbers rather than strings are used

    var from = parseInt(prompt("Enter the lower bound"));

        while (typeof from != "number") {
            from = parseInt(prompt("That is not a real number. Please enter the lower bound"));
        }

    var to = parseInt(prompt("Enter the higher bound"));

            while (typeof to != "number") {

            to = parseInt(prompt("That is not a real number. Please enter the higher bound"));
        }

    //Use Math.round() to get whole number
    var target = Math.round((Math.random() * (to - from)) + from);

    var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));

    var totalGuesses = 1
while (target != currentGuess) {
    if (currentGuess > from && currentGuess < to) {

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