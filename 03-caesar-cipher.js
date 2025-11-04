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

process.stdout.write("\x1Bc\x1B[0f");

const shift = Number(process.argv.pop());
const sentence = String(process.argv.slice(2));
const words = sentence.split(" ");
const newWords = [];

let currentWord = words[0];
let currentChars = currentWord.split("");
let newSentence = "";

//==========================================================================================================================
//================ LOGIC ===================================================================================================
//==========================================================================================================================
for (j = 0; j < words.length; j++) {
  currentWord = words[j];
  currentChars = currentWord.split("");

  for (i = 0; i < currentChars.length; i++) {
    currentChars[i] = currentChars[i].charCodeAt() + shift;
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
