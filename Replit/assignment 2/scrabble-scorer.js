// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");
// initialization
let inputWord = '';
let inputNum = 0;

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

// prompt user input
function initialPrompt() {
  console.log("Let's play some scrabble!");
  inputWord = input.question(`Enter a word to score: `);
  return inputWord;
};

// simple score calc
let simpleScore = function(inputWord) {
  let sum = 0;
  for (let i = 0; i < inputWord.length; i++) {
    sum++;
  }
  console.log(`Score for '${inputWord}': ${sum}`);
  return;
};

// vowel score calc
let vowelBonusScore = function(inputWord) {
  inputWord = inputWord.toLowerCase();
  let sum = 0;

  for (let i = 0; i < inputWord.length; i++) {
    if (inputWord[i].match(/[aeiou]/ig)) {
      sum += 3
    }
    else sum += 1;
  }
  console.log(`Score for '${inputWord}': ${sum}`);
  return sum;
}

// old Scrabble Scorer calc
function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";
  let sum = 0;

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        sum += Number(pointValue);
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      }

    }
  }
  console.log(`Score for '${word.toLowerCase()}': ${sum}`);
  return;
}
// makes lowercase letters keys and point value the value
// @return obj
function transform(oldPointStructure) {
  let newObj = {}

  inputWord.toLowerCase();
  for (key in oldPointStructure) {
    let arr = oldPointStructure[key]
    for (let i = 0; i < arr.length; i++) {
      newObj[arr[i].toLowerCase()] = Number(key)
    }
    // creating a space value of zero in the object
    newObj[' '] = 0;
  }
  return newObj;
};

let newPointStructure = transform(oldPointStructure);

function scrabbleScore(word) {
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += newPointStructure[word[i].toLowerCase()];
  }
  console.log(`Score for '${word.toLowerCase()}': ${sum}`)
  return sum;
}

// object list
let simpleScoreObj = {
  name: "simple score",
  description: "Each letter is worth 1 point",
  scoreFunc: simpleScore
}

// simpleScoreObj.sompleScoreFunc('apple')
// this wil output the simple score for apple, which is 5
// console.log(oldScrabbleObj.scoreFunc(inputWord))

let vowelBonusObj = {
  name: "vowel bonus score",
  description: "Vowels are 3 pts, consonants are 1 pt",
  scoreFunc: vowelBonusScore
}

let oldScrabbleObj = {
  name: "old scrabble scorer",
  description: "The traditional scoring algorithm",
  scoreFunc: oldScrabbleScorer
}

let newScrabbleObj = {
  name: "new scrabble scorer",
  description: "The new scoring algorithm",
  scoreFunc: scrabbleScore
}


const scoringAlgorithms = [simpleScoreObj, vowelBonusObj, newScrabbleObj];

// range check for user input number
function errorCheck(inputNum) {
  if (inputNum < 0 || inputNum > 2) {
    console.log(`Input Number is outside of the range`);
    return;
  }
}

// Prompt user scoring method
function scorerPrompt() {
  inputNum = Number(input.question(`Which scoring algorithm would you like to use?
  
0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2: `));
  errorCheck(inputNum);

  if (inputNum === 0) {
    return simpleScoreObj.scoreFunc(inputWord);
  }
  else if (inputNum === 1) {
    return vowelBonusObj.scoreFunc(inputWord);
  }
  else if (inputNum === 2) {
    return newScrabbleObj.scoreFunc(inputWord);
  }
}


function runProgram() {
  initialPrompt();
  scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScore: simpleScore,
  vowelBonusScore: vowelBonusScore,
  scrabbleScore: scrabbleScore,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};
