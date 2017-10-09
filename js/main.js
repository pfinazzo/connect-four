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
  var player1color = "red";
  var player2color = "blue";
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
    row = parseInt(row, 10);
    column = parseInt(column, 10);
  board[row][column] === (1 || undefined) || board[row][column] === (2 || undefined) ? board[row][column] = turn : board[row][column] = turn;
  (board[row][column] === 1) ? $(this).css({ "background-color": `${player1color}`}) : $(this).css({ "background-color": `${player2color}`})
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





