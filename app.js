'use strict';

var correctAnswer = 0;
//question #-1

function one() {
var likeCoding = prompt('do you like coding?');
console.log('enjoy Coding', likeCoding); //console.log is a note to the coder

if (likeCoding.toLowerCase() === 'yes' || likeCoding.toLowerCase() === 'y') {
  alert('Yep! You rock!');
  correctAnswer++;
  console.log(correctAnswer);
}
}
one();

//question #-2
function two() {
var Outdoors = prompt('like the Outdoors?');
console.log('like the outdoors', Outdoors);

if (Outdoors.toLowerCase() === "yes") {
  alert('Welcome to the Great-NW');
  correctAnswer++;
  console.log(correctAnswer);
}
}
two();

//question #-3
function three() {
var food = prompt('do you like sea-food?');
console.log('like seaa-food', food);

if (food.toLowerCase() === 'yes') {
  alert('Sweettt, we should cook sometimes')
  correctAnswer++;
  console.log(correctAnswer);
}
}
three();

//question #-4
function four() {
var Art = prompt('do you enjoy art?');
console.log('like Art', Art);
if (Art.toLowerCase() === "yes") {
  alert('Nice, Seattle is all about Sights, Sounds and Feelings');
  correctAnswer++;
  console.log(correctAnswer);
}
}
four();

//question #-5
function five() {
var Career = prompt('career ladder...Not or career jungle-gym..Yes?')
console.log('career is a junble-gym', Career);
if (Career.toLowerCase() === 'no') {
  alert('You got it, Career path is jungle-gum not a ladder');
  correctAnswer++;
  console.log(correctAnswer);
}
}
five();

//question #-6
//while-loop = numeric input from users
function six() {
var number;
var counter = 1;

while (number !== 12 && counter < 5) {
  number=parseInt(prompt('what is the best number'));

 if (number < 12) {
    alert('sorr, you are low low 12 man');
    counter++;
  }
  else if (number > 12) {
    alert('sorry, you too high 12 man');
    counter++;
  }
  else if(isNaN(number) || number==null) {
    alert ('please enter the right 12man number');
    counter++;
  }
}
if (number = 12) {
  correctAnswer++;
  console.log(correctAnswer);
}

console.log('counter:', counter);
}
six();

//question #-7
//for-loop = askiing for multiple answer attempts from user...
function seven() {
var mastery = ['time', 'grit', 'skill'];
var flag;
var counter = 0;

while (counter < 7) {
  var answer = prompt('how one gain mastery?');
  console.log('user input:',answer);
  counter++;


  for(var i = 0; i < mastery.length; i++){
    if(answer === mastery[i]) {
      alert('you are right');
      flag = true;
      counter = 7;
      correctAnswer++;
      console.log(correctAnswer);
      break;
    }
  }
  if (!flag) {
    alert('Please try again');
  }
}
}

seven();

alert('You got ' + correctAnswer + ' out of 7 right.');
