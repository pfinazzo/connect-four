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
    // board[row][column] === true ?  : board[row][column] = turn;
    if (board[row][column] === 1) {
      return;
    } else if (board[row][column] === 2) {
      return;
    } else {
      board[row][column] = turn;
    }
    (board[row][column] === 1) ? $(this).css({ "background-color": `${player1color}`}) : $(this).css({ "background-color": `${player2color}`});
    console.log(board);
      switchTurn();
    };
  

function switchTurn() {
  if (turn === player1) {
    turn = player2;
  } else {
    turn = player1;
  } 
}

init();
});





