$(function () {
  /*----- constants -----*/
  
  /*----- app's state (variables) -----*/
  var board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  // var player1color = "yellow";
  // var player2color = "blue";
  var playerMove = '';
  var player1 = 1;
  var player2 = 2;
  var turn;
  // var blankspace = null;
  

  
  
  /*----- cached element references -----*/






  /*----- event listeners -----*/
  $('table').on('click', 'td', click);





  /*----- functions -----*/
  function init() {
    $('td').css({ "background-color": "white" });
    turn = player1;
    board = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
  };



  function click(event) {
    var cellTarget = $(event.target); // event target's cell
    var column = cellTarget.attr("data-col"); // event target's column
    var row = cellTarget.parent().attr("data-row"); // event target's row
    console.log(row, column);
    row = parseInt(row, 10);
    column = parseInt(column, 10);
    console.log(board);
   
    
    
    console.log(turn);
    console.log(board);

    // ((cellTarget.css({"background-color": "white"}) && ((board[row][column] === 0)) && (board[(row + 1)][column] === 1 || board[(row + 1)][column] === 2) || (board[(row + 1)][column] !== undefined))) ? board[row][column] = turn : ((board[(row + 1)][column] = turn) && row + 1);
    // if the cell you click is white (from init) and both the corresponding targeted cell in the board array contains a 0 and the cell below is not zero or undefined (undefined takes care of the situation where we are clicking on a cell in row 6) then the board will have the player value pushed to the board array, otherwise the cell below (row +1) has the data pushed into that square
    

    // board[row].forEach(function (column) {
    //   turn === player1 ? board[row][column] = player1 : board[row][column] = player2;
    // });
   (board[row][column] === 0) ? (board[row][column] = turn) : (board[row - 1][column] = turn);
  //  for (var i = 0; i < board[0].length; i++){
  //   if (board.lastIndexOf(0) === board[5][i]) {
  //     board[row][column] = 5;
  //   }
  //  }
  if (board[row][column] === 1) {
    $(this).addClass("player1move");
  } else if (board[row][column] === 2) {
    $(this).addClass("player2move");
  }
   
 
      
    console.log(board);
    // for each element in whatever row has been selected, if the turn is player1 then push player1's data (1) to the corresponding cell in the board array, otherwise (i.e. turn === player2) push player2's data to the board array
    

    // checkBoard(row, column);
    render();
    switchTurn();
  };


function render() {
  turn === player1 ? playerMove = "player1move" : playerMove = "player2move";
};



// function checkBoard(row, column, elem) {
//  for (var i = 0; i < board[row].length; i++) {
//    if(board[row][i] === true){
//     $(`[data-row=${i}]>[data-col=${column}]`).addClass(playerMove)
//     // ^ runs through the gameboard to find out where which spaces has moved and adds a class of the variable playerMove (which switches between player1move and player2move depending on the state of the variable 'turn') to the clicked table cell 
//    };
//  };
//   if (elem === 'true') {
//         return elem;
//      };
// };


function switchTurn() {
  if (turn === player1) {
    turn = player2;
  } else {
    turn = player1;
  } 
}

init();
});





