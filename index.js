readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.blueBright('Welcome to BGMI Fandom Game Quiz!'));

var score = 0;

var highscores = [
  {
    name: 'Gaurav',
    score: 5,
  },
  {
    name: 'Yogesh',
    score: 3,
  },
];

const game = () => {
  var userName = readlineSync.question(
    chalk.yellowBright.bold(`Whats your name? 
`)
  );

  console.log(
    'Welcome! ' +
      userName +
      " Let's find out! How well do you know about Battleground Mobile India "
  );

  console.log(
    chalk.redBright.bold('Note:- Answer by only typing options, eg: a or b')
  );

  const play = (question, answer) => {
    var userAnswer = readlineSync.question(question);
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      console.log('Right!');
      score = score + 1;
    } else {
      console.log('Wrong!');
    }
    console.log('Score : ' + score);
    console.log('--------------');
  };

  var questions = [
    {
      question: `What type of game is BGMI? 
      a : MOBA
      b : Battle Royale

      `,
      answer: 'b',
    },
    {
      question: `What is the team composition in this game? 
      a : 5p
      b : 4p

      `,
      answer: 'b',
    },
    {
      question: `Which is the name of basic character?
      a : andy
      b : victor

      `,
      answer: 'b',
    },
    {
      question: `Minimum damage to knockout a player?
      a : 100
      b : 120

      `,
      answer: 'a',
    },
    {
      question: `Which company does Mobile Legend belong to? 
      a : Tencent
      b : EA

      `,
      answer: 'a',
    },
    {
      question: `How many bridges are there in erangle map?
      a : 10
      b : 2

      `,
      answer: 'a',
    },
  ];

  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }

  var msg = '';
  switch (score) {
    case 0:
      msg = chalk.redBright.bold('You are a noob');
      break;
    case 1:
      msg = chalk.yellowBright.bold('You are a noob!');
      break;
    case 2:
      msg = chalk.yellowBright.bold('You are a semi pro player!');
      break;
    case 3:
      msg = chalk.greenBright.bold('You are a pro player!');
      break;
    case 4:
      msg = chalk.greenBright.bold('You are a ultra pro player!');
      break;
  }

  console.log('Your total score is ' + score);
  console.log(msg);

  var isHighscore = true;

  highscores.map((user) => {
    if (score < user.score || score == user.score) {
      isHighscore = false;
    }
  });

  if (isHighscore) {
    console.log('Yay! You have a high score!');
  } else {
    console.log("You don't have a highscore!");
  }

  if (readlineSync.keyInYN('Do you want to play again?')) {
    score = 0;
    console.clear();
    game();
  } else {
    console.log(chalk.blueBright('Thank you for playing!'));
  }
};

game();
