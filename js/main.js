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



  var player1Color = "Red";
  var player2Color = "Blue";
  var player1 = 1;
  var player2 = 2;
  var turn;
  /*----- cached element references -----*/


  /*----- event listeners -----*/
  $('table').on('click', 'td', click);
  $('#reset').on('click', init);


  /*----- functions -----*/
  function init() {
    $('td').removeClass('player1color');
    $('td').removeClass('player2color');
    $('td').css({ "background-color": "white" });
    turn = player1;
    console.log(player1)
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
    if (board[row][column] === 1 || board[row][column] === 2){
      return;
    }
    for (var i = row; i <= board.length - 1; i++) {
      var currentRow = i;
      var nextRow = currentRow + 1;
      console.log(nextRow);
      if ((board[nextRow] === undefined || board[nextRow][column] === 1 || board[nextRow][column] === 2)) {
        board[currentRow][column] = turn;
        return switchTurn();
        var lastOpenRow = nextRow;
      }
    }
  };


  function switchTurn() {
    if (turn === player1) {
      turn = player2;
    } else {
      turn = player1;
    }
    console.log(board);
    update();
  }


  function update() {
    for (var index = 0; index < board.length; index++) {
      var row = board[index];
      for (var j = 0; j < board[index].length; j++) {
        var column = board[index][j];
        if (column === 1) {
          $(`[data-row=${index}]>[data-col=${j}]`).addClass('player1color');
        } else if (column === 2) {
          $(`[data-row=${index}]>[data-col=${j}]`).addClass('player2color');
        }
      }

    }
    checkWinner(board);
  }

  function checkMatch(cell1, cell2, cell3, cell4) {
    if ((cell1 !== 0) && (cell1 === cell2) && (cell1 === cell3) && (cell1 === cell4)) {
      init();
      if (cell1 === 1) {
        alert(`${player1Color} has won!`);
      } else {
        alert(`${player2Color} has won!`);
      }
    }
  };


  function checkWinner(board) {
    // Check down
    for (r = 0; r < 3; r++) {
      for (c = 0; c < 7; c++) {
        if (checkMatch(board[r][c], board[r + 1][c], board[r + 2][c], board[r + 3][c])) {
          alert('winner');
        }
      }
    }

    // Check right
    for (r = 0; r < 6; r++) {
      for (c = 0; c < 4; c++) {
        if (checkMatch(board[r][c], board[r][c + 1], board[r][c + 2], board[r][c + 3])) {
          alert('winner');
        }
      }
    }


    // Check down-right
    for (r = 0; r < 3; r++) {
      for (c = 0; c < 4; c++) {
        if (checkMatch(board[r][c], board[r + 1][c + 1], board[r + 2][c + 2], board[r + 3][c + 3])) {
          alert('winner');
        }
      }
    }


    // Check down-left
    for (r = 3; r < 6; r++) {
      for (c = 0; c < 4; c++) {
        if (checkMatch(board[r][c], board[r - 1][c + 1], board[r - 2][c + 2], board[r - 3][c + 3])) {
          alert('winner');
        }
      }
    }
  }


  init();
});





