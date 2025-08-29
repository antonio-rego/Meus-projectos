let possibleWords = ["MONKEY", "DOG", "BIRD", "CAT", "ELEPHANT", "LION", "TIGER"]
let word = possibleWords[Math.floor(Math.random() * possibleWords.length)];
let hidden = Array(word.length).fill("_");
let attempts = 6;
let wrongLetters = [];

const gameContainer = document.querySelector(".game-container");
const hiddenWord = document.querySelector(".hidden-word");
const attemptsText = document.querySelector(".attempts");
const wrongLettersText = document.querySelector(".wrong-letters");
const resetButton = document.querySelector(".reset-btn");

updateDisplay();

function updateDisplay() {
  hiddenWord.textContent = hidden.join(" ");
  attemptsText.textContent = `Attempts left: ${attempts}`;
  wrongLettersText.textContent = `Wrong letters: ${wrongLetters.join(", ")}`
}


function handleGuess(letter) {
  letter = letter.toUpperCase();
  if (hidden.includes(letter) || wrongLetters.includes(letter)) {
    alert("You already tried that letter");
    return; // Retorno antecipado caso a letra já tenha sido escolhida
  }
  let found = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      hidden[i] = letter;
      found = true
    }
  }

  if (found) {
    if (!hidden.includes("_")) {
      alert("Congratulations! You win!");
      hiddenWord.textContent = word;
      window.removeEventListener("keydown", handleKey);
      resetButton.style.display = "block";
      return;
    }

  }
  else {
    wrongLetters.push(letter);
    attempts--;

    if (attempts <= 0) {
      alert(`You lost :( \n The correct word was "${word}"`);
      hiddenWord.textContent = word;
      attemptsText.textContent = `Attempts left: 0`;
      window.removeEventListener("keydown", handleKey);
      resetButton.style.display = "block";
      return;
    }
  }
  updateDisplay();
}

function handleKey(event) {
  const key = event.key;
  const regex = /[a-z]/i;
  if (key.length === 1 && regex.test(key)) {
    handleGuess(key);
  }
}

window.addEventListener("keydown", handleKey);

resetButton.addEventListener("click", () => {
  word = possibleWords[Math.floor(Math.random() * possibleWords.length)];
  hidden = Array(word.length).fill("_");
  attempts = 6;
  wrongLetters = [];
  updateDisplay();
  resetButton.style.display = "none";
  window.addEventListener("keydown", handleKey);
})
