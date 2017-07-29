# Crystal Collector -- the game

This is one of my first projects utilizing jQuery, event deligations

<img width="250" alt="one of the four crystals" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjM3MiAwIDQ3OS45IDc5MiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAzNzIgMCA0NzkuOSA3OTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHRpdGxlPkFydGJvYXJkIDE8L3RpdGxlPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMzkuNTc5NyIgeTE9IjgzNy43NTA1IiB4Mj0iNDM2LjU1OTEiIHkyPSI4MzcuNzUwNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgyLjA1MjQgMi42OTE0IC0yLjY5MTQgMi4wNTI0IDIyMTkuNzQ1MSAtMjI4MC45MTkyKSI+DQoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0FERjZGRiIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuMTEiIHN0eWxlPSJzdG9wLWNvbG9yOiNBMkUzRjYiLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjMzIiBzdHlsZT0ic3RvcC1jb2xvcjojODZCMUUwIi8+DQoJPHN0b3AgIG9mZnNldD0iMC42NSIgc3R5bGU9InN0b3AtY29sb3I6IzU5NjFCQyIvPg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMzAwOTEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cG9seWdvbiBvcGFjaXR5PSIwLjc0IiBmaWxsPSJ1cmwoI1NWR0lEXzFfKSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAgICAiIHBvaW50cz0iNDE2LjcsNTEzLjEgNjI2LjksNzkyIDg1Miw2MDYuOSA4MjMuNSw3OC45IA0KCTU2NiwwIDM3MiwyNTMuNSAiLz4NCjxnPg0KCTxwb2x5Z29uIG9wYWNpdHk9IjAuMTEiIGZpbGw9IiNGRkZGRkYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgICAgIiBwb2ludHM9Ijg1Miw2MDYuOSA2NTguNCw1ODEuMSA2MjYuOSw3OTIgCSIvPg0KCTxwb2x5Z29uIG9wYWNpdHk9IjAuNjEiIGZpbGw9IiNGRkZGRkYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgICAgIiBwb2ludHM9IjgyMy41LDc4LjkgNjU4LjQsNTgxLjEgODUyLDYwNi45IAkiLz4NCgk8cG9seWdvbiBvcGFjaXR5PSIxLjAwMDAwMGUtMDIiIGZpbGw9IiNGRkZGRkYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgICAgIiBwb2ludHM9IjQxNi43LDUxMy4xIDY1OC40LDU4MS4xIDYyNi45LDc5MiAJIi8+DQoJPHBvbHlnb24gb3BhY2l0eT0iMC40MSIgZmlsbD0iI0ZGRkZGRiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAgICAiIHBvaW50cz0iODIzLjUsNzguOSA2MDIuOSwxMTEuNCA2NTguNCw1ODEuMSAJIi8+DQoJPHBvbHlnb24gb3BhY2l0eT0iNy4wMDAwMDBlLTAyIiBmaWxsPSIjRkZGRkZGIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3ICAgICIgcG9pbnRzPSI0MTYuNyw1MTMuMSA2MDIuOSwxMTEuNCA2NTguNCw1ODEuMSAJIi8+DQoJPHBvbHlnb24gb3BhY2l0eT0iMC43NyIgZmlsbD0iI0ZGRkZGRiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAgICAiIHBvaW50cz0iODIzLjUsNzguOSA1NjYsMCA2MDIuOSwxMTEuNCAJIi8+DQoJPHBvbHlnb24gb3BhY2l0eT0iMC40OSIgZmlsbD0iI0ZGRkZGRiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAgICAiIHBvaW50cz0iNDE2LjcsNTEzLjEgMzcyLDI1My41IDU2NiwwIDYwMi45LDExMS40IAkiLz4NCjwvZz4NCjwvc3ZnPg0K">


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
