const board = document.getElementById("RPS-board");
const playerBoard = document.getElementById("player-board");

let rounds = [];
let points = [];

// buttons
const startBtn = document.getElementById("start-game-btn");
startBtn.addEventListener("click", startGame);
document.getElementById("rock-btn").addEventListener("click", userPlay);
document.getElementById("paper-btn").addEventListener("click", userPlay);
document.getElementById("scissors-btn").addEventListener("click", userPlay);

/* return rock, paper or scissor according the random number Math.random return */
/* 0-2 scissors, 3-5 paper or 6-8 rock */
function computerPlay() {
  let number = Math.floor(Math.random() * 9);
  return number > 2 ? (number > 5 ? "rock" : "paper") : "scissors";
}

/* return a round result*/
function playRound(playerSelection, computerFunction) {
  let computerSelection = computerFunction();

  switch (playerSelection) {
    case "paper":
      if (computerSelection === "paper") return `Draw`;
      if (computerSelection === "scissors")
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      if (computerSelection === "rock")
        return `You win! ${playerSelection} beats ${computerSelection}`;
      break;
    case "scissors":
      if (computerSelection === "scissors") return `Draw`;
      if (computerSelection === "rock")
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      if (computerSelection === "paper")
        return `You win! ${playerSelection} beats ${computerSelection}`;
      break;
    case "rock":
      if (computerSelection === "rock") return `Draw`;
      if (computerSelection === "paper")
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      if (computerSelection === "scissors")
        return `You win! ${playerSelection} beats ${computerSelection}`;
      break;
    default:
      return 'You have to enter "paper", "scissors" or "rock"';
  }
}

/* triggered by (paper, scissors and rock) buttons onclick event. it execute a game round */
function userPlay(e) {
  e.stopPropagation();
  if (rounds.length < 5) {
    // player
    let playerSelection = e.target.name;
    let playerSelectionTag = document.createElement("small");
    playerSelectionTag.textContent = `you selected: ${playerSelection}`;

    // round
    let roundResult = playRound(playerSelection, computerPlay);
    /*     window.alert(roundResult); */
    let roundResultTag = document.createElement("p");

    if (roundResult.includes("win")) {
      roundResultTag.className += " primary";
      points.push(1);
    } else {
      roundResultTag.className += " secondary";
      points.push(0);
    }

    roundResultTag.textContent = `Round ${++rounds.length}: ${roundResult}`;

    // board game
    board.appendChild(playerSelectionTag);
    board.appendChild(roundResultTag);

    // rounds array
    rounds.push = roundResultTag.textContent;
    if (rounds.length > 4) finishGame();
  }
  return;
}

/* triggered by rounds array length, it sets the game final result and refresh the window */
function finishGame() {
  startBtn.className += " hide";

  let totalPoints = points.reduce((prev, curr) => prev + curr, 0);

  let gameResultTag = document.createElement("p");

  if (totalPoints > 2) {
    gameResultTag.className += " primary title";
    gameResultTag.textContent = `You won the game!`;
  } else {
    gameResultTag.className += " secondary title";
    gameResultTag.textContent = `You lost the game!`;
  }
  board.appendChild(gameResultTag);
  setTimeout(() => {
    window.location.reload();
  }, 5000);
}

/* triggered by start button, start or restart a game*/
function startGame(e) {
  e.stopPropagation();

  window.alert(`Let's play Rock, paper or scissors!`);

  // restart if it is necessary
  if (rounds.length > 0) {
    board.innerHTML = "";
    rounds = [];
    points = [];
    playerBoard.removeAttribute("class", "hide");
  } else {
    playerBoard.removeAttribute("class", "hide");
    startBtn.textContent = "Restart";
  }
}
