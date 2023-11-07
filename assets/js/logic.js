// Saving all answer buttons
let answerBtn = document.querySelectorAll(".answer-button");
// Save start-screen id in a variable
const startScreen = document.getElementById("start-screen");
// Increments when player answers a question
let questionIndex = 0;
// Save start button id in a variable
const startButton = document.getElementById("start");
// Saves elements of all answer buttons

// Save the resolution id
let resolutionId = document.getElementById("resolution");

// 
let timeEl = document.getElementById("time");


let timerId;

let timeLeft = 60;

function startQuiz () {
    
    // Add event listener to start button and change start screen
    startButton.addEventListener("click", function () {
        let currentQuestion = document.questions[questionIndex];
        let questionDiv = document.getElementById("questions");
        let questionTitle = document.getElementById("question-title");
        timerId = setInterval(clockTick, 1000)

    // Hide the start screen
        startScreen.style.visibility = 'hidden';
    
    // Make the questions div visible instead    
        questionDiv.style.visibility = 'visible';
    // Remove 'hide' class from questionDiv to make it visible    
        questionDiv.classList.remove('hide');
    // Set the question title to the current     
        questionTitle.innerHTML = currentQuestion.question;
        
    // Assign answers to buttons by iterating through answers array
        for (let answerIndex = 0; answerIndex < currentQuestion.answers.length; answerIndex++) {
            let currentAnswer = currentQuestion.answers[answerIndex];
            let currentButton = document.getElementById("answer-" + answerIndex);

            currentButton.textContent = currentAnswer;
            }
    }   );
}

function clockTick() {
    timeLeft--;
    timeEl.textContent = timeLeft;
}


function validateAnswer() {
    let userSelection = this.textContent;
    let currentAnswer = document.questions[questionIndex].correctAnswer;
    
    if (userSelection === currentAnswer) {
        resolutionId.textContent = "Correct!"

    } else {
        resolutionId.textContent = "Wrong!"
        timeLeft -= 10;
    }



    console.log(userSelection, currentAnswer)
    

    
}

answerBtn.forEach(btn => {
    btn.onclick = validateAnswer
})
// same function as above
// answerBtn.forEach(function(btn) {
//     btn.onclick = validateAnswer
// })

startQuiz();