//====================================================
//================ INPUT TO PLAY =====================
//====================================================
// node 01-rock-paper-scissors.js rock
// node 01-rock-paper-scissors.js paper
// node 01-rock-paper-scissors.js scissors

const a = "rock";
const b = "paper";
const c = "scissors";
const enemyChoices = [a, b, c];

const win = " =>Result:       You win!🎉";
const lose = " =>Result:       You lose!";
const draw = " =>Result:       Draw!";

//====================================================
//=========== 1)Player ===============================
//====================================================
let playerChoice = process.argv[2];
playerChoice = playerChoice.toLowerCase();

//====================================================
//=========== 2)Enemy ================================
//====================================================
const randomNum = Math.random() * 3;
const flooredNum = Math.floor(randomNum);
const enemyChoice = enemyChoices[flooredNum];

//====================================================
//=========== 3)Result ===============================
//====================================================
process.stdout.write("\x1Bc\x1B[0f");
console.log("==============================================");
console.log("============= Rock Paper Scissors ============");
console.log("==============================================");
console.log("");
console.log(`You chose:       ${playerChoice}`);
console.log(`Computer chose:  ${enemyChoice}`);
console.log("");

// 1)CASE: ROCK
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

// 2)CASE: PAPER
if (playerChoice === "paper") {
  switch (enemyChoice) {
    case "rock":
      console.log(win);
      break;
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

// 3)CASE: SCISSORS
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

// 4)INVALID INPUT
if (
  playerChoice !== "rock" &&
  playerChoice !== "paper" &&
  playerChoice !== "scissors"
) {
  console.log(`You cannot use ${playerChoice}! Stop cheating!!`);
}

console.log("\n");
