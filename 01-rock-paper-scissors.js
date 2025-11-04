console.log("==============================================");
console.log("============= Rock Paper Scissors ============");
console.log("==============================================");
console.log("");

const a = "rock";
const b = "paper";
const c = "scissors";
const enemyChoices = [a, b, c];

const win = "=>Result:        You win!🎉";
const lose = "=>Result:        You lose!";
const draw = "=>Result:        Draw!";

//======================================
//======= 1)PlayerChoice ===============
//======================================
let playerChoice = process.argv[2];
// playerChoice = a;
console.log(`You chose:       ${playerChoice}`);

//======================================
//======= 2)EnemyChoice (random) =======
//======================================
const randomNum = Math.random() * 3;
const flooredNum = Math.floor(randomNum);
const enemyChoice = enemyChoices[flooredNum];
console.log(`Computer chose:  ${enemyChoice}`);
console.log("");

// PLAYER CHOICE: ROCK
if (playerChoice === "rock") {
  switch (enemyChoice) {
    case "rock":
      console.log(draw);
      break;
    case "paper":
      console.log(lose);
      break;
    case "scissors":
      console.log(win);
      break;
    default:
      console.log(`=>No Results!`);
  }
}

// PLAYER CHOICE: PAPER
if (playerChoice === "paper") {
  switch (enemyChoice) {
    case "rock":
      console.log(win);
    case "paper":
      console.log(draw);
      break;
    case "scissors":
      console.log(lose);
      break;
    default:
      console.log(`=>No Results!`);
  }
}

// PLAYER CHOICE: SCISSORS
if (playerChoice === "scissors") {
  switch (enemyChoice) {
    case "rock":
      console.log(lose);
      break;
    case "paper":
      console.log(win);
      break;
    case "scissors":
      console.log(draw);
      break;
    default:
      console.log(`=>No Results!`);
  }
}
console.log("\n");
