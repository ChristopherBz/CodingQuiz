var clearBtn = document.getElementById("clear");

// Clear High Scores
clearBtn.addEventListener("click", function() {
    localStorage.clear();
})

var highScore = {
  contactInfo: 'Steve',
  timeleft: "10"
}

var highScore = [];


//Load Scores 
var loadScores = function() {
  var highScore = localStorage.getItem("contactInfo, timeLeft");
  
      if (!highScore) {
          return false;
      }
    
       for (var i = 0; i < highScore.length; i++) {
        var highScore = highScore[i];
        var listItemEl = document.createElement("li");
        listItemEl.textContent = highScore;
      }    
      highScore.push(highScore)   
};




