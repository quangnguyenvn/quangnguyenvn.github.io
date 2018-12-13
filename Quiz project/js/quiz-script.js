// Question Controller
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');

var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion(questionIndex) {
    var question_no = questions[questionIndex];
    questionEl.textContent = [questionIndex +1] + '. ' + question_no.question;
    opt1.textContent = [question_no.option1];
    opt2.textContent = [question_no.option2];
    opt3.textContent = [question_no.option3];
    opt4.textContent = [question_no.option4];
}

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption) {
        swal('Chọn câu trả lời đi cưng!');
        return;
    }
    var answer = selectedOption.value;
    
    if(questions[currentQuestion].answer != answer) {
    	
    	//------------SWEET ALERT ZONE -------
		swal({title: "Sai rồi cưng!", 
		text: "Ấn nút OK để chơi lại từ đầu nhé!",  
		type: "error", 
		showCancelButton: true,}).then(function(){ 
   		location.reload();
   		}
		);
		//-------------------------------
	}	
	if(questions[currentQuestion].answer == answer) {
    	score += 1;
	}
    selectedOption.checked = false;
    currentQuestion++; 
    if(currentQuestion == totQuestions - 1) {
            nextButton.textContent = 'Xong';
    }
    if(currentQuestion == totQuestions) {
    	document.body.style.backgroundImage = "url('img/completed.jpg')";
        container.style.display = 'none';
        resultCont.style.display = '';
      	resultCont.textContent = 'Done! Bạn trả lời đúng: ' + score + '/10 câu';
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);