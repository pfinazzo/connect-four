$(function () {
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

  var player1Color = '';
  var player2Color = '';
  var player1 = 1;
  var player2 = 2;
  var turn;
  var tie;
  var tieCount = 0;

  /*----- cached element references -----*/
  var $gameboard = $("#gameboard");
  var $resetBoard = $("#resetboard");
  var $reset = $("#reset");
  var $resetGame = $("#resetgame");
  var $red = $(".redClass");
  var $orange = $(".orangeClass");
  var $gold = $(".goldClass");
  var $yellowgreen = $(".yellowgreenClass");
  var $green = $(".greenClass");
  var $darkcyan = $(".darkcyanClass");
  var $blue = $(".blueClass");
  var $purple = $(".purpleClass");
  var $pink = $(".pinkClass");
  var $violet = $(".violetClass");

  var $player1score = $("#player1score");
  var $player2score = $("#player2score");
  var $turn1 = $("#turn1");
  var $turn2 = $("#turn2");
  var $score1 = $("#score1");
  var $score2 = $("#score2");
  var $tieGame = $("#tieGame");
  var $table1Cell = $(".table1cell");


  /*----- event listeners -----*/
  $gameboard.on("click", "td", click);
  $resetBoard.on("click", init);
  $reset.on("click", init2);
  $resetGame.on("click", clearScore);
  // color event listeners
  $red.on("click", red);
  $orange.on("click", orange);
  $gold.on("click", gold);
  $yellowgreen.on("click", yellowgreen);
  $green.on("click", green);
  $darkcyan.on("click", darkcyan);
  $blue.on("click", blue);
  $purple.on("click", purple);
  $pink.on("click", pink);
  $violet.on("click", violet);


  /*----- functions -----*/
  function init() {
    player1Color = "red";
    player2Color = "blue";
    $player1score.css({ "color": player1Color });
    $player2score.css({ "color": player2Color });
    $table1Cell.css({ "background-color": "" });
    $turn2.text(null);
    $turn1.text("turn");
    board = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
  };

  function init1() {
    init();
    turn = player1;
  };

  function initWin() {
    init();
    turn === player1 ? $turn2.text(null) && $turn1.text("turn") : $turn1.text(null) && $turn2.text("turn");
    }


  function init2() {
    init();
    turn = player1;
    player1Color = "red";
    player2Color = "blue";
    $turn1.css({ "color": player1Color });
    $turn2.css({ "color": player2Color });
    clearScore();
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
      if ((board[nextRow] === undefined || board[nextRow][column] === 1 || board[nextRow][column] === 2)) {
        board[currentRow][column] = turn;
        return switchTurn();
        var lastOpenRow = nextRow;
      }
    }
  };

  function switchTurn() {
    turn === player1 ? turn = player2 : turn = player1;
    update();
  }

  function update() {
    $turn1.css({ "color": player1Color });
    $turn2.css({ "color": player2Color });
    $player1score.css({ "color": player1Color });
    $player2score.css({ "color": player2Color });
    for (var index = 0; index < board.length; index++) {
      var row = board[index];
      for (var j = 0; j < board[index].length; j++) {
        var column = board[index][j];
        if (column === 1) {
          $(`[data-row=${index}]>[data-col=${j}]`).css({ "background-color": player1Color });
        } else if (column === 2) {
          $(`[data-row=${index}]>[data-col=${j}]`).css({ "background-color": player2Color });
        }
      }
    }
    turn === player1 ? ($turn2.text(null) && $turn1.text("turn")) : ($turn1.text(null) && $turn2.text("turn"));
    checkTie(board);
  }

  function checkMatch(cell1, cell2, cell3, cell4) {
    if ((cell1 !== 0) && (cell1 === cell2) && (cell1 === cell3) && (cell1 === cell4)) {
      if (cell1 === 1) {
        turn = player1;
        player1score++;
        $score1.text(player1score);
        initWin();
      } else {
        turn = player2;
        player2score++;
        $score2.text(player2score);
        initWin();
      }
    }
  };

  function checkTie(board) {
    for (var r = 5; r >= 0; r--) {
      board[r].forEach(function (c) {
        c !== 0 && (board[r][c] === 1 || board[r][c] === 2) ? tie = true : tie = false;
        });
      };
    if (tie === true) {
      tieCount++;
      $tieGame.text(tieCount);
      init1();
    } else {
      checkWinner(board);
    }
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
    $score1.text(player1score);
    $score2.text(player2score);
    $tieGame.text(tieCount);
  }

  // color functions

  function red() {
    if (turn === player1) {
      if (player2Color !== "red") {
        player1Color = "red";
      }
    } else if (turn === player2) {
      if (player1Color !== "red") {
        player2Color = "red";
      }
    } update();
  }

  function orange() {

    if (turn === player1) {
      if (player2Color !== "orange") {
        player1Color = "orange";
      }
    } else if (turn === player2) {
      if (player1Color !== "orange") {
        player2Color = "orange";
      }
    } update();
  }



  function gold() {
    if (turn === player1) {
      if (player2Color !== "gold") {
        player1Color = "gold";
      }
    } else if (turn === player2) {
      if (player1Color !== "gold") {
        player2Color = "gold";
      }
    } update();
  }

  function yellowgreen() {
    if (turn === player1) {
      if (player2Color !== "yellowgreen") {
        player1Color = "yellowgreen";
      }
    } else if (turn === player2) {
      if (player1Color !== "yellowgreen") {
        player2Color = "yellowgreen";
      }
    } update();
  }

  function green() {
    if (turn === player1) {
      if (player2Color !== "green") {
        player1Color = "green";
      }
    } else if (turn === player2) {
      if (player1Color !== "green") {
        player2Color = "green";
      }
    } update();
  }

  function darkcyan() {
    if (turn === player1) {
      if (player2Color !== "darkcyan") {
        player1Color = "darkcyan";
      }
    } else if (turn === player2) {
      if (player1Color !== "darkcyan") {
        player2Color = "darkcyan";
      }
    } update();
  }

  function blue() {
    if (turn === player1) {
      if (player2Color !== "blue") {
        player1Color = "blue";
      }
    } else if (turn === player2) {
      if (player1Color !== "blue") {
        player2Color = "blue";
      }
    } update();
  }

  function purple() {
    if (turn === player1) {
      if (player2Color !== "purple") {
        player1Color = "purple";
      }
    } else if (turn === player2) {
      if (player1Color !== "purple") {
        player2Color = "purple";
      }
    } update();
  }

  function pink() {
    if (turn === player1) {
      if (player2Color !== "pink") {
        player1Color = "pink";
      }
    } else if (turn === player2) {
      if (player1Color !== "pink") {
        player2Color = "pink";
      }
    } update();
  }

  function violet() {
    if (turn === player1) {
      if (player2Color !== "violet") {
        player1Color = "violet";
      }
    } else if (turn === player2) {
      if (player1Color !== "violet") {
        player2Color = "violet";
      }
    } update();
  }
  init1();
});