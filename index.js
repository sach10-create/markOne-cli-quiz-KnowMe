var readlineSync = require("readline-sync");

var score = 0;
console.log("Welcome to a Quiz on 'HOW WELL YOU KNOW SACHIN' ")

var topScores = [{
  name: "Abhishek",
  score: 3
}, {
  name: "Shubham",
  score: 4
}, {
  name: "Vishnu",
  score: 1
}]

var questionnaire = [{
  question: "Where do I live? ",
  answer: "Pune"
}, {
  question: "Which is my favorite sport? ",
  answer: "Football"
}, {
  question: "What is my favorite food item? ",
  answer: "Biryani"
}, {
  question: "What do I do in my leisure time? ",
  answer: "Read Books"
}, {
  question: "Who is my favorite actor? ",
  answer: "Amir Khan"
}]

function welcomeUser() {
  var userName = readlineSync.question("What is your name? ");
  console.log("Welcome " + userName);
  console.log("Do You know Sachin!! Lets Find Out")
}

function play(question, answer) {

  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right! ");
    score++;
  }
  else {
    console.log("Wrong! ");
  }
  console.log("Current Score: " + score);
  console.log("--------------------------")
}

function game() {
  for (var i = 0; i < questionnaire.length; i++) {
    var currentquestion = questionnaire[i];
    play(currentquestion.question, currentquestion.answer);
  }
}

function topScoreslist() {
  for (var i = 0; i < topScores.length; i++) {
    console.log(topScores[i].name + " " + topScores[i].score)
  }
}

function finalscore() {
  console.log("Your Final Score is: " + score + "/" + questionnaire.length);
  console.log("Check out the top scores, if you beat them , ping me , I will update it")
}

welcomeUser();
game();
finalscore();
topScoreslist();
