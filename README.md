# Crystal Collector -- the game

This is one of my first projects utilizing jQuery, event deligations

<img width="250" alt="one of the four crystals" src="https://github.com/rspica/Crystal-Collector-II/blob/master/assets/images/Crystal-2.svg">
<img width="250" alt="one of the four crystals" src="https://github.com/rspica/Crystal-Collector-II/blob/master/assets/images/Crystal-2.svg">
<img width="250" alt="one of the four crystals" src="https://github.com/rspica/Crystal-Collector-II/blob/master/assets/images/Crystal-2.svg">
<img width="250" alt="one of the four crystals" src="https://github.com/rspica/Crystal-Collector-II/blob/master/assets/images/Crystal-2.svg">

## user experience
// =================================================
* Player starts game to display a random number .
* Player selects one four crystals displayed.
* Each crystal has an assigned value not known to the player.
* Player tries to select the right amount of crystal to match the random number total displayed
* Games shows and tracks total score after each crystal is clicked
* Game displays number of wins and losses
* Game displays player out come: "winner" / "game over"
* Game resets with new crystal values and random guess number

## code requirements
// =================================================
* Generate a random guess number between the value 19 and 120
* Generate random number, 4x, one for each crystal values: randomize between 1 and 12
* Create an event that captures crystal value
* Store and total all crystal values selected during game
* Compare total crystal value to random guess number.
* if === display 'winner' --> game over and reset the games crystal values and random guess number
* if crystal value > guess number --> game over and reset the games crystal values and random guess number
* Capture and display number or wins and displays

## code bonus
// =================================================
* Added sound on crystal click event
* Added sound on player game outcome (win/loss)
* Color change background on mouse over event
* Bbounce crystals on click event
