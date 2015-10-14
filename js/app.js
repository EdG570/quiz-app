$(document).ready(function(){

var userAnswer;
var correctAnswer = questionOne.correctAnswer;
var counter = 1;



/*--Hides and shows elements for transition from landing content to quiz start content after clicking get started button--*/
$('#start-btn').on('click', function(){
  /*--------Hidden elements-----*/
  $(this).parent('#quiz-container').prev().children('h1').hide();
  $(this).siblings('h2').hide();
  $(this).hide();


  /*------Show Elements-----*/
  $(this).siblings('h3').show();
  $(this).siblings('ul').show();
  $(this).prev().show();
  $(this).parent().prev().children('h2').show();
  $(this).parent().prev().children('.progress-icons').show();

  $(this).parent().parent().css('padding-bottom', '3em');

  $(this).parent().children('h3').append('<span id="remove"> ' + questions[0].question + '</span');

  /*------Adds first question answers to quiz-------*/
  for(i = 0; i <= 3; i++){
    $(this).prev().prev().append('<li><button class="answer-btn">' + questions[0].answers[i] + '</button></li>');
  }
    
});

 
/*-------On submit answer is stored in array and current answers/question
          are removed and next question/answers are added----------*/
$('#submit-btn').on('click', function(){
  

  $(this).prev().children().remove();
  $(this).prev().prev().children().remove();
  $(this).prev().prev().append('<span id="question-color">Question ' + (counter + 1) + ':</span><span> ' + questions[counter].question + '</span');

  for(i = 0; i <= 3; i++){
    $(this).prev().append('<li><button class="answer-btn">' + questions[0].answers[i] + '</button></li>');
  }

  audio.door();

  return counter++;
});




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

audio.greeting();


});