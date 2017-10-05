
// much like tic tac toe this game will involve a table and two players. As a user, I would like to pick my color by selecting that color in another table. This color would be the color of my tokens that I try to connect. The main game table will consist of 7 columns and 6 rows. Much of the code for this game will be similar to tic-tac-toe, but one of the key differences is rule that is normally enforced by gravity in real connect-four. Gravity makes it so that just because a cell is open doesn't men you can place your token there; there has to be a token in the cell below it. The check for winner logic will also have add one more cell because in ttt we try to connect three. 

// I would like to have two variables player1 and player 2. Our tokens will be represented by jquery.css background-color declarations. We need to make it so selecting a different color in the color table will change the color of whoever's ever turn it is which means we will also need a global variable of 'turn'.

// We will need a board array that will represnt our gameboard
// After that we need to add an jquery .on event listener to the table, so that when we click a td it will run a click function which will push the .css background-color of the current player to the event target which should be that cell. if the event.target is above an empty cell, then push the content to the lowest cell in that colum. This will make it so users actually choose columns instead of cells. After the play has been pushed to the board then the board needs to be rendered so the render function will be called which will push the game board to the DOM. If the board has matched the checkforWinner function then tell the user that whichever user last played has won. Then if someone has won, run the init function clearing the board. 




//I also will want to add a score count on each side .


//So all in all when a user clicks a cell, it triggers a click function that will push the data to the board array and also apply styling, .css({"background-color": "color"}), to the DOM node thats clicked. If the board array ever matches the winning cases, then trigger an alert 

/*----- constants -----*/







/*----- app's state (variables) -----*/







/*----- cached element references -----*/






/*----- event listeners -----*/






/*----- functions -----*/

