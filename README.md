# connect-four

Connect four is a game where the objective is to simultaneously both try to connect four tokens in a grid and to try to stop the opponent from connecting four in a row. For this project, I used a table to format my grid. I assigned data- values to the rows and columns which allowed me to create the necessary rules for connect four. In real life much of the game of connect four is governed by gravity.To create this logic, I had to make sure that when I selected a column to place a token, that it dropped to its lowest available position using the data- attributes I added to the table. After I got this gravity game logic working the next step was to get the winning logic working. I spent a long time trying to figure this out by myself, but finally I came across some code on Stack Overflow that helped me make sense of how the winning game logic could be applied. Once I got the game logic working it was time for me to start working on the many things I was saving in my icebox. Among those things was a score counter, as well as a moving the word "turn" above each score counter to signify the current turn. The next thing I really wanted to implement was a color selecting table. I wanted it so that if its player1's turn, then player1 could select a color and not only will the color of each player 1 token in the board changed color, but also adding a new player1 move will be the new color that has been selected. This allows people to change colors in the middle of a game without effecting the gameplay. As an additional feature I set it so that the moving word "turn" also changes color according to the color of the current player. The final step I took was to style the rest of the game so that it looked nice. I added a marble background because I enjoy the aesthetic of the real material type of background. Creating this game has been a great learning experience for me, I feel like I understand how to create a game from scratch much better than I understood when I made my first game tic-tac-toe. 


