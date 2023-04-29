var welcome =document.getElementById('welcome')
var quiz = document.getElementById('quiz')
var options = document.getElementById('options')
var message = document.getElementById('message')
var summary = document.getElementById('summary')
var currentQuestion = 0

var playQuiz = document.getElementById('playQuiz')

playQuiz.addEventListener('click', startGame)

function startGame(){
    console.log('Started')
    playQuiz.classList.add('hide')
    welcome.classList.add('hide')
    quiz.classList.remove('hide')
    showQuestion();
}
function showQuestion(){
    var question = questions[currentQuestion];
    document.getElementById('question').textContent = question.title
    currentQuestion++;
        if(currentQuestion >= questions.length) {
            endGame();
            return;
        }
        for (var i = 0; i < question.choices.length; i++) {
            var option = document.createElement('li');
            option.textContent = question.choices[i];
            option.onclick= selectAnswer;
            option.classList.add('option')
            options.appendChild(option);
        }
        
    }