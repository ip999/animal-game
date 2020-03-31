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
document.getElementById('wrongIcon').innerHTML = critters[wrongAnswer].icon;

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

utterances = [
  'Can you see the   ',
  'Which one is a   ',
  'Can you point to the   ',
  'Show me the   ',
  'Can you see a  ',
  'Is there a   ',
  'Can you show me the   '
];

randomUtterance = Math.floor(Math.random() * utterances.length);

var msg = new SpeechSynthesisUtterance(
  utterances[randomUtterance] + critters[randomCritter].name
);

//window.speechSynthesis.speak(msg);

//randomise the answers
$(document).ready(function() {
  $('.shuffle').shuffleChildren();
});

let clicked = false;

function fnCorrect() {
  modal.style.display = 'block';
  clicked = true;
}

function fnWrong() {
  modalError.style.display = 'block';
  clicked = true;
}

let modal = document.querySelector('.modal');
let modalError = document.querySelector('.modalError');

window.onclick = function(e) {
  if (e.target == modal || e.target == modalError) {
    modal.style.display = 'none';
    modalError.style.display = 'none';
    this.location.reload();
  }
};

// $('#modalRed').on('touchstart click', function() {
//   location.reload();
// });

// $('#modalGreen').on('touchstart click', function() {
//   location.reload();
// });

$('#mainPage').on('touchstart click', function() {
  if (clicked == true) {
    //location.reload();
  }
});
