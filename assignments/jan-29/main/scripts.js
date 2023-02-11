/* this function return rock, paper or scissor according the random number Math.random return */
/* 
0-2 scissors,
3-5 paper
6-8 rock
*/
function computerPlay() {
  let number = Math.floor(Math.random() * 9);
  return number > 2 ? (number > 5 ? "rock" : "paper") : "scissors";
}

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

function game(roundFunction, computerFunction) {
  const rounds = {};
  const points = [];
  const board = document.getElementById("RPS-board");
  board.innerHTML = "";

  for (let index = 1; index < 6; index++) {
    let round = `Round ${index}`;
    let playerInput = window.prompt(`${round}: Rock, paper or scissors?`);
    let playerSelection = playerInput.toLowerCase();

    if (["paper", "rock", "scissors"].includes(playerSelection)) {
      let roundResult = roundFunction(playerSelection, computerFunction);
      window.alert(roundResult);
      // board div
      let pTag = document.createElement("p");
      pTag.textContent = `${round}: ${roundResult}`;
      board.appendChild(pTag);
      // rounds object
      rounds[round] = roundResult;
      // points
      if (roundResult.includes("win")) points.push(1);
      points.push(0);
    } else {
      alert('You have to enter "paper", "scissors" or "rock"');
      return;
    }
  }

  let totalPoints = points.reduce((prev, curr) => prev + curr, 0);
  let pTag = document.createElement("p");

  if (totalPoints > 2) {
    pTag.textContent = `You win!`;
  } else {
    pTag.textContent = `You lose!`;
  }
  board.appendChild(pTag);

  return rounds;
}
