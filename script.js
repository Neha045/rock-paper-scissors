function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors");
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return `It's a Draw! \nYour score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You Win! ${humanChoice} beats ${computerChoice}. \nYour score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore++;
    return `You Lose! ${computerChoice} beats ${humanChoice}. \nYour score: ${humanScore}, Computer score: ${computerScore}`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(choices);
    const result = playRound(humanSelection, computerSelection);
    console.log(result);
  }
  if (humanScore > computerScore) {
    console.log("Game over: You win!");
  } else if (humanScore < computerScore) {
    console.log("Game over: You lose!");
  } else {
    console.log("Game over: It's a draw!");
  }
  if (confirm("Play again?")) {
    humanScore = 0;
    computerScore = 0;
    playGame();
  }
}

choices = ["Rock", "Paper", "Scissors"];
playGame();
