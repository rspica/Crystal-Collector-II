// user experience
// =================================================
// player starts game to display a random number .
// player selects one four crystals displayed.
// Each crystal has an assigned value not known to the player.
// player tries to select the right amount of crystal to match the random number total displayed
// games shows and tracks total score after each crystal is clicked
// game displays number of wins and losses
// game displays player out come: "winner" / "game over"
// game resets with new crystal values and random guess number

// code requirements
// =================================================
// generate a random guess number between the value 19 and 120
// generate random number, 4x, one for each crystal values: randomize between 1 and 12
// create an event that captures crystal value
// store and total all crystal values selected during game
// compare total crystal value to random guess number.
// if === display 'winner' --> game over and reset the games crystal values and random guess number
// if crystal value > guess number --> game over and reset the games crystal values and random guess number
// capture and display number or wins and displays

// code bonus
// =================================================
// add sound on crystal click event
//  add sound on player game outcome (win/loss)
// color change background on mouse over event
// bounce crystals on click event


//---------------------------------------------------
//-------------  ** Global Variables ** -------------
//---------------------------------------------------


// player win count variable
var winCounter = 0;

// player loss count variable
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

// sets initial value for player clicks progress bar 
var progressLength = 0;
var barLength = 0;

//-------------------------------------------------------
//----------------  **Audio Elements**  ------------------
//-------------------------------------------------------

var clickAudio = new Audio('./assets/sound/gottem.mp3');
var winAudio = new Audio('./assets/sound/Tada3.mp3');
var gameOverAudio = new Audio('./assets/sound/failure2.mp3');


//---------------------------------------------------
//-------------  ** Global Functions ** -------------
//---------------------------------------------------

$(document).ready(function() {

    // Start button: player clicks on the game directions panel to start the game
    $("#intro").on("click", function() {
        $("#intro").remove();
        var timeoutId = setTimeout(function() {
            initGame();
        }, 500);
    });

    // Initializes game sets and displays all player values to zero and generates and displays random "match" number
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

    // generate random number 4x one for each crystal values (randomize between 1 and 12) 
    function cystalValueAssign() {
        var min = 1;
        var max = 12;
        for (i = 0; i < 4; i++) {
            var randomNum = generateRandomNumber(min, max);
            // create a new data attribute and applies random number for each crystal
            // valueAdd assigns the random numbers to each of the four crystal
            var crystalValueAdd = document.getElementsByClassName("crystalValue")[i];
            crystalValueAdd.setAttribute("Data-crystal", randomNum);
            crystalValue.push(randomNum);
        }
    }

    // event listener for clicks on the crystal passes value to clickTotal function
    $(".crystalValue").on("click", function(event) {
        clickTotal(this.getAttribute("data-crystal"));
        var crystalPagePosition = ($(this).attr("value"));
        var crystalCurrentVal = ($(this).attr("data-crystal"));
console.log("this data-cystal 3:" + this.getAttribute("data-crystal")); 
        clickAudio.play(clickAudio);
        $('.crystalValue').toggleClass('animation');
        gemProfile(crystalPagePosition, crystalCurrentVal);
    });

    //display the crystal as wire frame and the assigned random value
    function gemProfile(crystalNum, crystalVal) {
        var img = $('<img src="./assets/images/Crystal-' + crystalNum + 'a.svg' + '" />');
        $('#crystal-' + crystalNum).append(img).append('<h4>' + crystalVal + '</h4>');
    }


    // clickTotal function calculates player click totals and compares random generated number
    function clickTotal(clickValue) {
        clickValue = parseInt(clickValue);
        crystalTotal += clickValue;
        progress(clickValue);
        $("#currectCrystalTotal").html(crystalTotal);
        if (crystalTotal === keyValueCompare) { //evaluated for a winner
            $("#win").html(winCounter += 1);
            $("#gameOutCome").html("WINNER!");
            winAudio.play(winAudio);

            // Calls reset function after 3 sec
            var timeoutId = setTimeout(function() {
                reset();
            }, 2500);
        }
        if (crystalTotal > keyValueCompare) {  //evaluated for game over
            loss.innerHTML = lossCounter += 1;
            $("#gameOutCome").html("TOO HIGH!");
            gameOverAudio.play(gameOverAudio);

            // Calls reset function after 3 sec
            var timeoutId = setTimeout(function() {
                reset();
            }, 2500);
        }
    }

    // game progress bar shows how close you are to the total -- just for fun
    function progress(clickValue) {
        barLength += clickValue;
        progressLength = (barLength / keyValueCompare) * 695; //695 + 15px padding(L/R) 15px =725 is the max length of the stats window
        $("#progressBar").css({ 'width': progressLength + 'px', "display": "block" });
    }


    // game reset generates new random values and hold current win/loss status
    function reset() {
        progressLength = 0;
        crystalTotal = 0;
        crystalValue = [];
        $("#progressBar").css("display", "none");
        $("#currectCrystalTotal").html(crystalTotal);
        $("#gameOutCome").html(" ");
        initGame();
    }

});
