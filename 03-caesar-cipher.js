//==========================================================================================================================
//================ NOTES ===================================================================================================
//==========================================================================================================================
//
// Implement a basic Caesar Cipher encryption.
//
// The program should take a phrase and a shift number as inputs from process.argv.
// Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
// Case insensitive
// A negative shift means shift to the left
// A positive shift means shift to the right
// Output the encrypted phrase to the console.
//
// Example: node caesarCipher.js "hello world" 3 # Output: khoor zruog
//==========================================================================================================================
// ASCII-Codes für Buchstaben
// A-Z (65-90)
// a-z (97-122)
//==========================================================================================================================

process.stdout.write("\x1Bc\x1B[0f");

const shift = Number(process.argv.pop());
const sentence = String(process.argv.slice(2));
const words = sentence.split(" ");
const newWords = [];

let currentWord = words[0];
let currentChars = currentWord.split("");
let newSentence = "";
let isUpperCase = false;

function isUppercase(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
}

//==========================================================================================================================
//================ LOGIC ===================================================================================================
//==========================================================================================================================
for (j = 0; j < words.length; j++) {
  currentWord = words[j];
  currentChars = currentWord.split("");

  for (i = 0; i < currentChars.length; i++) {
    isUpperCase = isUppercase(currentChars[i]);
    // console.log(isUpperCase);

    currentChars[i] = currentChars[i].charCodeAt() + shift;
    // console.log(`HIER: ${currentChars[i] - shift}`);

    //alphabet-wrap (a-z)
    if (isUpperCase === false) {
      if (shift > 0) {
        if (Number(currentChars[i]) > 122) {
          currentChars[i] = Number(currentChars[i]) - 26;
        }
      }
      if (shift < 0) {
        if (Number(currentChars[i]) < 97) {
          currentChars[i] = Number(currentChars[i]) + 26;
        }
      }
    }

    //alphabet-wrap (A-Z)
    if (isUpperCase === true) {
      if (shift > 0) {
        if (Number(currentChars[i]) > 90) {
          currentChars[i] = Number(currentChars[i]) - 26;
        }
      }
      if (shift < 0) {
        if (Number(currentChars[i]) < 65) {
          currentChars[i] = Number(currentChars[i]) + 26;
        }
      }
    }

    // console.log(currentChars[i]);
    currentChars[i] = String.fromCharCode(currentChars[i]);
    currentWord = currentChars.join("");
  }

  newWords.push(currentWord);
}

//final step
newSentence = newWords.join(" ");

console.log("================================================================");
console.log("================== CAESAR CIPHER ENCRYPTION 🔐 =================");
console.log("================================================================");
console.log("");
console.log(`Sentence: ${sentence}`);
console.log(`Shift: ${shift}`);
// console.log(words);
// console.log(typeof words);
// console.log(typeof shift);
console.log("\n");
// console.log(currentWord);
// console.log(currentChars);
// console.log(newWords);
console.log("Caesar Cipher encryption:");
console.log(newSentence);
console.log("\n");
