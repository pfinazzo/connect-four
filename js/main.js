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

  var player1score = 0;
  var player2score = 0;

  var player1Color = "Red";
  var player2Color = "Blue";
  var player1 = 1;
  var player2 = 2;
  var turn;
  var tie;
  var tieCount = 0;
  /*----- cached element references -----*/

  /*----- event listeners -----*/
  $('#gameboard').on('click', 'td', click);
  $('#resetboard').on('click', init);
  $('#reset').on('click', init2);
  $('#resetgame').on('click', clearScore);
  // $('.redClass').on('click', red);
  // $('.orangeClass').on('click', orange);
  // $('.yellowClass').on('click', yellow);
  // $('.yellowgreenClass').on('click', yellowgreen);
  // $('.greenClass').on('click', green);
  // $('.bluegreenClass').on('click', bluegreen);
  // $('.blueClass').on('click', blue);
  // $('.purpleClass').on('click', purple);
  // $('.pinkClass').on('click', pink);
  // $('.violetClassgi').on('click', violet);


  /*----- functions -----*/
  function init() {
    $('.table1cell').removeClass('player1color');
    $('.table1cell').removeClass('player2color');
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
      if (board[row][column] === 1 || board[row][column] === 2) {
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
    turn === player1 ? ($('#turn2').text(null) && $('#turn1').text('turn')) : ($('#turn1').text(null) && $('#turn2').text('turn'));
    checkWinner(board);
  }

  function checkMatch(cell1, cell2, cell3, cell4) {
    if ((cell1 !== 0) && (cell1 === cell2) && (cell1 === cell3) && (cell1 === cell4)) {
      init();
      if (cell1 === 1) {
        alert(`${player1Color} has won!`);
        player1score++;
        $('#score1').text(player1score);
      } else {
        alert(`${player2Color} has won!`);
        player2score++;
        $('#score2').text(player2score);
      }
    }
  };

  function checkTie() {
  board.forEach(function(i){
    board[i].forEach(function(j){
      if (board[i][j] === 0) {
       tie = false;
      } else {
        tie = true;
      } 
    });    
  });

  tie === true ? switchTurn : tieCount++ && alert('Tie Game!') && $('#.tieGame').text(tieCount);
  }


  function checkWinner(board) {
    // Check down
    for (r = 0; r < 3; r++) {
      for (c = 0; c < 7; c++) {
        checkMatch(board[r][c], board[r + 1][c], board[r + 2][c], board[r + 3][c]);
      }
    }


    // Check right
    for (r = 0; r < 6; r++) {
      for (c = 0; c < 4; c++) {
        checkMatch(board[r][c], board[r][c + 1], board[r][c + 2], board[r][c + 3]);
      }
    }



    // Check down-right
    for (r = 0; r < 3; r++) {
      for (c = 0; c < 4; c++) {
        checkMatch(board[r][c], board[r + 1][c + 1], board[r + 2][c + 2], board[r + 3][c + 3]);
      }
    }



    // Check down-left
    for (r = 3; r < 6; r++) {
      for (c = 0; c < 4; c++) {
        checkMatch(board[r][c], board[r - 1][c + 1], board[r - 2][c + 2], board[r - 3][c + 3])
      }
    }
  }

  function clearScore() {
    tieCount = 0;
    player1score = 0;
    player2score = 0;
    $('#score1').text(player1score);
    $('#score2').text(player2score);
    $('#.tieGame').text(tieCount);
  }

  function init2() {
    $('.table1cell').removeClass('player1color');
    $('.table1cell').removeClass('player2color');
    turn = player1;
    console.log(player1)
    // board = [
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0]
    // ];
  };
  // color functions
// function green() {
//   if (turn === player1){
//     $('.player1color').attr({"background-color": "green"});
//   } else {
//     $('.player2color').attr({"background-color": "green"});
//   }
// };

// $('.greenClass').on('click', green);

  // function red() {
  //   for (var index = 0; index < board.length; index++) {
  //     var row = board[index];
  //     for (var j = 0; j < board[index].length; j++) {
  //       var column = board[index][j];
  //       if (column === 1) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player1move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('redClass');
  //       } else if (column === 2) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player2move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('redClass');
  //       }
  //     }

  //   }
  //   }

  // function orange() {
  //   for (var index = 0; index < board.length; index++) {
  //     var row = board[index];
  //     for (var j = 0; j < board[index].length; j++) {
  //       var column = board[index][j];
  //       if (column === 1) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player1move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('orangeClass');
  //       } else if (column === 2) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player2move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('orangeClass');
  //       }
  //     }

  //   }
  //   }
  // function yellow() {
  //   for (var index = 0; index < board.length; index++) {
  //     var row = board[index];
  //     for (var j = 0; j < board[index].length; j++) {
  //       var column = board[index][j];
  //       if (column === 1) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player1move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('yellowClass');
  //       } else if (column === 2) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player2move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('yellowClass');
  //       }
  //     }

  //   }
  //   }
  // function yellowgreen() {
  //   for (var index = 0; index < board.length; index++) {
  //     var row = board[index];
  //     for (var j = 0; j < board[index].length; j++) {
  //       var column = board[index][j];
  //       if (column === 1) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player1move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('yellowgreenClass');
  //       } else if (column === 2) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player2move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('yellowgreenClass');
  //       }
  //     }

  //   }
  //   }
  // function green() {
  //   for (var index = 0; index < board.length; index++) {
  //     var row = board[index];
  //     for (var j = 0; j < board[index].length; j++) {
  //       var column = board[index][j];
  //       if (column === 1) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player1move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('greenClass');
  //       } else if (column === 2) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player2move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('greenClass');
  //       }
  //     }

  //   }
  //   }


  // function bluegreen() {
  //   for (var index = 0; index < board.length; index++) {
  //     var row = board[index];
  //     for (var j = 0; j < board[index].length; j++) {
  //       var column = board[index][j];
  //       if (column === 1) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player1move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('bluegreenClass');
  //       } else if (column === 2) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player2move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('bluegreenClass');
  //       }
  //     }

  //   }
  //   }

  // function blue() {
  //   for (var index = 0; index < board.length; index++) {
  //     var row = board[index];
  //     for (var j = 0; j < board[index].length; j++) {
  //       var column = board[index][j];
  //       if (column === 1) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player1move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('blueClass');
  //       } else if (column === 2) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player2move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('blueClass');
  //       }
  //     }

  //   }
  //   }
  // function purple() {
  //   for (var index = 0; index < board.length; index++) {
  //     var row = board[index];
  //     for (var j = 0; j < board[index].length; j++) {
  //       var column = board[index][j];
  //       if (column === 1) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player1move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('purpleClass');
  //       } else if (column === 2) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player2move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('purpleClass');
  //       }
  //     }

  //   }
  //   }

  // function pink() {
  //   for (var index = 0; index < board.length; index++) {
  //     var row = board[index];
  //     for (var j = 0; j < board[index].length; j++) {
  //       var column = board[index][j];
  //       if (column === 1) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player1move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('pinkClass');
  //       } else if (column === 2) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player2move');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('pinkClass');
  //       }
  //     }

  //   }
  //   }
  // function violet() {
  //   for (var index = 0; index < board.length; index++) {
  //     var row = board[index];
  //     for (var j = 0; j < board[index].length; j++) {
  //       var column = board[index][j];
  //       if (column === 1) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player1color');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('violetClass');
  //       } else if (column === 2) {
  //         $(`[data-row=${index}]>[data-col=${j}]`).removeClass('player2color');
  //         $(`[data-row=${index}]>[data-col=${j}]`).addClass('violetClass');
  //       }
  //     }

  //   }
  //   }
    init2();
  });





