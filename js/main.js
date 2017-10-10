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

  var player1color = "red";
  var player2color = "blue";
  var player1 = 1;
  var player2 = 2;
  var turn;
  var currentColor;

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
    row = parseInt(row, 10);
    column = parseInt(column, 10);
    if (board[row + 1][column] === 1 || board[row + 1][column] === 2) {
      if (board[row][column] === 1 || board[row][column] === 2) {
        return;
      }
      console,log(board[row][column])
    } else {
      board[row][column] = 0;
      if (row === 4 && board[5][column] === 0) {
        board[5][column] = turn;
        var row = 5;
      } else if (row === 3 && board[4][column] === 0 && board[5][column] === 0) {
        board[5][column] = turn;
        var row  = 5;
      } else if (row === 2 && board[3][column] === 0 && board[4][column] === 0 && board[5][column] === 0) {
        board[5][column] = turn;
        var row  = 5;
      } else if (row === 1 && board[2][column] === 0 && board[3][column] === 0 && board[4][column] === 0 && board[5][column] === 0) {
        board[5][column] = turn;
        var row  = 5;
      } else if (row === 0 && board[1][column] === 0 && board[2][column] === 0 && board[3][column] === 0 && board[4][column] === 0 && board[5][column] === 0) {
        board[5][column] = turn;
        var row  = 5;
      } else if (row === 4 && board[5][column] === (1 || 2)) {
        board[4][column] = turn;
        var row  = 4;
      } else if (row === 3 && board[4][column] === 0 && board[5][column] === (1 || 2)) {
        board[4][column] = turn;
        var row  = 4;
      } else if (row === 2 && board[3][column] === 0 && board[4][column] === 0 && board[5][column] === (1 || 2)) {
        board[4][column] = turn;
        var row  = 4;
      } else if (row === 1 && board[2][column] === 0 && board[3][column] === 0 && board[4][column] === 0 && board[5][column] === (1 || 2)) {
        board[4][column] = turn;
        var row  = 4;
      } else if (row === 0 && board[1][column] === 0 && board[2][column] === 0 && board[3][column] === 0 && board[4][column] === 0 && board[5][column] === (1 || 2)) {
        board[4][column] = turn;
        var row  = 4;
        } else if (row === 3 && board[4][column] === (1 || 2) && board[5][column] === (1 || 2)) {
          board[3][column] = turn;
          var row  = 3;
        } else if (row === 2 && board[3][column] === 0 && board[4][column] === (1 || 2) && board[5][column] === (1 || 2)) {
          board[3][column] = turn;
          var row  = 3;
        } else if (row === 1 && board[2][column] === 0 && board[3][column] === 0 && board[4][column] === (1 || 2) && board[5][column] === (1 || 2)) {
          board[3][column] = turn;
          var row  = 3;
        } else if (row === 0 && board[1][column] === 0 && board[2][column] === 0 && board[3][column] === 0 && board[4][column] === (1 || 2) && board[3][column] === (1 || 2)) {
          board[3][column] = turn;
          var row  = 3;
        } else if (row === 2 && board[3][column] === (1 || 2) && board[4][column] === (1 || 2) && board[5][column] === (1 || 2)) {
          board[2][column] = turn;
          var row  = 3;
        } else if (row === 1 && board[2][column] === 0 && board[3][column] === (1 || 2) && board[4][column] === (1 || 2) && board[5][column] === (1 || 2)) {
          board[2][column] = turn;
          var row  = 2;
        } else if (row === 0 && board[1][column] === 0 && board[2][column] === 0 && board[3][column] === (1 || 2) && board[4][column] === (1 || 2) && board[5][column] === (1 || 2)) {
          board[2][column] = turn;
          var row  = 2;
        } else if (row === 1 && board[2][column] === (1 || 2) && board[3][column] === (1 || 2) && board[4][column] === (1 || 2) && board[5][column] === (1 || 2)) {
          board[1][column] = turn;
          var row  = 1;
        } else if (row === 0 && board[1][column] === 0 && board[2][column] === (1 || 2) && board[3][column] === 0 && board[4][column] === (1 || 2) && board[3][column] === (1 || 2)) {
          board[1][column] = turn;
          var row  = 1;
        } else if (row === 0 && board[1][column] === (1 || 2) && board[2][column] === (1 || 2) && board[3][column] === (1 || 2) && board[4][column] === (1 || 2) && board[5][column] === (1 || 2)) {
          board[0][column] = turn;
          var row  = 1;
        };
        row.toString();
    }
    var newCellTarget = cellTarget.parent().attr("data-row", row)
    
   // parse ints are converting strings into numbers with base 10
  
if (board[row][column] === 1) {
  $(this).css({ "background-color": `${player1color}`}) 
} else if (board[row][column] === 0) {
  $(this).css({ "background-color": `${player2color}`});
};
    console.log(board);
      switchTurn();
    };
  

  function colorSelect() {
      if (turn === player1) {
        currentColor = player1;
      } else {
        currentColor = player2;
      } 
    }


function switchTurn() {
  if (turn === player1) {
    turn = player2;
  } else {
    turn = player1;
  } 
  colorSelect();
}


init();
});





