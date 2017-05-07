// user experience
// =================================================
// player starts game to display a random number .
// player selects one four crystals displayed.
// Each crystal has an assigned value not known to the player.
// player trys to select the right amount of crystal to match the random number total displayed
// games shows and tracks total score after each cystal is clicked
// game displays number of wins and losses
// game displays player out come: "winner" / "game over"
// game resets with new cystal values and random guess number

// code requirements
// =================================================
// generate a random guess number between the value 19 and 120
// generate random number, 4x, one for each cystal values: randomize between 1 and 12
// create an event that captures crystal value
// store and total all crystal values selected during game
// compare total crystal value to random guess number.
// if === display 'winner' --> game over and reset the games cystal values and random guess number
// if crystal value > guess number --> game over and reset the games cystal values and random guess number
// capture and display number or wins and displays

// code bonus
// =================================================
// add sound on crystal click event
//	add sound on player game outcome (win/loss)
// color change background on mouse over event
// bounce crystals on click event


//---------------------------------------------------
//-------------  ** Global Variables ** -------------
//---------------------------------------------------


// player win count variable
var winCounter = 0;

// player loss count varable
var lossCounter = 0;

// random number for crystal to total to
var keyValueCompare;

// total crystal value from click event score
var crystalTotal = 0;

// array to store random number for each of 4 crystals
var crystalValue = [];

// minimum number value for random number generator
var min = 0;

// minimum number value for random number generator
var max = 0;

//-------------------------------------------------------
//----------------  **Audio Elements**  ------------------
//-------------------------------------------------------

var clickAudio = new Audio('./assets/sound/gottem.mp3');
var winAudio = new Audio('./assets/sound/Tada3.mp3');
var gameOverAudio = new Audio('./assets/sound/failure2.mp3');


//---------------------------------------------------
//-------------  ** Global Functionss ** -------------
//---------------------------------------------------

$(document).ready(function() {

    // event listener for clicks on the direction panel to start the game
    $("#intro").on("click", function() {
        $("#intro").remove();
        var timeoutId = setTimeout(function() {
            initGame();
        }, 500);
    });

    // user clicks button to start game
    function initGame() {
        keyValueCompare = generateRandomNumber(19, 120);
        cystalValueAssign();
        $("#numGenerate").html(keyValueCompare);
        $("#currectCrystalTotal").html(crystalTotal);
        $("#loss").html(lossCounter);
        $("#win").html(winCounter);
    }

    //  Create a random number from 19-120 (for the crystal click total comparison)
    function generateRandomNumber(min, max) {
        var numberGenerate = Math.floor(Math.random() * (max - min + 1)) + min;
        return numberGenerate;
    }

    // generate random number 4x one for each cystal values
    function cystalValueAssign() {
        // generate random number (randomize between 1 and 12) one for each cystal values
        var min = 1;
        var max = 12;
        for (i = 0; i < 4; i++) {
            var randomNum = generateRandomNumber(min, max);
            // moves random number and create a new data attribute for each crystal
            // valueAdd assigns the random numbers to each of the four crystal
            var crystalValueAdd = document.getElementsByClassName("crystalValue")[i];
            crystalValueAdd.setAttribute("Data-crystal", randomNum);
            console.log("this: " + this);
            console.log("data-crystal " + randomNum);
            crystalValue.push(randomNum);
            console.log("crystal val " + crystalValue);
        }
    }

    // event listener for clicks on the crystal passes value to clickTotal
    $(".crystalValue").on("click", function() {
        clickTotal(this.getAttribute("data-crystal"));
        clickAudio.play(clickAudio);

        //display the crystals random value
        $(".crystalValue").html(("<h1>" + $(this).val("data-crystal") + "</h1>"));
        console.log("data inside " + $(this).val("data-crystal"));

    });

    // clickTotal function calcuates plaer click totals and compairs to random generated number
    function clickTotal(clickValue) {
        clickValue = parseInt(clickValue);
        crystalTotal = crystalTotal + clickValue;
        $("#currectCrystalTotal").html(crystalTotal);
        if (crystalTotal === keyValueCompare) {
            $("#win").html(winCounter += 1);
            $("#gameOutCome").html("WINNER!");
            winAudio.play(winAudio);

            // Calls reset function after 3 sec
            var timeoutId = setTimeout(function() {
                reSet();
            }, 3000);
        }
        if (crystalTotal > keyValueCompare) {
            loss.innerHTML = lossCounter += 1;
            $("#gameOutCome").html("TOO HIGH!");
            gameOverAudio.play(gameOverAudio);

            // Calls reset function after 3 sec
            var timeoutId = setTimeout(function() {
                reSet();
            }, 2500);

        }
    }

    // game reset generates new random values and hold current win/loss status
    function reSet() {
        crystalTotal = 0;
        crystalValue = [];
        $("#currectCrystalTotal").html(crystalTotal);
        $("#gameOutCome").html(" ");
        initGame();
    }

});
