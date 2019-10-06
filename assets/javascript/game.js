
// makes the function available after the document is loaded //
$(document).ready(function () {
    // define array for letters of the alphabet //
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // define var for array with words to guess //
    var words = ['machete', 'mask', 'camper', 'murder', 'summer', 'warning', 'drowning']
    // defines var for 0-1 * index length of the words var //
    var decimal = Math.random() * words.length
    // defines var to round the returned number down * var decimal result //
    var index = Math.floor(decimal);
    // defines var for random word chosen by multiplying words var and index var //
    var chosenWord = words[index];
    // defines var for the underscores needed in current word field //
    var underScores;
    // defines var of empty array for key strokes to pass through //
    var correctPresses = [];
    var incorrectPresses = [];
    var result = [];
    // define starting number of wins //
    var winCounter = 0;
    // define number of guesses remaining? //
    var guessesLeft = 6;
    var answerArray = [];
    for (var i = 0; i < words.length; i++) {
        answerArray[i] = "_";
    }
    var remainingLetters = words.length;



    // trigger the keyup event on an element //
    $(document).on("keyup", function (evt) {
        // get the keyboard button that was pressed when a key event occurred //
        var key = evt.key;
        // The push() method adds new items to the end of an array, and returns the new length //


        // checks if letter entered is present in the current word --- but adds them to the incorrect guess field regardless? //


        if (chosenWord.indexOf(key) !== -1) {
            correctPresses.push(key);
            // console.log("correct")

        } else {
            // console.log("incorrect")
            // The push() method adds new items to the end of an array, and returns the new length //
            incorrectPresses.push(key);
            // logs the results of key presses to the console //

            // adds incorrectly guessed letters to the appropriate field at the bottom --- join method returns the array as a string? //
            $(".characters").text(incorrectPresses.join(" "));
            console.log(chosenWord);

            // for (i=0; i < chosenWord.length; i++) 
            // underScores[chosenWord.indexOf(key)] = key;
            // console.log("random", underScores)
        }
        createUnderscore(chosenWord, correctPresses)

    });


    // declare function for creating number of underscores determined by strings passed through //
    function createUnderscore(str, keys) {
        // define empty array for the result //
        result = []
        $(".underscores").text("");
        // for loop to  //
        for (var i = 0; i < str.length; i++) {

            // if letter is correct, push the letter
            //for (var j = 0; j < keys.length; j++) {


                // 
                // if (i == str.indexOf(keys[j])) {
                //     console.log("correct")

                //     result.push(keys[j]);

                // } else {
                //     // else push an underscore
                //     console.log("underscore")
                //     result.push("_");

                // };
            //}
            if (keys.indexOf(str[i])!==-1) {
                result.push(str[i])
            } else {
                result.push("_")
            }
            console.log("result is" + result)
        }

        // make it so that key stroked letters appear in the underScores field if guessed correctly //
        $(".underscores").text(result.join(" "));
        //  //
        underScores = result
        //  //
        return result
    }
    // logs to the console //
    console.log(words[index]);
    // logs to the console //
    createUnderscore(chosenWord, correctPresses)


    //console.log(createUnderscore(chosenWord))


    // calculate and display number of wins //

    // when user guesses letter incorrectly, play sound //

    // calculate the number of guesses remaining with each key stroke and display that number // 

    // when the user wins or loses, change the main photo accordingly //

    // if user loses, play sound //

    // when game ends, automatically reset to another random word //






});



