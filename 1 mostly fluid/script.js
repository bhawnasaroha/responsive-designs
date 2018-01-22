
alert("Welcome, this page is created to explain Mostly Fluid pattern in a fun way, enjoy!");

var quiz = [
      ["Who is the creator of Linux?","Linus Torvalds"],
      ["What was Linux initially decided to be named?","Freax"],
      ["Which distro does Linus use?","Fedora"]
    ];

var score = 0;

var i;

var max=quiz.length;
for(i=0;i<max;i++) {
  // prompts the user for answer which is then saved in var answer
  var answer = prompt(quiz[i][0]); // quiz[i][0] is the ith question in quiz array
  // check if the answer is correct
  if(answer === quiz[i][1]) {
    // quiz[i][1] is the ith answer in quiz array
     alert("You answered "+ answer + " ,which is Correct!"); // increase score by 1
     score++;
    } else {
      alert("You answered "+ answer + " ,which is unfortunately Wrong!");
    }
  }

document.getElementById("score").innerHTML=score;
