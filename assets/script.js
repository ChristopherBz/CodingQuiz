// Variables
var header = document.getElementById("header");
var intro = document.getElementById("intro");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4= document.getElementById("4");
var highScore= document.getElementById("highScore");
var endMessage = document.getElementById("endMessage");
var result = document.getElementById("result");
var scoreList = document.getElementById("scorelist");


//Questions 
var questions = [
    { question: 'When was javascript created?', 
    choice1 : "1. 1990 ",
    choice2 : "2. 1980 ",
    choice3 : "3. 1995 ",
    choice4 : "4. 2005 ",
    correct: "3"
    },
    { question: "Which isn't a JavaScript Data Type?", 
    choice1 : "1. Number ",
    choice2 : "2. Sring ",
    choice3 : "3. Boolean ",
    choice4 : "4. Function ",
    correct: "4"
    },
    { question: "Which company developed JavaScript?", 
    choice1 : "1. IBM ",
    choice2 : "2. Netscape ",
    choice3 : "3. Microsoft ",
    choice4 : "4. Bell Labs ",
    correct: "2"
    },
    { question: "Inside which HTML element do we put the JavaScript?", 
    choice1 : "1. head ",
    choice2 : "2. meta ",
    choice3 : "3. script ",
    choice4 : "4. style ",
    correct: "3"
    },
    { question: "Which of the following is correct about features of JavaScript?", 
    choice1 : "1. It can not Handling dates and time. ",
    choice2 : "2. JavaScript is a object-based scripting language. ",
    choice3 : "3. JavaScript is not interpreter based scripting language. ",
    choice4 : "4. All of the above ",
    correct: "2"
    },
    { question: "Which of the following is not Javascript frameworks or libraries?", 
    choice1 : "1. Polymer ",
    choice2 : "2. Meteor ",
    choice3 : "3. Cassandra ",
    choice4 : "4. jQuery ",
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
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
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
    result.textContent = "Your final score is " + timeLeft + ".";
   }
}

//Capture Score and Name 
function setScore() {
    localStorage.setItem("result", score);
    localStorage.setItem("name",  document.getElementById('name').value);
    getScore();
}


function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem("name") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("result") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;

    document.getElementById("result").innerHTML = quizContent;
}


    
    
    




