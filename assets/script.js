// Variables
var header = document.getElementById("header");
var intro = document.getElementById("intro");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var select = document.getElementById("select");
var select1 = document.getElementById("1");
var select2 = document.getElementById("2");
var select3 = document.getElementById("3");
var select4= document.getElementById("4");
var highScore= document.getElementById("highScore");
var endMessage = document.getElementById("endMessage");
var result = document.getElementById("result");
var initialInput = document.getElementById("initialInput");
var scoreList = document.getElementById("scorelist");


//Questions 
var questions = [
    { question: 'When was javascript created?', 
    select1 : "1. 1990 ",
    select2 : "2. 1980 ",
    select3 : "3. 1995 ",
    select4 : "4. 2005 ",
    correct: "3"
    },
    { question: "Which isn't a JavaScript Data Type?", 
    select1 : "1. Number ",
    select2 : "2. Sring ",
    select3 : "3. Boolean ",
    select4 : "4. Function ",
    correct: "4"
    },
    { question: "Which company developed JavaScript?", 
    select1 : "1. IBM ",
    select2 : "2. Netscape ",
    select3 : "3. Microsoft ",
    select4 : "4. Bell Labs ",
    correct: "2"
    },
    { question: "Inside which HTML element do we put the JavaScript?", 
    select1 : "1. head ",
    select2 : "2. meta ",
    select3 : "3. script ",
    select4 : "4. style ",
    correct: "3"
    },
    { question: "Which of the following is correct about features of JavaScript?", 
    select1 : "1. It can not Handling dates and time. ",
    select2 : "2. JavaScript is a object-based scripting language. ",
    select3 : "3. JavaScript is not interpreter based scripting language. ",
    select4 : "4. All of the above ",
    correct: "2"
    },
    { question: "Which of the following is not Javascript frameworks or libraries?", 
    select1 : "1. Polymer ",
    select2 : "2. Meteor ",
    select3 : "3. Cassandra ",
    select4 : "4. jQuery ",
    correct: "3"
    },
]  

//Challenge Page
intro.style.display = "block";
quiz.style.display = "none";
highScore.style.display = "none";

//Start Quiz Button
var startBtn = document.getElementById("startBtn");

// Listener Event on click of "Start Quiz" button
startBtn.addEventListener("click", startGame);


// Timer Function Begin
var timeLeft = 75;
var startScore = 0;
var timer = document.getElementById("timer");

timer.textContent = "Time: " + startScore + "s";

// Start Game
function startGame() {
    quiz.style.display = "block";
    question.style.display ="block";
    header.style.display = "block";
    intro.style.display = "none";
    highScore.style.display = "none";


    var timeInterval = setInterval(function() {
        timer.textContent = "Time: " + timeLeft + "s";
        timeLeft-=1;

        if(timeLeft === 0 || questions.length === runningQuestionIndex+1)  {
            resultRender();
            clearInterval(timeInterval);
            timer.textContent = "Time: " + timeLeft + "s";
         }
    }, 1000);

    renderQuestion();
}

// Display Questions 
var lastQuestionIndex = questions.length -1;
var runningQuestionIndex = 0;    

function renderQuestion() {
    var q = questions[runningQuestionIndex];
    question.innerHTML = q.question;
    select1.innerHTML = q.select1;
    select2.innerHTML = q.select2;
    select3.innerHTML = q.select3;
    select4.innerHTML = q.select4;
}

// Check Answers
function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer) {
        answerOutput.textContent = "Correct!"
    }
    else {
       answerOutput.textContent = "Wrong!"
       timeLeft -=10;
    }

    if (questions.length === runningQuestionIndex+1) {
        resultRender(); 
        return;
    }
        runningQuestionIndex++;
        renderQuestion();
    }   

//Score Quiz
function resultRender() {
   quiz.style.display = "none";
   intro.style.display = "none";
   highScore.style.display = "block";

   if (timeLeft === 0 || questions.length -1) { 
    result.textContent = "Your Score is " + timeLeft + ".";
   }
}

// enter initial and store highscore in local storage
function storeHighScores(event) {
    event.preventDefault();

    // stop function is initial is blank
    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    } 
   
}


    
    
    




