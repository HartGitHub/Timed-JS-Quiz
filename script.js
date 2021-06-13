//Navigation Buttons
const startBtn = document.querySelector("#start-btn");
const nextBtn = document.querySelector("#next-btn");

const btnClass = document.querySelectorAll(".btnOptions");

// btnClass.addEventListener('click', function(event){
//   debugger;
//   console.log(event.target.innerHTML);
// })

let score = 0;

let quizScores = [];

//Question variables
let questionIndex = 0;

//Timer variables
const timeEl = document.querySelector(".timeLeft");
const timesUp = document.querySelector("#timesUp");
let secondsLeft = 150;

const questions = [
  {
    id: 0,
    question:
      "How many tutor sessions can a full-time UoFA bootcamp student get per week?",
    correctAnswer: "2",
    answerOptions: ["0", "1", "2", "3"],
  },

  {
    id: 1,
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
    id: 2,
    question: "What is the best soda flavor?",
    correctAnswer: "Dr. Pepper",
    answerOptions: ["Pepsi", "Sprite", "Dr. Pepper", "SevenUp"],
  },
];

startBtn.addEventListener("click", beginQuiz);

function beginQuiz() {
  debugger;
  startBtn.classList.add("hidden");

  $("#quizQuestions").removeClass("hidden");

  setTime();
  //answerSelected();
  nextQuestion(0);
  //gameOver();
  //renderScore();
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

function nextQuestion(questionIndex) {
  $("#quiz-question").html(questions[questionIndex].question);
  // $(questions[0].question[0]).appendTo("#quiz-questions")
  $(".question-id").html(questions[questionIndex].id);
  $("#btn1").html(questions[questionIndex].answerOptions[0]);
  $("#btn2").html(questions[questionIndex].answerOptions[1]);
  $("#btn3").html(questions[questionIndex].answerOptions[2]);
  $("#btn4").html(questions[questionIndex].answerOptions[3]);

  // if(questionIndex==questions.length-1){
  //   renderScore();
  //   gameOver();
  // }
}

// function answerSelected(event) {
//   debugger;
//   questionIndex + 1;
//   $(".btn-options").addClass("hidden");
//   $("#quizQuestions").removeClass("hidden");
//   let answer = questions.correctAnswer.textContent;
//   if (answer === questions.answerOptions.textContent) {
//     score += 100;
//   }
//   if (secondsLeft === 0 || questions.length > 3) {
//     gameOver();
//   }
//   if (answer === questions[questionIndex].correctAnswer) {
//     score += 100;
//   } else {
//     secondsLeft -= 15;
//   }
// }
//nextQuestion();

function gameOver() {
  $("#quizQuestions").addClass("hidden");
  $("#highScoreForm").removeClass("hidden");
}

function renderScore() {
  let initialItem = document.createElement("li");
  initialItem.innerHTML = document.getElementById("userScore").value;

  let scoreItem = document.createElement("li");
  scoreItem.innerHTML = localStorage.getItem("totalScore");

  let listContainer = document.getElementById("localScores");

  listContainer.appendChild(initialItem);
  listContainer.appendChild(scoreItem);
}

for (let i = 0; i < btnClass.length; i++) {
  debugger;
  btnClass[i].addEventListener("click", function (event) {
    const currentQuestionId = parseInt($(".question-id").html());
    const selectedAnswer = event.target.innerHTML;

    if (selectedAnswer == questions[currentQuestionId].correctAnswer) {
      score += 100;
    } else {
      secondsLeft -= 50;
    }

    const nextQuestionIndex = currentQuestionId + 1;
    if (nextQuestionIndex == 3) {
      localStorage.setItem("totalScore", score);
      //renderScore();

      gameOver();
    } else {
      nextQuestion(nextQuestionIndex);
    }
  });
}

document.getElementById("scoreResult").addEventListener("click", renderScore);
