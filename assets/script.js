var questionDisplay = document.getElementById("question");
var startButton = document.getElementById("start");
var quizMessage = document.getElementById("quizMessage");
var startMessage2 = document.getElementById("startMessage2");
var mainContent = document.getElementById("mainContent");
var answerList = document.getElementById("answerlist");
var hideStart = document.getElementById("startCard");
var showQuestions = document.getElementById("questionCard");
var userInput = document.getElementById("floatingTextarea");
var score = 0;
var corAns = 0;
var incorAns = 0;
var recentScore = localStorage.getItem("recentScore");
var recentPlayerName = localStorage.getItem("recentPlayer");
var timeLeft;
var timer;
var playerName = "";
var currentQuestion = -1;


const qAndA = [
    {
        question: "What CSS property can you use to make a webpage adaptive to scren size?",
        choice: ["Pseudo Selector", "Media Query", "Class", "Margin"],
        answer: "Media Query"
    },
    {
        question: "What is Bootstrap in reference to web development?",
        choice: ["A strap on your boot", "A JS Library", "A CSS Library", "An Array"],
        answer: "A CSS Library"
    },
    {
        question: "Where should you link your CSS sheet in your HTML file?",
        choice: ["Head", "Body", "Footer", "Article"],
        answer: "Head"
    },
    {
        question: "Which one of the following is an operator?",
        choice: ["||", "if", "||||", "var"],
        answer: "||"
    },
    {
        question: "Which of the following is a string:",
        choice: ["true", "(true)", "'true'", "!true"],
        answer: "'true'"
    },

];

//Sets the start paramaters for the game and presents the timer. Hides the intro card and presents the answer card. 

function quizBegin(event) {
    event.preventDefault();
    playerName = userInput.value;
    hideStart.removeAttribute("d-block");
    hideStart.setAttribute("class", "d-none");
    showQuestions.removeAttribute("d-none");
    showQuestions.setAttribute("class", "card col-6 offset-3 align-items-center bg-warning text-dark d-block");
    startMessage2.remove();
    timeStart();
    cycleQuestion();

}

//THis is the timer function. I added an if statement to change the colors of the time as it counts down!

function timeStart() {
    timeLeft = 60;

    timer = setInterval(function () {
        timeLeft--;

        quizMessage.innerHTML = `You have <span class="text-white-50">(<span id=countdown>${timeLeft}</span>)</span> seconds remaining.`;

        let countdownColor = document.getElementById("countdown");

        if (timeLeft > 35) {
            countdownColor.setAttribute("class", "text-success")
        } else if (timeLeft <= 35 && timeLeft > 15) {
            countdownColor.setAttribute("class", "text-warning")
        } else if (timeLeft <= 15) {
            countdownColor.setAttribute("class", "text-danger")
        }

        if (timeLeft === 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000)
}

//Function records the score and the previously entered player name into local storage when the "save your score" button is pressed. 



//Presents the score board upon the end of the game. I was able to use a Template Literal and a DOM element to populate all of the date back into the main of the html. I normallly would've hard coded the card into the HTML, but I was playing with the JavaScript to see what it was capable of. 

function gameOver() {

    if (currentQuestion === qAndA.length - 1) {
        clearInterval(timer);
    }

    quizMessage.textContent = "GAME OVER!!!"

    let scoreBoard = `
    <div class="card col-6 offset-3 bg-warning text-dark">
        <h5 class="card-header">Game Statistics for ${playerName}</h5>
    <div class="card-body">
        <h5 class="card-title">You got ${corAns} out of 5 correct!</h5>
        <p class="card-text">Your Score: ${score}</p>
        <p class="card-text">Recent Score: ${recentScore}</p>
        <p class="card-text">Recent Player Name: ${recentPlayerName}</p>
        <button type="button" class="btn btn-success w-25 text-dark" id="tryAgain">Try Again</button>
        <button type="button" class="btn btn-success w-25 text-dark" id="saveScore">Save your score</button>
    </div>
    </div>`;

    mainContent.innerHTML = scoreBoard;

    let tryAgain = document.getElementById("tryAgain");
    tryAgain.addEventListener("click", function (event) {
        event.preventDefault();
        location.reload();
    });

    let newScore = document.getElementById("saveScore");
    newScore.addEventListener("click", function saveScore(event) {
        event.preventDefault();
        localStorage.setItem("recentPlayer", userInput.value);
        localStorage.setItem("recentScore", score);
        location.reload(); 
    });



}


//Increases score upon answering correctly

function correctAnswer() {
    score += 20;
    corAns++;


}

//Decreases time upon answering incorrectly

function incorrectAnswer() {
    timeLeft -= 10;
    incorAns++;

}

//Cycles through the questions until the end. The buttons are implemented in the DOM and update every time a question is answered. 

function cycleQuestion() {
    currentQuestion++;


    questionDisplay.textContent = qAndA[currentQuestion].question;

    var choiceButton1 = `
        <li class="list-group-item bg-warning">
        <button class="btn btn-secondary m-1 w-100 text-dark" id=button1>${qAndA[currentQuestion].choice[0]}</button>
        </li>

        <li class="list-group-item bg-warning">
        <button class="btn btn-secondary m-1 w-100 text-dark" id=button2>${qAndA[currentQuestion].choice[1]}</button>
        </li>

        <li class="list-group-item bg-warning">
        <button class="btn btn-secondary m-1 w-100 text-dark" id=button3>${qAndA[currentQuestion].choice[2]}</button>
        </li>

        <li class="list-group-item bg-warning">
        <button class="btn btn-secondary m-1 w-100 text-dark" id=button4>${qAndA[currentQuestion].choice[3]}<button>
        </li>`;

    answerList.innerHTML = choiceButton1;

    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");
    let button4 = document.getElementById("button4");

    button1.addEventListener("click", correctOrIncorrect);
    button2.addEventListener("click", correctOrIncorrect);
    button3.addEventListener("click", correctOrIncorrect);
    button4.addEventListener("click", correctOrIncorrect);

    function correctOrIncorrect(event) {
        if (event.target.textContent === qAndA[currentQuestion].answer) {
            correctAnswer();

            if (currentQuestion < qAndA.length - 1) {
                cycleQuestion();
            } else {
                gameOver()
            }

        } else {
            incorrectAnswer();

            if (currentQuestion < qAndA.length - 1) {
                cycleQuestion();
            } else {
                gameOver()
            }
        }
    };



};






startButton.addEventListener("click", quizBegin)