var readlineSync = require('readline-sync');
var chalk = require('chalk');

// Getting the username
var userName = readlineSync.question(chalk.hex("#00ffff")("What is your name?\n")).toUpperCase();

var score = 0;

// High Scores
var highScores = [
  { name: "John Doe", score: 100},
  { name: "Mark", score: 100},
  { name: "David", score: 80},
  { name: "Akash", score: 65},
  { name: "Tanvi", score: 90},
  { name: "Prasad", score: 75},
  { name: "Akshitha", score: 50},
  { name: "Jane", score: 45},
  { name: "Vikram", score: 70},
  { name: "Charan", score: 50}
];

// Math Quiz Questions list
var questions = [
  { title: "2 + 3 ?", A: 5, B: 6, C: 7, D: 8, answer: "A" },
  { title: "2 - 3 = ?", A: 1, B: 0, C: -1, D: 8, answer: "C" },
  { title: "(40 - 400) + 200 ?", A: -160, B: 160, C: 100, D: 16, answer: "A" },
  { title: "2 + 1000 ?", A: 100002, B: 10002, C: 102, D: 1002, answer: "D" },
  { title: "2 - 9 = ?", A: 15, B: 10, C: -7, D: 18, answer: "C" },
  { title: "7 x 5 = ?", A: 30, B: 23, C: 35, D: 80, answer: "C" },
  { title: "2 x 6 = ?", A: 3, B: 2, C: 5, D: 12, answer: "D" },
  { title: "2(3 + 3) = ?", A: 9, B: 12, C: 15, D: 18, answer: "B" },
  { title: "3 - 27 + 27 = ?", A: 3, B: 24, C: 51, D: 8, answer: "A" },
  { title: "2 x 10 x 10 = ?", A: 3, B: 20, C: 15, D: 200, answer: "D" }
];


// Function to play the Math Quiz Game
function playMathQuiz(index) {
  var qno = index + 1;
  var currentQuestion = questions[index];
  var currentAnswer = currentQuestion.answer.toLowerCase();
  
  console.log(chalk.hex("#00ffff").bold("Q" + qno + ": " + currentQuestion.title));
  console.log("[A] " + currentQuestion.A);
  console.log("[B] " + currentQuestion.B);
  console.log("[C] " + currentQuestion.C);
  console.log("[D] " + currentQuestion.D);

  var userAnswer = readlineSync.question(chalk.hex("#00ffff")("Your Answer = ")).toLowerCase();

  if (userAnswer == currentAnswer || userAnswer == currentQuestion[currentQuestion.answer]) {
    score = score + 10;
    console.log(chalk.hex("#000000").bgGreen.bold("\n  Correct Answer ✔  "));
  } else {
    score = score - 5;
    console.log(chalk.bgRed.bold("\n  Wrong Answer ✖  "));
  }

  var currentScore = "| Current Score is : " + score + " |";
  var currentSeperator = "-".repeat(currentScore.length) + "\n";

  console.log(chalk.hex("#ed7b25").bold(currentSeperator + currentScore + "\n" + currentSeperator));

}

// Function to sort the high scores array
function highScoresSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j].score > arr[i].score) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
}

// Function to shuffle the questions array to get random to each users.
function shuffleQuestions(arr) {
  for (var i=arr.length-1; i>=0; i--) {
    // Getting the random index
    var j = Math.floor(Math.random() * arr.length);
    // swaping the current question with random index.
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}


console.log(chalk.hex("#ed7b25")("\nHi " + chalk.hex("#000000").bgHex("#ed7b25").bold(" " + userName + " ") +", Welcome to my simple Math Quiz Game. It's simple multiple choice math game\nwhich includes addition, subtraction and multiplication arithmatic operations.\n"));

console.log(chalk.hex("#ff00ff")("Rules:\n1. There are total 10 simple math questions, All are compulsory.\n2. For each Correct Answer you will get 10 points.\n3. For each Wrong Answer 5 points will be removed from your total score.\n4. Don't use calculator to solve the problem, pen and paper allowed.\n"));

console.log(chalk.hex("#00afff").bold("ALL THE BEST " + chalk.hex("#000000").bgHex("#ed7b25").bold(" " + userName + " ") + " 👍 \n"));


// Shuffle the questions
shuffleQuestions(questions);

// Calling playMathQuiz function on each question.
for (let i=0; i<questions.length; i++) {
  playMathQuiz(i);
}


console.log(chalk.hex("#00afff")("Thank You " + chalk.hex("#000000").bgHex("#ed7b25").bold(" " + userName + " ") +" 🙏 , for participating in this quiz."));

var finalScore = "| YOUR FINAL SCORE is : " + score + " |";
var finalSeperator = "-".repeat(finalScore.length) + "\n";
console.log(chalk.hex("#00afff").bold(finalSeperator + finalScore + "\n" + finalSeperator));

console.log(chalk.hex("#ed7b25")("These are the High Scores, if you have scored more than these, please send me a screenshot!\n"));

// Sort the High Scores
highScoresSort(highScores);

// Show High Scores to the User
console.table(highScores);


