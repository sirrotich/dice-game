

//business logic
var player1="";
var player2="";


function Player(turn) {
  this.roll = 0;
  this.turnscore = 0;
  this.overallscore = 0;
  this.pause = pause;
}
var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}

// checking for 1
Player.prototype.ROLL = function() {
  if (this.roll === 1) {
  this.turnscore = 0;
  alert("Sorry you rolled a 1! Your turn is over!")

  } else {
  this.turnscore += this.roll;
  }
}
Player.prototype.pause = function () {
  this.overallscore += this.turnscore;
  this.turnscore = 0;

  alert(" your turn is over");
}

// changing turn
Player.prototype.changeturn = function () {
  if (this.roll ===1) {
    this.turn = false;
  } else {
    this.turn = true;
  }
}
check for 100
Player.prototype.winnerCheck = function () {
  if (this.turnscore >= 100) {
    alert(" You are the winner!");
  }
}

//User Interface
$(document).ready(function() {
  $("button.roll1 btn").click(function(event){
    player1.roll = throwdice();
    $(".diceRoll1").text(player1.roll);
    player1.rollone();
    $(".turnScore1").text(player1.turnscore);
    alert(yes);
  });

  $("button.roll2 btn").click(function(event){
    player2.roll = throwdice();
    $(".diceRoll2").text(player2.roll);
    player2.rollone();
    $("turnScore2").text(player2.turnscore);
  });

  $("button.pause1 btn").click(function(event){
    player1.pause();
    $("#turnScore1").text(player1.overallscore);
    $("#overallScore1").empty();
    $("#diceRoll1").empty();
    player1.winnerCheck();
  });

  $("button.pause2 btn").click(function(event){
    player2.pause();
    $("#turnScore2").text(player2.overallscore);
    $("#overallScore2").empty();
    $("#diceRoll2").empty();
    player2.winnerCheck();
  });
    event.preventDefault();
});
