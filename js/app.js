'use strict';
let score = 0;
let username = prompt('What is Your name').toUpperCase();
alert('welcome '+ username +' !');
//Question 1
function q1() {
let nameis = prompt('is my name David?').toLowerCase();
if (nameis === 'yes' || nameis === 'y'){
  console.log('nameis:' + nameis);
  alert('You are correct! My name is David');
  score++;
} else if (nameis === 'no' || nameis === 'n' ){
  alert('That\'s not correct. My name is actually David');
} else{
  alert('please answer with either yes ,no, y, n');
}
}
q1();
//question 2
function q2() {
let serve = prompt('Did I serve in the Navy').toLowerCase();
if (serve ==='no' || serve=== 'n') {
  console.log('serve:'+ serve);
  alert('You are correct! I was in the Airforce');
  score++;
} else if (serve === 'yes' || serve === 'y') {
  alert('That\'s not correct. I was in the Airforce');
} else{
  alert ('Please answer with either:yes, no, y, n');
}
}
q2();
//question 3
function q3() {
let soccer = prompt('Do I like soccer more than NFL?').toLowerCase();
if ( soccer === 'yes' || soccer === 'y'){
  console.log('soccer:' + soccer);
  alert('You are right I like soccer more than the NFL: They use feet 90% of the time');
  score++;
} else if (soccer === 'no' || soccer === 'n'){
  alert('That\'s not correct, I like soccer more than NFL. They use feet more than 90%');
} else{
  alert ('Please answer with either:yes ,no ,y ,n');
}
}
q3();
//question 4
let job = prompt('Was my previous job in Radiology?').toLowerCase();
if (job === 'yes' || job === 'y'){
  console.log('job:' + job);
  alert('You are correct! I worked as a CT/XRAY technitian in the Airforce');
  score++;
} else if (job === 'no' || job === 'n') {
  alert('That\'s not correct, I worked in Radiology for four years!');
} else{
  alert('Please answer with either:yes , no , y ,n');
}
//question 5
let live = prompt('Have I lived in four states in the last four years?').toLowerCase();
if (live === 'yes' || live === 'y'){
  console.log('live:' + live);
  alert('you are correct I have lived in TX,FL,GA and WA in the last four years');
  score++;
} else if (live === 'no' || live === 'n') {
  alert('That\'s not correct. I have lived in TX, FL,GA, and WA in the last four years');
} else{
  alert('Please answer with either: yes ,no ,y,n');
}
alert('Thank you ' + username + ' for visiting my website');

//question 6
let attempts = 4;

for (let i = 0; i < attempts; i++){
  let guess = parseInt(prompt('Guesss a number between 0 to 25'));
  let answer = 15;

  if (guess === answer ){
    console.log('guess' + guess);
    alert('you are correct');
    break;
  } else if (guess < answer) {
    alert('That is too low');
  } else{
    alert('That is too high');

  }


}
alert('The correct answer is 15');
score++;

//question 7
let correctanswer = false;
let chance = 6;
while (!correctanswer && chance){
  let Answers = ['washington','california', 'texas', 'florida'];
  let question = prompt( 'Which six state do you think is among the best').toLowerCase();
  for (let j = 0; j < Answers.length; j++){
    if ( question === Answers[j]){
      console.log('question' + question);
      alert('You are correct');
      score++;
      correctanswer =true;
      break;

    }
  }
  if (chance === 1) {
    alert('Your guess are over. The correct answer: Washington, Texas ,Florida, California');
    console.log(`Your score is ${score} out of 7`);
    alert(`Your score is ${score} out of 7`);
  }

  chance--;
}
