$(document).ready(function(){

var userAnswer = $('.answer-btn').text();

/*--Hides and shows elements for transition from landing content to quiz start content after clicking get started button--*/
$('#start-btn').on('click', function(){
  /*--------Elements that are hidden-----*/
  $(this).parent('#quiz-container').prev().children('h1').hide();
  $(this).siblings('h2').hide();
  $(this).hide();

  /*------Elements that are displayed-----*/
  $(this).siblings('h3').show();
  $(this).siblings('ul').show();
  $(this).prev().show();
  $(this).parent().prev().children('h2').show();
  $(this).parent().prev().children('.progress-icons').show();

  $(this).parent().parent().css('padding-bottom', '3em');
});


/*--------Object constructor for questions and answers-----*/
function Question(question, answer1, answer2, answer3, answer4){
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.answer4 = answer4;
  this.question = question;
}

Question.prototype.sayQuestionAndAnswers = function(){
  return this.question + this.answer1 + this.answer2 + this.answer3 + this.answer4;
}


/*-------------Construct questions---------*/
var questionOne = new Question('What is the name of the character that Sigourney Weaver plays in the movie "Alien"?', 'Ashe', 'Ripley', 'Kane', 'Dallas');

$('.answer-btn').on('click', function(){
  $(this).css('background-color', '#F5A623');
  $(this).parent().siblings().children().css('background-color', '#777777');
});

$('form').submit(function(event){
  event.preventDefault();



});

});