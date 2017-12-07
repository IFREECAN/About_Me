'use strict';
//question #-1
var likeCoding = prompt('do you like coding?');
console.log('enjoy Coding', likeCoding); //console.log is a note to the coder

if (likeCoding === 'Yes') {
  alert('Yep! You rock!');
}

if(likeCoding === 'Yes' || likeCoding === 'Y');

//question #-2
var Outdoors = prompt('like the Outdoors?');
console.log('like the outdoors', Outdoors);

if (Outdoors === "Yes") {
  alert('Welcome to the Great-NW');
}

//question #-3
var food = prompt('do you like sea-food?');
console.log('like seaa-food', food);

if (food === 'Yes') {
  alert('Sweettt', we should cook sometimes)
}

//question #-4
var Art = prompt('do you enjoy art?');
console.log('like Art', Art);
if (Art === "Yes") {
  alert('Nice', Seattle is all about Sights, Sounds and Feelings);
}

//question #-5
var Career = prompt('career ladder...Not or career jungle-gym..Yes?')
console.log('career is a junble-gym', Career);
if (Career === 'No') {
  alert('You got it', Career path is jungle-gum not a ladder);
}

//question #-6
//while-loop = numeric input from users
var number;
var counter = 1;

while (number !== 12) {
  number=parseInt(prompt('what is the best number'));

  if(number < 12) {
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
console.log('counter:', counter);

//question #-7
//for-loop = askiing for multiple answer attempts from user...
var mastery = ['time', 'grit', 'skill'];
var answer =prompt('how one gain mastery?');
var flag;

for(var i=0; i < mastery.length; i++){
console.log('each item at each iteration:', mastery[i]);
// do stuff here
if(answer === mastery[i]) {
  alert('you are right');
  flag = true;
  break;
  }
}

if (!flag) {
  alert('Please try again');
  }
}
