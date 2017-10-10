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

  var player1Color = "red";
  var player2Color = "blue";
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
    for (var i = row; i <= board.length - 1; i++){
      var currentRow = i;
      var nextRow = currentRow + 1;
      console.log(nextRow);
    if ((board[nextRow] === undefined ||board[nextRow][column] === 1 || board[nextRow][column] === 2)){
      board[currentRow][column] = turn;
      return switchTurn();
    } 
    // else if (board[nextRow][column] === 0 && currentRow === 5) {
      var lastOpenRow = nextRow;
    //   nextRow = String(nextRow);
    //     // cellTarget.parent().attr("data-row", nextRow);
    //     var newCellTarget = cellTarget;
    //     nextRow = parseInt(nextRow, 10);
    //     board[lastOpenRow][column] = turn;
    // }
  } 
  // colorSelect();
  //   if (board[lastOpenRow][column] === 1) {
  //     $(newCellTarget).css({ "background-color": `${player1Color}`}); 
  //   } else if (board[lastOpenRow][column] === 2) {
  //     $(newCellTarget).css({ "background-color": `${player2Color}`});
  //   }
    // row = row = cellTarget.parent().attr("data-row");
    // row = parseInt(row, 10);
      
};




function colorSelect() {
      if (turn === player1) {
        currentColor = player1Color;
      } else {
        currentColor = player2Color;
      } 
    }




function switchTurn() {
  if (turn === player1) {
    turn = player2;
  } else {
    turn = player1;
  }
  console.log(board);
  colorSelect();
  update();
}

function update() {
  for (var index = 0; index < board.length; index++) {
    var row = board[index];
    for (var j = 0; j < board[index].length; j++) {
      var column = board[index][j];
      if(column === 1) {
        $(`[data-row=${index}]>[data-col=${j}]`).addClass('player1color');
      } else if (column === 2) {
        $(`[data-row=${index}]>[data-col=${j}]`).addClass('player2color');
      }
    }
    
  }
}


init();
});






