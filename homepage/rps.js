/*
function that gets either rock paper or scissors from user

function that randomly selects rock paper or scissors from computer

function that compares the users response to computers response
  if they are the same its a tie
  else etc etc

counter that keeps track of wins
if counter gets to 5 for either human or computer game is over 




*/


$(document).ready(function(){
  $("#rock").fadeIn(1000);
  $("#paper").fadeIn(3000);
  $("#scissors").fadeIn(5000);
});


//collect score data
let playerScore = 0;
let computerScore = 0;

// create variable attached to each button
const btn = document.querySelectorAll("button");
// for each button add an event listener for when its clicked and play the gamplay function passing in button value
btn.forEach((button) => {
    button.addEventListener('click', function(){gameplay(button.value)});
});

//randomize computer response
function getComputerResponse(){
  let options = ['rock', 'paper', 'scissors']
  let num = (Math.floor(Math.random() * 3))
  let computerPick = options[num];
  return computerPick;
  
}
 
//compare user response to computer response
function gameplay(userResponse){
  let computerSelection = getComputerResponse();
  if (userResponse == computerSelection){
    result.innerHTML = "It's a TIE, better luck next round!";
  } else if (userResponse == 'rock'){
    if (computerSelection == 'paper'){
      result.innerHTML = "The computer killed B-Mo and defeated you";
      computerScore++;
    } else {
      result.innerHTML = "You crushed the computer's soul and emerged victorious";
      playerScore++;
    }
  } else if (userResponse == 'paper'){
    if(computerSelection == 'scissors'){
      result.innerHTML = "The computer killed B-Mo and defeated you";
      computerScore++;
    } else {
      result.innerHTML = "You crushed the computer's soul and emerged victorious";
      playerScore++;
    } 
  } else if (userResponse == 'scissors'){
    if (computerSelection == 'rock'){
      result.innerHTML = "The computer killed B-Mo and defeated you";
      computerScore++;
    } else {
      result.innerHTML = "You crushed the computer's soul and emerged victorious";
      playerScore++;
    }
  } else if (userResponse == "truj"){
    result.innerHTML = "WOW, You've selected the Truj option & Truj always wins, 50 points";
    playerScore = playerScore + 50;
  } else if (userResponse == "angie"){
    result.innerHTML = "yikes, you pressed the Angie option that kept brandon up past midnight, you lose all your points";
      playerScore = 0;
  } else if (userResponse == 'reset'){
    playerScore = 0;
    computerScore = 0;
  }
  document.querySelector("#player-score span").innerHTML = playerScore;
  document.querySelector("#computer-score span").innerHTML = computerScore; 
  determineWinner(playerScore, computerScore);
}

// compares scores dymanically to determine winner
function determineWinner(playerScore, computerScore){
  if (playerScore >= 10 || computerScore == 10){
    if (playerScore > computerScore){
      document.querySelector('#winner span').innerHTML = "You win!";
    } else if (computerScore > playerScore){
      document.querySelector('#winner span').innerHTML = "The computer wins!";
    } 
  }
}

function reset(){
    document.querySelector('#winner span').innerHTML = '';
    result.innerHTML = 'Start Over!';
    
}

document.getElementById('reset').onclick = function(){reset()};




