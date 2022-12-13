const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';  

let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?",];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];

let score = 0;  // quiz score keeper


/*
  Asks user for name
  saves input
*/
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('What is your name? : ');
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for (let i = 0; i < questions.length; i++) {
      if (i === 0 )  questionOne(i);
      if (i === 1 )  questionTwo(i);
      if (i === 2 )  questionThree(i);
      if (i === 3 )  questionFour(i);
      if (i === 4 )  questionFive(i);
  } 
   finalReport()
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet the candidate //
  console.log(`
Hello ${candidateName}!`);
  askQuestion();
  //console.log(questions);
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

/////////////////////
// functions (start)
///////////////////////
/*
  creates empty array
  saves user's answer to question, saves as string
  pushes answer into empty array and seperates the two names
  grab first letter of first word and capitalize it
  grab first letter of second word and capitalize it
  join them back together
  evaluate if === correct answer
  if true score ++
  else exit
*/


function questionOne(i) {
  let formatedAnswer = [];
  let canidateAnswer = input.question(`1) ${questions[i]}: `).toString();
  formatedAnswer.push(canidateAnswer.toLowerCase().split(' '));

  // Breaking Down first Word
  let firstWord = '';
  firstWord += formatedAnswer[0][0];

  let firstLetterCap = '';
  firstLetterCap += firstWord[0].toUpperCase();

  let newFirstWord = firstLetterCap + firstWord.substr(1, firstWord.length - 1);

  // Breaking Down second Word
  let secondWord = '';
  secondWord += formatedAnswer[0][1];

  let secondLetterCap = '';
  secondLetterCap += secondWord[0].toUpperCase();

  let newSecondWord = secondLetterCap + secondWord.substr(1, secondWord.length - 1);

  // combines the words after capitalizing the first letter
  // pushes to candidateAnswer
  let newAnswer = newFirstWord + ' ' + newSecondWord;
  candidateAnswers.push(newAnswer);

  // evaluates candidate's Answer
  // if the answer is correct, score++
  // else return
  if (candidateAnswers[i] === correctAnswers[i]) {
    score++;
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
    
  }
  else {
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
    return;
}
}


/* 
  prompts questions[1]
  evaluates, if correct score ++
  else return
*/
function questionTwo(i) {
  let canidateAnswer = input.question(`2) ${questions[i]}: `).toString();
  candidateAnswers.push(canidateAnswer);
  if (candidateAnswers[i] === correctAnswers[i]) {
    score ++;
        console.log(`Your Answer: ${canidateAnswer}`);
        console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }
  else {
        console.log(`Your Answer: ${canidateAnswer}`);
        console.log(`Correct Answer: ${correctAnswers[i]}\n`);  
        return;
  } 
}

function questionThree(i) {
  let canidateAnswer = input.question(`3) ${questions[i]}: `).toString();
  candidateAnswers.push(canidateAnswer);
  if (candidateAnswers[i] === correctAnswers[i]) {
    score ++;
    console.log(`Your Answer: ${canidateAnswer}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }
  else {
        console.log(`Your Answer: ${canidateAnswer}`);
        console.log(`Correct Answer: ${correctAnswers[i]}\n`);  
        return;
  } 
}



/* 
  prompts questions[3]
  capitalizes first letter of user input
  evaluates, if true, score ++
  else return
*/
function questionFour(i) {
  let formatedAnswer = [];
  let canidateAnswer = input.question(`4) ${questions[i]}: `).toString();
  formatedAnswer.push(canidateAnswer.toLowerCase());

  // Breaking Down first Word
  let firstWord = '';
  firstWord += formatedAnswer[0];

  // Grabbing first char
  let firstLetterCap = '';
  firstLetterCap += firstWord[0].toUpperCase();

  // Combining new word
  let newFirstWord = firstLetterCap + firstWord.substr(1, firstWord.length - 1);

  
  candidateAnswers.push(newFirstWord);

  // evaluates candidate's Answer
  // if the answer is correct, score++
  // else return
  if (candidateAnswers[i] === correctAnswers[i]) {
    score++;
    console.log(`Your Answer: ${canidateAnswer}`);
    console.log(`Correct Answer: ${correctAnswers[3]}\n`);
  }
  else {
        console.log(`Your Answer: ${canidateAnswer}`);
        console.log(`Correct Answer: ${correctAnswers[i]}\n`);  
        return;
  } 
}

/*
  prompts questions[4]
  pushes to candidateAnswers
  evaluates if not correct return
  else score++
*/

//4
function questionFive(i) {
  let canidateAnswer = input.question(`5) ${questions[i]}: `).toString().toLowerCase();
  candidateAnswers.push(canidateAnswer);

  if (candidateAnswers[i] === correctAnswers[i] || candidateAnswers[i] === 'three') {
    score++
    console.log(`Your Answer: ${canidateAnswer}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`); 
    return;
  }
  else {
    console.log(`Your Answer: ${canidateAnswer}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`); 
  }
}


/*
  Logs the score to the console
*/
function checkScore() {
  console.log(`score: ${score} `);
}


/*
  final grade report
  converts final score to a percentage
  logs score
  logs status
*/
function finalReport() {
  const percentageConvertor = 100 / questions.length;
  let status = '';
  
  let finalScore = (score * percentageConvertor) ;
  console.log(`>>> Overall Grade: ${finalScore}% (${score} out of ${questions.length} correct) <<<`);

  if (finalScore < 80) {
    status += 'FAILED';
  }
  else {
    status += 'PASSED'
  }
  console.log(`>>> Status: ${status}`);
  
}
/////////////////////
// functions (end)
//////////////////////
