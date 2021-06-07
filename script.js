//Navigation Buttons
const startBtn = document.querySelector("#start-btn");
const nextBtn = document.querySelector("#next-btn");

//Question and answers
const quizQuestions = document.querySelector("#quizQuestions");
let questionEl = document.querySelector("#question");
const buttonChoices = document.querySelector("#button-choices");
const buttonSelected = document.querySelector(".btn-options");

//Question variables
const totalQuestions = 3;
let correctAnswer = true;
let questionIndex

//Timer variables
const timeEl = document.querySelector(".timeLeft");
const timesUp = document.querySelector("#timesUp");
let secondsLeft = 90;



const questions = [
  {
    question: "How many tutor sessions can a full-time UoFA bootcamp student get per week?",
    correctAnswer: 2,
    answerOptions: ["0", "1", "2", "3"],
  },

  {
    question: "How much wood can a wood chuck, chuck?",
    correctAnswer: 2,
    answerOptions: ["Does the woodchuck care?", "Umm", "Depends", "Inconclusive"],
  },

  {
    question: "What is the best soda flavor?",
    correctAnswer: 2,
    answerOptions: ["Pepsi", "Sprite", "Dr. Pepper", "SevenUp"],
  },
];

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
startBtn.addEventListener("click", function (e) {
  startBtn.classList.add("hidden");
  questionIndex = 0
  quizQuestions.classList.remove("hidden");
  // nextQuestion();
  setTime();

// buttonSelected.addEventListener("click", function (e) {

// }
  //Once quiz starts, question with corresponding options populates
  //If answered correctly && time/questions remain, next question
  //else if subtract 10s && time/questions remain then present next question
  //else goto score and record initials & score
  //click clear score or try again
  //newQuestion function to show hidden/vis once answer selected?
});

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
//array of questions with each question being an obj.

// WHEN I answer a question
// THEN I am presented with another question

//  function nextQuestion(question){
// questionEl.innerHTML = question.question
// }
// // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock
// function wrongAnswer() {

// }
// // WHEN all questions are answered or the timer reaches 0
// // THEN the game is over

// function gameOver() {
//   if(secondsLeft === 0 logScore())
// } 
// // WHEN the game is over
// // THEN I can save my initials and my score


// function startQuiz () {

// }


// function answerSelected() {

// }
