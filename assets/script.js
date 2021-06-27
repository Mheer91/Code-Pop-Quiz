var questionDisplay = document.getElementById("question");
var startButton = document.getElementById("start");
var quizMessage = document.getElementById("quizMessage");
var startMessage = document.getElementById("startMessage");
var startMessage2 = document.getElementById("startMessage2");
var mainContent = document.getElementById("mainContent");
var answerList = document.getElementById("answerlist");
var score = 0;
var corAns = 0;
var incorAns = 0;
var highscore;

//Had to start the question count at -1 so it would start with index 0 on the qAndA array.
var currentQuestion = -1;
var timeLeft = 0;

const qAndA = [
    {
        question: "What CSS property can you use to make a webpage adaptive to scren size?",
        choice: ["Pseudo Selector", "Media Query", "Class", "Margin"],
        answer: "Pseudo Selector"
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
        answer: "'true''"
    },
];



//Sets the start paramaters for the game and presents the timer. 

function quizBegin(event) {
    event.preventDefault();
    startButton.remove();
    startMessage.remove();
    startMessage2.remove();
    timeLeft = 30;
   
    timer = setInterval(function() {
        timeLeft--;
        quizMessage.textContent = `You have ${timeLeft} seconds remaining.`;
        if(timeLeft <= 0) {
            gameOver();
        }
    
    }, 1000)
    cycleQuestion()
}



//Presents the score board upon the end of the game. I was able to use a Template Literal and a DOM element to populate all of the date back into the main of the html. 

function gameOver() {
    quizMessage.textContent = `GAME OVER!!!!!!!`;
    let scoreBoard = `
    <div class="scoreBoard>
        <h1>You got ${corAns} correct, and ${incorAns} wrong.</h1>
        <ul class="stats">
            <li>Your Score: ${score}.</li>
            <li>High Score: ${highscore}</li>
        </ul>
    </div>`;
    mainContent.innerHTML = scoreBoard;

}

function correctAnswer() {

}
//Cycles through the questions until the end. 

function cycleQuestion() {
    currentQuestion++;
    questionDisplay.textContent = qAndA[currentQuestion].question;
    var choiceButton1 = `
        <button id=button1>${qAndA[currentQuestion].choice[0]}</button>
        <button id=button2>${qAndA[currentQuestion].choice[1]}</button>
        <button id=button3>${qAndA[currentQuestion].choice[2]}</button>
        <button id=button4>${qAndA[currentQuestion].choice[3]}</button>`;
        answerList.innerHTML = choiceButton1;
        
 
}




startButton.addEventListener("click", quizBegin)





