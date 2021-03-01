/* Quiz on how well my friends know me */

var readlinesync=require('readline-sync');


var userName = readlinesync.question("enter your name");
console.log("welcome to the quiz "+" "+ userName + " "+"  This quiz is about me ");
let score =0;
var know=[
  {
    question:"Whats my name",
    answer:"Rajnish",
    answer:"rajnish"
  },
  {
    question:"where do i live?",
    answer:"Bhadrawati",
    answer:"bhadrawati"
  },
  {
    question:"whats my school name?",
    answer:"kv chanda",
    answer:"Kv chanda"
  }
];
function play(question,answer){
  var userAnswer=readlinesync.question(question);
  if(userAnswer==answer){
    console.log("correct");
    score=score+1;
    console.log("final score is "+" "+score);
  }else{
    console.log("wrong")
    score=score+0;
  }

}


for(var i=0; i<know.length;i++){
  var currentQ=know[i];
play(currentQ.question,currentQ.answer);
}

  