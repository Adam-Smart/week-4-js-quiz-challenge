var welcome =document.getElementById('welcome')
var quiz = document.getElementById('quiz')
var options = document.getElementById('options')
var message = document.getElementById('message')
var summary = document.getElementById('summary')

var playQuiz = document.getElementById('playQuiz')

playQuiz.addEventListener('click', startGame)

function startGame(){
    console.log('Started')
    playQuiz.classList.add('hide')
    welcome.classList.add('hide')
    quiz.classList.remove('hide')
    displayQuestion();
}