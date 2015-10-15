$(document).ready(function(){

var userAnswer;
var counter = 0;
var correctAnswer;
var totQuestions = 5;
var numCorrect = 0;


/*--Hides and shows elements for transition from landing content to quiz start content after clicking get started button--*/
$('#start-btn').on('click', function(){
   /*------Hides landing elements when user starts quiz-------*/ 
    $('h1').hide();
    $('#quiz-container').children('h2').hide();
    $('#start-btn').hide();
    
    /*----Shows quiz elements on start-----*/
    $('#quiz-container').children('h3').show();
    $('#quiz-container').children('ul').show();
    $('#submit-btn').show();
    $('#header').children('h2').show();
    $('#header').children('.progress-icons').show();
    $('.main').css('padding-bottom', '3em');

    addQuestion();
    addAnswers();
    
  //changeImage();

  //audio.door();
    
});

/*----------------------Stores user answer selection----------------*/
$('#answer-list').on('click', 'button', function(){
    userAnswer = $(this).text();
    $(this).toggleClass('yellow');
    console.log(userAnswer);
    correctAnswer = questions[counter].correctAnswer;
    checkAnswer();
});

/*-------Checks if quiz is finished, removes previous question, adds next question on submit----------*/
$('#quiz-container').on('click','#submit-btn', function(event){
    event.preventDefault();
   
   if(counter === questions.length) {
      console.log('End of quiz');
     }
   else{
      $('#answer-list').children().remove();
      $('h3').children().remove();
      addQuestion();
      addAnswers();
      
      //changeImage();

      counter++;
  
    }

});

//Adds question to quiz
function addQuestion(){
  $('h3').append('<span id="question-color">Question ' + (counter + 1) + ':</span><span> ' + questions[counter].question + '</span');
}

//Adds answer choices for current question
function addAnswers(){
  for(i = 0; i <= 3; i++){
      $('#answer-list').append('<li><button class="answer-btn">' + questions[counter].answers[i] + '</button></li>');
      }
}

//Conditional to check user's answer against the correct answer
function checkAnswer() {
  if(userAnswer === correctAnswer) {
    console.log('Correct');
  }
  else{
    console.log('wrong');
  }
}

//Loops through and changes images according to question status: wrong, correct, current or unanswered
function changeImage() {
  for(i = 0; i < questions.length; i++){
    if(i === counter) {
      $('#image-' + (i + 1)).attr('src', 'images/pumpkin-q' + (i + 1) + '.png');
    }
    else if(questions[i].userAnswer === null){
      $('#image-' + (i + 1)).attr('src', 'images/pumpkin-q' + (i + 1) + '-black.png');
    }
    else {
      $('#image-' + (i + 1)).attr('src', 'images/pumpkin-q' + (i + 1) + '-' + questions[i].userAnswer + '.png');
    }
    }
  }

/*--------------Audio files------------*/

var audio = {
   greeting:function() {
          $('#greeting')[0].volume=0.5;
          $('#greeting')[0].load();
          $('#greeting')[0].play();
    },
    door:function() {
          $('#door')[0].volume=0.5;
          $('#door')[0].load();
          $('#door')[0].play();
    }
};

//audio.greeting();


});