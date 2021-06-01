const startBtn = document.querySelector("#start-btn");
const startPrompt = document.querySelector("#start-prompt");
const quiz = document.querySelector("#quiz");
const question = document.querySelector("#question");
const answers = document.querySelector("#answers");

//Timer variables
const timeEl = document.querySelector(".timeLeft")
const timesUp = document.querySelector("#timesUp")
var secondsLeft = 90;


const questionText = [
    {
        text: "How many tutor sessions can a full-time UoFA bootcamp student get per week?",
        correctAnswer: "2",
        options: ["0", "1", "2", "3"],
    },
];

const questionText2 = [
    {
        text: "How much wood can a wood chuck, chuck?",
        correctAnswer: "Depends",
        options: ["Does the woodchuck care?", "Umm", "Depends", "Inconclusive"],
    }
]

const questionText3 = [
    {
        text: "What is the best soda flavor?",
        correctAnswer: "Dr. Pepper",
        options: ["Pepsi", "Sprite", "SevenUp", "Dr. Pepper"],
    }
]

startBtn.addEventListener("click", function(e){
    startPrompt.classList.add("hidden");
    quiz.classList.remove("hidden");
    setTime();
    
});



function setTime(){
    const timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = `Time: ${secondsLeft}`;
       if(secondsLeft === 0){
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



// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score