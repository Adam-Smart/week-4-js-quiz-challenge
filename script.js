var welcome =document.getElementById('welcome')
var quiz = document.getElementById('quiz')
var options = document.getElementById('options')
var message = document.getElementById('message')
var result = document.getElementById('result')
var currentQuestion = 0

var timer = document.getElementById('timer')
var countDownTimer 

var saveScore = document.getElementById('saveScore')
saveScore.addEventListener('click', SaveScore)
var score = 0

var playQuiz = document.getElementById('playQuiz')
playQuiz.addEventListener('click', startGame)


var points = document.getElementById('score')


function startGame(){
    score = 0
    secondsLeft = 75
    countDownTimer = setInterval(function(){
        if (secondsLeft > 0){
            timer.textContent = secondsLeft
        } else {
            endGame()
        }
        secondsLeft--;
    }, 1000)

    currentQuestion = [0]
    console.log('Started')
    playQuiz.classList.add('hide')
    welcome.classList.add('hide')
    quiz.classList.remove('hide')
    result.classList.add('hide')
    showQuestion();
}
function showQuestion(){
    var question = questions[currentQuestion];
    document.getElementById('question').textContent = question.title;

        options.innerHTML = '';

        for (var i = 0; i < question.choices.length; i++) {
            var option = document.createElement('button');
            option.textContent = question.choices[i];
            option.onclick= selectAnswer;
            option.classList.add('option')
            options.appendChild(option);
        }
    }
    function selectAnswer(e){
        var rightAnswer = questions[currentQuestion].answer;
        var usersAnswer = e.target.textContent;

        if(rightAnswer === usersAnswer) {
            showMessage('Correct')
            score++
            console.log (message)
            console.log(rightAnswer)
            console.log(usersAnswer)
        } else {
            showMessage('Wrong')
            console.log (message)
            console.log(rightAnswer)
            console.log(usersAnswer)
        }
        currentQuestion++;
        if(currentQuestion >= questions.length) {
            endGame();
            return;
        }
        showQuestion();
    }

    function showMessage(msg){
        message.textContent = msg;
    }
    function endGame(){
        console.log(score)
        clearInterval(countDownTimer)
        timer.textContent = ''
        console.log('Finished')
        quiz.classList.add('hide')
        result.classList.remove('hide')
        summary.textContent = 'Score = '+ score
    }
    tryAgain.addEventListener('click', startGame)

    function SaveScore(e){
        var player = document.getElementById('player').value

        if(player !== ''){
            localStorage.setItem(player, score)
            document.getElementById('player').value = ''
        }

    }