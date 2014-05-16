/**
 * GUESSING GAME: Guessing a Number between 1 in 10
 *
 * Created By: Fisher, Chase
 * Date: 15 May 2014
 * 
 * GUESSING GAME
 */

//Game variables


// Self-Executing Function
(function (){

    // player-based variables, relating to guesses
    var numGuessed=0; // This is the player's guess value
    var playerGuessed=0;// changes to display at end so player knows number of attempts.
    var remainGuess=3;// CountDOWN not up.

    var dom = {
        input: document.querySelector("#input"),
        output: document.querySelector("#output"),
        button: document.querySelector("button")
    };


    // Make a Random Number, spit it out to Console and return it.
    // * 10 = 0-9.  +1 = 1-10.

        var rngNum = Math.floor(Math.random() * 10) +1;
        console.log(rngNum);

    // Validate is player actually chose a correct number
    var validateInput = function(){
        numGuessed = parseInt(dom.input.value);

        if (isNaN(numGuessed)){ // Determine if player actually input a number
            dom.output.value = "Please choose a number.  It must be between 1 and 10, inclusive.";
        }else if(numGuessed > 10 || numGuessed < 1){ //If it was outside of 1-10, correct player.
            dom.output.value = "This number was not between 1 and 10.  Try again."
        }else{ // if validation succeeds - go ahead and run the game.
            playGuessingGame();
        }
    };

    //Game play is based upon user-input.  Run longs based upon pressing "Guess."
    //Tells console both guesses remaining, and runs the validate script.
    var clickFn = function(e){
        console.log(remainGuess); //debugging -> see # of guesses remaining.
        validateInput(); //run earlier script -> determine if user is paying attention
    };

    //Comparison and Counters. - Guess vs. Actual, and track guesses.
    var playGuessingGame = function(){
        // each time button is pressed -> add and subtract.
        playerGuessed++;
        remainGuess--;

        // See if numGuessed = rngNum.
        if(numGuessed===rngNum){
            console.log("Congratulations! You have won it!"); //console for debugging purposes.
            if(remainGuess > 0){
                // if both game is Won AND there is at least one guess remaining: print this message.
                dom.output.innerHTML = "Congratulations! You won!" + "<br>" + "It only took you " + playerGuessed + " guesses.";
                stopListening();
            }else{
                // if both game is Won AND there are no guesses remaining: print this message.
                dom.output.innerHTML = "Congratulations!  You won!" + "<br>" + " You had no guesses remaining.";
                stopListening();
            }
        }else if(numGuessed>rngNum){ //if guess is too high - say so.
            console.log("The number was too high."); // console for debugging purposes.
            dom.output.innerHTML = "Your guess was too high.  You have " + remainGuess + " guesses remaining."
        }else if(numGuessed<rngNum){ // if guess is too low - say so.
            console.log("The number was too low"); // console for debugging purposes.
            dom.output.innerHTML = "Your guess was too low.  You have " + remainGuess + " guesses remaining."
        }
        /* we need to know if the player ran out of guesses before leaving, to determine if playGuessingGame
         needs to keep running.
        */
        if(remainGuess<1){ /* we can't say 0 or else player could just keep hitting the guess button
         and it would cycle to "-1"
            */
            console.log("Game over, you have: " + remainGuess + " guesses remaining.");
            dom.output.innterHTML = "Sorry, you have run out of guesses.  The correct number was" + rngNum + ".";
            // Let the player know that they are out of guesses.
            stopListening();

        }
    };

    function stopListening(){
    // stop user from spamming the button.
    dom.button.removeEventListener("click", clickFn, false);
    }

// check if the "button" was pressed.
    var onKeyDown = function(e){
        if(e.keyCode === 13){
            validateInput(); // run the validate input script to make sure that a valid input was provided.
        }
    };

// make it possible to check if the button was pressed."
    dom.button.addEventListener("click", clickFn, false);
    dom.button.addEventListener("keydown", onKeyDown, false);
})();