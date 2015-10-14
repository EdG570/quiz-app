$(document).ready(function(){

var userAnswer;
var correctAnswer = questionOne.correctAnswer;
var clicks = 1;

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

  /*------Adds Answers to quiz-------*/
  for(i = 0; i <= 3; i++){
    $(this).prev().prev().append('<li><button class="answer-btn button">' + questions[0].answers[i] + '</button></li>');
  }
});


/*---Changes answer background on click ---*/
$('.answer-btn').on('click', function(){
  $(this).css('background-color', '#F5A623');
  $(this).parent().siblings().children().css('background-color', '#777777');
});

$('#submit-btn').on('click', function(){
  $(this).parent().children('h3').children().remove();
  $(this).prev().children().remove();
  $(this).parent().find('h3').append('<span id="question-color">Question ' + (clicks + 1) + ':</span><span> ' + questions[clicks].question + '</span');

  for(i = 0; i <= 3; i++){
    $(this).prev().append('<li><button class="answer-btn button">' + questions[clicks].answers[i] + '</button></li>');
  }
  return clicks++;

});

$('.answer-btn').click(function(){

});



});