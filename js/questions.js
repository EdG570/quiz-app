/*--------Object constructor for questions,answers, and fun facts-----*/
function Question(question, answers, correctAnswer, funFact, image){
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
  this.funFact = funFact;
  this.userAnswer = null;
  this.image = image;
}

Question.prototype.sayQuestionAnswers = function(){
  return 'The question is: ' + this.question + '\n\nThe choices are: ' + this.answers + '\n\n The correct answer is: ' + this.correctAnswer + '\n\nFun fact: ' + this.funFact;
};

/*-------------Construct questions---------*/

var questionOne = new Question('Béla Lugosi was a Hungarian/American actor best known for his portrayal of what monster? ',
 ['Dracula', 'Werewolf', 'Frankenstein', 'Alien'], 'Dracula', 
 "Béla Ferenc Dezso Blaskó, better known as Béla Lugosi, was best known for his portrayal of Count Dracula in the American Broadway stage production, and subsequent film, of Bram Stoker's classic vampire story.", '../images/bela.gif');



var questionTwo = new Question('Movies also teach us that if your son warns of "redrum" you better distance yourself from your spouse pronto. But in "The Shining" all the husband is worried about is what? ',
 ['Playing too hard', 'Becoming a murderer', 'Working too hard', 'Being murdered'], 'Working too hard', '"All work and no play makes Jack a dull boy" -- or, rather, a homicidal boy in Stanley Kubricks eerie 1980 adaptation of Stephen Kings horror novel', '../images/shining.jpg');



var questionThree = new Question('British actor Boris Karloff created a cinematic icon when he played the role of what monster?', 
  ['Dracula', 'Werewolf', 'Frankenstein', 'Alien'], 'Frankenstein', 'British actor Boris Karloff played the role of the monster in the 1931 film "Frankenstein". The ghoulish makeup he wore and the lurching walk he adopted in the film have become conventions, even cliches, of horror films. And beyond the individual techniques Karloff used when playing the role of the monster, he created a feeling of sympathy for the character, a technique that has since become a more general trait of successful horror films, whose monsters often gain intensity by fascinating audiences as well as repelling them.');



var questionFour = new Question('If you are looking for a job on Crystal Lake what offer should you not accept?', 
  ['Camp counselor', 'Camp cook', 'Mailman', 'Truck driver'], 'Camp counselor', 'In Friday the 13th, we learn it is a bad job to be a counselor at Camp Crystal Lake where the counselors die extremely bloody deaths at the hands of an unseen killer who turns out to be the cook whose son Jason drowned 25 years earlier while neglected by romancing counselors.');



var questionFive = new Question('If you are a teenager living on Elm Street, what should you never do?', 
  ['Go shopping', 'Play with dolls', 'Go to the prom', 'Go to sleep'], 'Go to sleep', 'We all know from "Nightmare on Elm Street" that your dreams can get you killed by Freddy Krueger. Written by Craven, a former English teacher, the films premise is the question of where the line between dreams and reality lies. The villain, Freddy Krueger, exists in the "dream world" and yet can kill in the "real world".');

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];




