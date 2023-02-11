(function () {
  const rounds = {};
  const points = [];

  /* return rock, paper or scissor according the random number Math.random return */
  /* 0-2 scissors, 3-5 paper or 6-8 rock */
  function computerPlay() {
    let number = Math.floor(Math.random() * 9);
    return number > 2 ? (number > 5 ? "rock" : "paper") : "scissors";
  }

  /* return player input value after checking */
  function playerPlay() {
    let playerInput = window.prompt(
      `Round ${points.length + 1}: Rock, paper or scissors?`
    );

    if (!playerInput) return null;

    let playerSelection = playerInput.trim().toLowerCase();

    if (["paper", "rock", "scissors"].includes(playerSelection)) {
      return playerSelection;
    }

    return null;
  }

  /* return a round result */
  function playRound(computerFunction, playerFunction) {
    let computerSelection = computerFunction();
    let playerSelection = playerFunction();

    if (playerSelection === null) return null;

    switch (playerSelection) {
      case "paper":
        if (computerSelection === "paper") {
          return `You: ${playerSelection} Computer: ${computerSelection} => Draw`;
        }
        if (computerSelection === "scissors") {
          return `You: ${playerSelection} Computer: ${computerSelection} => You lost`;
        }
        if (computerSelection === "rock") {
          return `You: ${playerSelection} Computer: ${computerSelection} => You won`;
        }
        break;
      case "scissors":
        if (computerSelection === "scissors") {
          return `You: ${playerSelection} Computer: ${computerSelection} => Draw`;
        }
        if (computerSelection === "rock") {
          return `You: ${playerSelection} Computer: ${computerSelection} => You lost`;
        }
        if (computerSelection === "paper") {
          return `You: ${playerSelection} Computer: ${computerSelection} => You won`;
        }
        break;
      case "rock":
        if (computerSelection === "rock") {
          return `You: ${playerSelection} Computer: ${computerSelection} => Draw`;
        }
        if (computerSelection === "paper") {
          return `You: ${playerSelection} Computer: ${computerSelection} => You lost`;
        }
        if (computerSelection === "scissors") {
          return `You: ${playerSelection} Computer: ${computerSelection} => You won`;
        }
        break;
      default:
        return null;
    }
  }

  /* return game final score */
  function calcFinalScore() {
    let totalPoints = points.reduce((prev, curr) => prev + curr, 0);

    if (totalPoints > 2) {
      console.log(`FINALLY: You won the game!`);
    } else {
      console.log(`FINALLY: You lost the game!`);
    }
    console.table("ROUNDS SUMMARY:", rounds);
  }

  /* play a game (5 rounds) */
  function game(roundFunction, computerFunction, playerFunction) {
    while (points.length < 5) {
      let roundResult = roundFunction(computerFunction, playerFunction);

      if (roundResult === null) {
        continue;
      } else {
        // points
        if (roundResult.includes("won")) points.push(1);
        if (roundResult.includes("lost") || roundResult.includes("Draw"))
          points.push(0);

        // rounds object
        rounds[`${points.length}`] = roundResult;
        console.log(`ROUND ${points.length}: ${roundResult}`);
      }
    }
    calcFinalScore();
  }

  game(playRound, computerPlay, playerPlay);
})();
