# connect-four
Connect four is a game where the objective is to simultaneously both try to connect four tokens in a grid and to try to stop the opponent from connecting four in a row. For this project, I used a table to format my grid. I assigned data- values to the rows and columns which allowed me to create the necessary rules for connect four. In real life much of the game of connect four is governed by gravity.To create this logic, I had to make sure that when I selected a column to place a token, that it dropped to its lowest available position using the data- attributes I added to the table. After I got this gravity game logic working the next step was to get the winning logic working. I spent a long time trying to figure this out by myself, but finally I came across some code on Stack Overflow that helped me make sense of how the winning game logic could be applied. Once I got the game logic working it was time for me to start working on the many things I was saving in my icebox. Among those things was a score counter, as well as a moving the word "turn" above each score counter to signify the current turn. The next thing I really wanted to implement was a color selecting table. I wanted it so that if its player1's turn, then player1 could select a color and not only will the color of each player 1 token in the board changed color, but also adding a new player1 move will be the new color that has been selected. This allows people to change colors in the middle of a game without effecting the gameplay. As an additional feature I set it so that the moving word "turn" also changes color according to the color of the current player. The final step I took was to style the rest of the game so that it looked nice. I added a marble background because I enjoy the aesthetic of the real material type of background.

The essential things I covered: 
-Functioning gravity logic
-winning logic
-Reset button
-Tie logic


The non essential things I covered
-score counters for both players and turns
-color selector
-button that clears only the board
-button that clears only the score




There are many things I would like to implement in the future and are in my current icebox.
Some of these things would be 

1. animation for token moves
2. I would like to add outlines to the color table cells that have been selected. I would like as much visual representation of colors as possible without it being overbearing.
3. I would like to add sound as well. I would like there to be a sound for selecting a color, dropping a token and when the turn switches.
I might have to use some async timing to make the sounds happen with their corresponding lines of code. I imagine that otherwise, the code will run faster than the sounds and they will have finished by the time the sound is even half way through. Perhaps I will use the setTimeout function. 


 Creating this game has been a great learning experience for me.
