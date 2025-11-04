//==================================================== HH
//================ NOTES ============================= HA
//==================================================== A
// 1) Word starts with consonant + vowel (TRUE FALSE)
// - Put first letter at the end
// - Add “ay.”
// Example: Happy = appyhay

// 2) Word starts with two consonants (TRUE TRUE)
// - Move two consonants to the end
// - Add “ay.”
// Example: Child = Ildchay

// 3) Word starts with a vowel (FALSE)
// - Add “way” at the end
// Example: Awesome = Awesomeway

//====================================================
//=========== 1)Phrase ===============================
//====================================================
// Slice holt dir einen BESTIMMTEN BEREICH aus einem ARRAY
// Slice gibt ein ARRAY zurück (nicht automatisch... kommt auf den Typ an, WAS DU SLICED)

// Startet das Wort mit vowel?
// Startet das Wort mit Konsonante - was kommt danach?
// const sentence = words.join(" ");

process.stdout.write("\x1Bc\x1B[0f");

const words = process.argv.slice(2);
const sentence = words.join(" ");
const vowels = ["a", "e", "i", "o", "u"];

const consonants = [true, true];
const newArray = [];

for (let k = 0; k < words.length; k++) {
  let currentWord = words[k];
  let firstTwo = currentWord.slice(0, 2);
  let chars = firstTwo.split("");
  //Prüft die ersten beiden Buchstaben auf KONSONANTEN
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 5; i++) {
      if (vowels[i] === chars[j]) {
        // console.log(i);
        consonants[j] = false;
      }
    }
  }

  // DEBUG
  //   console.log(k);
  //   console.log(currentWord);
  //   console.log(consonants);
  //   console.log();

  //currentWord groß geschrieben?
  let isUpperCase = currentWord[0] === currentWord[0].toUpperCase();

  //alles klein schreiben + split
  currentWord = currentWord.toLowerCase();
  let charList = currentWord.split("");

  // 1) Zwei Konsonanten
  if (consonants[0] === true && consonants[1] === true) {
    //First two chars ---> am Ende des Wortes
    for (let i = 0; i < 2; i++) {
      // console.log(charList);
      let first = charList.shift();
      charList.push(first);
      // console.log(charList);
    }
    charList.push("ay");
  }

  // 2) Konsonant & Vokal
  if (consonants[0] === true && consonants[1] === false) {
    //First char ---> am Ende des Wortes
    for (let i = 0; i < 1; i++) {
      // console.log(charList);
      let first = charList.shift();
      charList.push(first);
      // console.log(charList);
    }
    charList.push("ay");
  }

  // 3) Startet mit Vokal
  if (consonants[0] === false) {
    charList.push("way");
  }

  //function: Wort groß schreiben
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  let newWord = charList.join("");
  if (isUpperCase === true) {
    newWord = capitalize(newWord);
  }
  newArray.push(newWord);
  consonants[0] = true;
  consonants[1] = true;
}

let newSentence = newArray.join(" ");
//====================================================
//=========== 3)Result ===============================
//====================================================
// process.stdout.write("\x1Bc\x1B[0f");
console.log("==============================================");
console.log("================== PIG LATIN =================");
console.log("==============================================");
console.log("");
console.log(`English:`);
console.log(sentence);
console.log("");
// console.log(`Consonants? ${consonants}`);
// console.log("");
console.log(`Pig Latin:`);
console.log(newSentence);
console.log("\n");
