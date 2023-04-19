const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if(result === 'Tie'){
    return "It's a Tie!";
  } else if (result === 'Player') {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}