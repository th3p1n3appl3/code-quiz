
function startQuiz (timer) {
    // Save start-screen id in a variable
    const startScreen = document.getElementById("start-screen");
    // Increments when player answers a question
    let questionIndex = 0;
    // Save start button id in a variable
    const startButton = document.getElementById("start");
    
    // Add event listener to start button and change start screen
    startButton.addEventListener("click", function () {
        let currentQuestion = document.questions[questionIndex];
        let questionDiv = document.getElementById("questions");
        let questionTitle = document.getElementById("question-title");

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
        
    });


}
startQuiz();