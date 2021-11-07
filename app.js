$(function () {
    let player = 1;
    let table = $("table");
    let messages = $(".messages");
    let turn = $(".player-turn");
    displayNextPlayer(turn, player);
  
    $("td").click(function () {
      td = $(this);
      let state = getState(td);
      if (!state) {
        let pattern = definePatternForCurrentPlayer(player);
        changeState(td, pattern);
        if (checkIfPlayerWon(table, pattern)) {
          messages.html("<h1 class='display-1 bg-success' ><i class='fas fa-crown'></i>PLAYER " + player + " HAS WON THE MATCH<i class='fas fa-crown'></i></h1>");
          turn.html("");
        } else {
          player = setNextPlayer(player);
          displayNextPlayer(turn, player);
        }
      } else {
        messages.html("This box is already checked.");
      }
    });
  
    $(".reset-btn").click(function () {
      player = 1;
      messages.html("");
      reset(table);
      displayNextPlayer(turn, player);
    });
  });
  
  function getState(td) {
    if (td.hasClass("cross") || td.hasClass("circle")) {
      return 1;
    } else {
      return 0;
    }
  }
  
  function changeState(td, pattern) {
    return td.addClass(pattern);
  }
  
  function definePatternForCurrentPlayer(player) {
    if (player == 1) {
      return "cross";
    } else {
      return "circle";
    }
  }
  
  function setNextPlayer(player) {
    if (player == 1) {
      return (player = 2);
    } else {
      return (player = 1);
    }
  }
  
  function displayNextPlayer(turn, player) {
    turn.html("<h3 style='text-shadow: 1px 1px rgba(0, 0, 0, 0.2);'>It's Player " + player + "'s turn <i class='fas fa-gamepad'></i></h3>");
  }
  
  function checkIfPlayerWon(table, pattern) {
     won = 0;
    if (
      table.find(".cell1").hasClass(pattern) &&
      table.find(".cell2").hasClass(pattern) &&
      table.find(".cell3").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".cell1").hasClass(pattern) &&
      table.find(".cell4").hasClass(pattern) &&
      table.find(".cell7").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".cell1").hasClass(pattern) &&
      table.find(".cell5").hasClass(pattern) &&
      table.find(".cell9").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".cell4").hasClass(pattern) &&
      table.find(".cell5").hasClass(pattern) &&
      table.find(".cell6").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".cell7").hasClass(pattern) &&
      table.find(".cell8").hasClass(pattern) &&
      table.find(".cell9").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".cell2").hasClass(pattern) &&
      table.find(".cell5").hasClass(pattern) &&
      table.find(".cell8").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".cell3").hasClass(pattern) &&
      table.find(".cell6").hasClass(pattern) &&
      table.find(".cell9").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".cell3").hasClass(pattern) &&
      table.find(".cell5").hasClass(pattern) &&
      table.find(".cell7").hasClass(pattern)
    ) {
      won = 1;
    }
    return won;
  }
  
  function reset(table) {
    table.find("td").each(function () {
      $(this).removeClass("circle").removeClass("cross");
    });
  }
  