critters = [
  {
    name: 'fox',
    icon: '🦊'
  },
  {
    name: 'cat',
    icon: '🐈'
  },
  {
    name: 'tiger',
    icon: '🐅'
  },
  {
    name: 'horse',
    icon: '🐎'
  },
  {
    name: 'unicorn',
    icon: '🦄'
  },
  {
    name: 'cow',
    icon: '🐄'
  },
  {
    name: 'pig',
    icon: '🐖'
  },
  {
    name: 'sheep',
    icon: '🐑'
  },
  {
    name: 'camel',
    icon: '🐪'
  },
  {
    name: 'elephant',
    icon: '🐘'
  },
  {
    name: 'rabbit',
    icon: '🐇'
  },
  {
    name: 'hedgehog',
    icon: '🦔'
  },
  {
    name: 'chick',
    icon: '🐤'
  },
  {
    name: 'penguin',
    icon: '🐧'
  },
  {
    name: 'duck',
    icon: '🦆'
  },
  {
    name: 'frog',
    icon: '🐸'
  },
  {
    name: 'turtle',
    icon: '🐢'
  },
  {
    name: 'owl',
    icon: '🦉'
  },
  {
    name: 'dragon',
    icon: '🐉'
  },
  {
    name: 'whale',
    icon: '🐳'
  },
  {
    name: 'dinosaur',
    icon: '🦖'
  },
  {
    name: 'fish',
    icon: '🐟'
  },
  {
    name: 'snail',
    icon: '🐌'
  },
  {
    name: 'butterfly',
    icon: '🦋'
  },
  {
    name: 'ladybird',
    icon: '🐞'
  }
];

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
