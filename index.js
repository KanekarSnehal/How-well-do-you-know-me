var chalk=require('chalk');
var readlineSync=require('readline-sync');

var userName=readlineSync.question(chalk.cyanBright("What's your name? "));
var score=0;

console.log(chalk.cyanBright("Hello ")+chalk.magenta.italic.bold(userName)+chalk.cyan(", Welcome to 'DO YOU KNOW Snehal? quiz'"))
console.log("-------------------------------")


function play(question,answer)
{
  var userAns=readlineSync.question(chalk.yellowBright(question));
  if(userAns.toUpperCase()==answer.toUpperCase())
  {
    score++;
    console.log(chalk.greenBright("You are right"));
  }
  else
  {
    console.log(chalk.red("You are wrong"));
  }
  console.log(" Your Current score is "+score);
  console.log("-------------------------------")
}

var questions=[
{
question:"1.Where do I live?\n--> ",
answer:"MUMBAI"
},

{
  question:"2.Which is my favourite dish? \n-->",
  answer:"CHINESE"
},

{
  question:"3.What food do I hate?  \n-->",
  answer:"Okra"
},

{
  question:"4.Which is my favourite color?  \n-->",
  answer:"yellow"
}

]

for(var i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer);
}

var highScore=[{
  name:"Snehal",
  score:1
}]
console.log(chalk.blue.bold("Your final score is ")+score);
console.log("-------------------------------")
console.log("Here are the high scores, if you have scored the highest then send me the ss!!");

for(var j=0;j<highScore.length;j++)
{
  console.log(highScore[j]);
}

function highestScore(s)
{
  var max=0;
  for(var j=0;j<highScore.length;j++)
  {
    if(max<highScore[j].score)
    {
      max=highScore[j].score;
    }
      
  }
  if(score>max)
  {
    console.log("Your score is highest!!");
  }
}
highestScore(score);
