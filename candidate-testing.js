const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() { let candidateName = input.question("What is your name:");
console.log(candidateName);
//console.log("\n");
//console.log("Hello Zachari");


}

function askQuestion() { let question = input.question("Who was the first American woman in space?");
console.log("Correct Answer: Sally Ride")

}

function gradeQuiz(candidateAnswers) { 

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
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