// These are global varibles which can be applied to all the functions
var welcome =document.getElementById('welcome')
var quiz = document.getElementById('quiz')
var options = document.getElementById('options')
var message = document.getElementById('message')
var result = document.getElementById('result')
var currentQuestion = 0

var timer = document.getElementById('timer')
var countDownTimer 

var saveScore = document.getElementById('saveScore')
// The .addEventListener is a event handler which in this case is a click so when save score button is clicked on it will then run the function.
saveScore.addEventListener('click', SaveScore)
var score = 0

var playQuiz = document.getElementById('playQuiz')
playQuiz.addEventListener('click', startGame)


var points = document.getElementById('score')

// This function is used to start the game, timer and resets the timer and score to 0. This function also hides everything that is not needed and reveals the quiz.
function startGame(){
    score = 0
    // adds a 75 second timer 
    secondsLeft = 75
    countDownTimer = setInterval(function(){
        if (secondsLeft > 0){
            timer.textContent = secondsLeft
        } else {
            endGame()
        }
        secondsLeft--;
        // The 1000 is set to milliseconds so 1000 milliseconds adds up to 1 second
    }, 1000)
// This sets the question to 0 which is the first question.
    currentQuestion = [0]
    console.log('Started')
    playQuiz.classList.add('hide')
    welcome.classList.add('hide')
    quiz.classList.remove('hide')
    result.classList.add('hide')
    showQuestion();
}
// This function shows the questions and buttons for the user to answer.
function showQuestion(){
    // This var is a local varible which can only be applied to this function and non of the other functions.
    var question = questions[currentQuestion];
    document.getElementById('question').textContent = question.title;
// this removes the previos questions
        options.innerHTML = '';

        for (var i = 0; i < question.choices.length; i++) {
            // This var creates a button for each option
            var option = document.createElement('button');
            option.textContent = question.choices[i];
            // This selects one of the option buttons when its clicked on
            option.onclick= selectAnswer;
            option.classList.add('option')
            options.appendChild(option);
        }
    }
    // This function is for when the user answer the question and letting them know if the answer is correct or wrong and either add or subtract time and adds to the score if they are correct.
    function selectAnswer(e){
        // This finds out which of the options is the correct answer 
        var rightAnswer = questions[currentQuestion].answer;
        // This var is the answer the user selected
        var usersAnswer = e.target.textContent;
        //This checks to see if the user selects the correct answer or wrong answer
        if(rightAnswer === usersAnswer) {
            showMessage('Correct')
            score++
            // These console.logs show a message saying if the question was answered correct or wrong along side the users answer and the correct answer.  
            console.log (message)
            console.log(rightAnswer)
            console.log(usersAnswer)
            // This adds 5 seconds if answer is correct
            secondsLeft = secondsLeft + 5
        } else {
            showMessage('Wrong')
            console.log (message)
            console.log(rightAnswer)
            console.log(usersAnswer)
            // This reduces the time by 10 seconds if answerd incorrectly
            secondsLeft = secondsLeft -10
        }
        // this moves to the next question.
        currentQuestion++;
        // This if statement checks to see if there are any questions left and if not will end the game 
        if(currentQuestion >= questions.length) {
            endGame();
            return;
        }
        showQuestion();
    }
// This function allows the text for "message to be chnaged"
    function showMessage(msg){
        message.textContent = msg;
    }
    // This fuunction is for when the game has ended whic hides the quiz and displays the user two buttons. One to try again and one to save the score. it also shows a text box where the user can put there initials to save along side there score.
    function endGame(){
        console.log(score)
        // clearInterval will end the timer.
        clearInterval(countDownTimer)
        //timer.textContent = '' will change the timer to nothing so it removes the timer
        timer.textContent = ''
        console.log('Finished')
        quiz.classList.add('hide')
        result.classList.remove('hide')
        // This shows the end score at the end of the quiz
        summary.textContent = 'Score = '+ score
    }
    tryAgain.addEventListener('click', startGame)
// This function allows the player and score to be saved to the local storage.
    function SaveScore(e){
        var player = document.getElementById('player').value

        if(player !== ''){
            localStorage.setItem(player, score)
            document.getElementById('player').value = ''
        }

    }