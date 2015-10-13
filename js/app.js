$(document).ready(function(){

$('#start-btn').on('click', function(){
  $(this).parent('#quiz-container').prev().children('h1').hide();
  $(this).siblings('h2').hide();
  $(this).hide();

  $(this).siblings('h3').show();
  $(this).siblings('.answer-btn').show();
  $(this).siblings('#submit-btn').show();
  $(this).parent().prev().children('h2').show();
  $(this).parent().prev().children('.progress-icons').show();

  $(this).parent().parent().css('padding-bottom', '3em');
});

});