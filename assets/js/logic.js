
function startQuiz (timer) {
    // Save start-screen id in a variable
    const startScreen = document.getElementById("start-screen");

    // Save start button id in a variable
    const startButton = document.getElementById("start");
    
    // Add event listener to start button and change start screen
    startButton.addEventListener("click", function () {
        questionCount = 0;
        startScreen.children[0].textContent = '';
        startScreen.children[1].textContent = 
    });



}
startQuiz();