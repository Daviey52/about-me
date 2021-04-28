'use strict';

let username = prompt('What is Your name').toUpperCase();
alert('welcome '+ username +' !');
//Question 1
let nameis = prompt('is my name David?').toLowerCase();
if (nameis === 'yes' || nameis === 'y'){
  console.log('nameis:' + nameis);
  alert('You are correct! My name is David');
} else if (nameis === 'no' || nameis === 'n' ){
  alert('That\'s not correct. My name is actually David');
} else{
  alert('please answer with either yes ,no, y, n');
}
//question 2
let serve = prompt('Did I serve in the Navy').toLowerCase();
if (serve ==='no' || serve=== 'n') {
  console.log('serve:'+ serve);
  alert('You are correct! I was in the Airforce');
} else if (serve === 'yes' || serve === 'y') {
  alert('That\'s not correct. I was in the Airforce');
} else{
  alert ('Please answer with either:yes, no, y, n');
}
let soccer = prompt('Do I like soccer more than NFL?').toLowerCase();
if ( soccer === 'yes' || soccer === 'y'){
  console.log('soccer:' + soccer);
  alert('You are right I like soccer more than the NFL: They use feet 90% of the time');
} else if (soccer === 'no' || soccer === 'n'){
  alert('That\'s not correct, I like soccer more than NFL. They use feet more than 90%');
} else{
  alert ('Please answer with either:yes ,no ,y ,n');
}
//question 4
let job = prompt('Was my previous job in Radiology?').toLowerCase();
if (job === 'yes' || job === 'y'){
  console.log('job:' + job);
  alert('You are correct! I worked as a CT/XRAY technitian in the Airforce');
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
} else if (live === 'no' || live === 'n') {
  alert('That\'s not correct. I have lived in TX, FL,GA, and WA in the last four years');
} else{
  alert('Please answer with either: yes ,no ,y,n');
}
alert('Thank you ' + username + ' for visiting my website');
