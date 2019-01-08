var eng = document.getElementById('eng');
var rus = document.getElementById('rus');
var translate_btn = document.getElementById('translate_btn');
var next_btn = document.getElementById('next_btn');
var translate;

function randomWord() {
  do {
      var randomElement = Math.floor(Math.random() * dictionary.length);
  } while (randomElement % 2 != 0);

  console.log('eng' + ' ' + randomElement + ' > ' + 'rus' + ' ' + (randomElement + 1));
  eng.textContent = dictionary[randomElement];
  rus.textContent = translate = dictionary[randomElement + 1];
};

next_btn.addEventListener('click', () => {
  if (rus.classList.contains('hidden')) {
    rus.classList.remove('hidden');
  } else {
    rus.classList.add('hidden');
    randomWord();
  }
});
