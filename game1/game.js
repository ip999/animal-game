var randomCritter = Math.floor(Math.random() * critters.length);
console.log('randomCritter: ' + randomCritter);
// console.log(critters[randomCritter].icon);
// console.log(critters[randomCritter].name);

var wrongAnswer = randomCritter;
while (wrongAnswer == randomCritter) {
  wrongAnswer = Math.floor(Math.random() * critters.length);
  console.log('wrongAnswer: ' + wrongAnswer);
}

document.getElementById('animalIcon').innerHTML = critters[randomCritter].icon;
document.getElementById('animalName').innerHTML = critters[randomCritter].name;
document.getElementById('wrongAnswer').innerHTML = critters[wrongAnswer].name;

$.fn.shuffleChildren = function() {
  $.each(this.get(), function(index, el) {
    var $el = $(el);
    var $find = $el.children();

    $find.sort(function() {
      return 0.5 - Math.random();
    });

    $el.empty();
    $find.appendTo($el);
  });
};

//randomise the answers
$(document).ready(function() {
  $('.shuffle').shuffleChildren();
});

function fnCorrect() {
  alert("That's Correct! Well Done.");
  location.reload();
}

function fnWrong() {
  alert("Sorry That's not right, try again");
  location.reload();
}
