import { useState, useEffect } from "react";

export function GamePage() {
  const possibleWords = ["MONKEY", "DOG", "BIRD", "CAT", "ELEPHANT", "LION", "TIGER"];

  const [word, setWord] = useState("");
  const [hidden, setHidden] = useState([]);
  const [attempts, setAttempts] = useState(6);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);


  function resetGame() {
    const newWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    setWord(newWord);
    setHidden(Array(newWord.length).fill("_"));
    setAttempts(6);
    setWrongLetters([]);
    setGameOver(false);
  }

  useEffect(() => {
    resetGame();
  }, []);

  function handleGuess(letter) {
    if (gameOver) return;

    letter = letter.toUpperCase();

    if (hidden.includes(letter) || wrongLetters.includes(letter)) {
      alert("You already tried that letter");
      return;
    }

    const newHidden = [...hidden];
    let found = false;

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        newHidden[i] = letter;
        found = true;
      }
    }

    if (found) {
      setHidden(newHidden);

      if (!newHidden.includes("_")) {
        setGameOver(true);
        alert("You win!");
      }
    } else {
      setWrongLetters(prev => [...prev, letter]);
      setAttempts(prev => {
        const newAttempts = prev - 1;
        if (newAttempts <= 0) {
          setGameOver(true);
          setHidden(word.split(""));
          alert(`You lost :(\n The correct word was "${word}"`);
        }
        return newAttempts;
      });
    }
  }


  function handleKey(event) {
    const key = event.key;
    const regex = /[a-z]/i;
    if (key.length === 1 && regex.test(key)) {
      handleGuess(key);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [hidden, wrongLetters, attempts, gameOver]);

  return (
    <div className="game-container">
      <img src="/Imagem-de-forca.png" width="250px" />

      <p>Start guessing by typing letters on your keyboard</p>

      <div className="hidden-word">{hidden.join(" ")}</div>

      <div className="attempts">Attempts left: {attempts}</div>

      <div className="wrong-letters">Wrong letters: {wrongLetters.join(", ")}</div>

      <button className="reset-btn" onClick={resetGame}>Restart</button>
    </div>
  );
}
