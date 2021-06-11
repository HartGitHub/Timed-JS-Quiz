//Navigation Buttons
const startBtn = document.querySelector("#start-btn");
const nextBtn = document.querySelector("#next-btn");

let score = 0;

//Question variables
const totalQuestions = 3;
let correctAnswer = true;
let questionIndex = 0;

//Timer variables
const timeEl = document.querySelector(".timeLeft");
const timesUp = document.querySelector("#timesUp");
let secondsLeft = 150;

const questions = [
  {
    question:
      "How many tutor sessions can a full-time UoFA bootcamp student get per week?",
    correctAnswer: "2",
    answerOptions: ["0", "1", "2", "3"],
  },

  {
    question: "How much wood can a wood chuck, chuck?",
    correctAnswer: "Depends",
    answerOptions: [
      "Does the woodchuck care?",
      "Umm",
      "Depends",
      "Inconclusive",
    ],
  },

  {
    question: "What is the best soda flavor?",
    correctAnswer: "Dr. Pepper",
    answerOptions: ["Pepsi", "Sprite", "Dr. Pepper", "SevenUp"],
  },
];

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
startBtn.addEventListener("click", beginQuiz);
//Once quiz starts, question with corresponding options populates
//If answered correctly && time/questions remain, next question
//else if subtract 10s && time/questions remain then present next question
//else goto score and record initials & score
//click clear score or try again
//newQuestion function to show hidden/vis once answer selected?
function beginQuiz() {
  startBtn.classList.add("hidden");
  $("#quizQuestions").removeClass("hidden");
  // .classList.remove("hidden")
  setTime();
  nextQuestion();
}

function setTime() {
  const timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = `Time: ${secondsLeft}`;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//add variable to keep track of which question I'm currently on;
// questionIndex:Whenever user clicks on answer; if correct move on else subtract time
// if no more questions then end quiz
//create function that ends if no time or if no questions left
//prompt with initals once ending conditions met.
//guard cluases exit functions early
//local storage to store high scores from quiz
//localStorage.setItem("Label", JSON.stringify(placeholder score

// WHEN I answer a question
// THEN I am presented with another question

function nextQuestion() {
  //needs to dynamically create buttons
  //adds hidden class and removes for next question
  for (let i = 0; i < questions.length; i++) {
    $("#quiz-question").html(questions[i].question);
    // $(questions[0].question[0]).appendTo("#quiz-questions")
    $("#btn1").html(questions[i].answerOptions[0]);
    $("#btn2").html(questions[i].answerOptions[1]);
    $("#btn3").html(questions[i].answerOptions[2]);
    $("#btn4").html(questions[i].answerOptions[3]);
  }
}
//on button click check for answer.
// }
// // WHEN all questions are answered or the timer reaches 0
// // THEN the game is over
// // WHEN the game is over
// // THEN I can save my initials and my score
// function gameOver() {
//function logScore() {
//   userInitials saved to local storage followed by startQuiz function
// // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock
// function wrongAnswer() {
function answerSelected(event) {
  let answer = event.target.textContent;
  if (secondsLeft === 0 || questions.length > 3) {
    gameOver();
  }
  if (answer === questions[questionIndex].correctAnswer) {
    score += 100;
  } else {
    secondsLeft -= 15;
  }
}
nextQuestion();
