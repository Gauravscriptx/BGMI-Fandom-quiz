var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
var username = readlineSync.question('May I Have your Name? ');
console.log('Hi' + ' ' + username + ' to DO U KNOW me');

//FUNCTION DEFINATION
function play(question, answer) {
  var useranswer = readlineSync.question(question);
  if (useranswer == answer) {
    console.log(chalk.green('right!'));
    score += 1;
  } else {
    console.log(chalk.red('wrong'));
  }
  console.log('current score ', score);
  console.log('----------');
}

//ARRAY OF OBJECTS
var questionbook = [
  {
    question: 'Who is my favorite superhero? ',
    answer: 'ironman',
  },

  {
    question: 'what is my fav color ',
    answer: 'black',
  },
  {
    question: 'where do i live? ',
    answer: 'delhi',
  },

  {
    question: 'what is my age? ',
    answer: '20',
  },
  {
    question: 'what is 2+7 ',
    answer: '9',
  },
];

//FUNCTION CALLING
for (var i = 0; i < questionbook.length; i++) {
  play(questionbook[i].question, questionbook[i].answer);
}
console.log('Yay! you completed the Quiz', '\n', 'Your Score is ', score);
