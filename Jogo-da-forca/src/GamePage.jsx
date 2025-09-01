import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import './GamePage.css'

export function GamePage() {

  const location = useLocation();

  let theme = location.state?.theme || "Random"
  const startingAttempts = location.state?.attempts || 7

  if (theme === "Random") {
    const availableThemes = ["Animals", "Jobs", "Foods", "Countries"];
    const index = Math.floor(Math.random() * availableThemes.length);
    theme = availableThemes[index];
  }

  function selectWords() {
    let words = [];
    if (theme === "Animals") {
      words = ["MONKEY", "DOG", "BIRD", "CAT", "ELEPHANT", "LION", "TIGER"];
    }
    else if (theme === "Jobs") {
      words = ["PROGRAMMER", "DOCTOR", "ENGINEER", "FIREMAN", "MANAGER", "LAWYER", "PROFESSOR"];
    }
    else if (theme === "Countries") {
      words = ["PORTUGAL", "SPAIN", "FRANCE", "ITALY", "GERMANY", "SWEDEN", "BELGIUM"];
    }
    else if (theme === "Foods") {
      words = ["FRIES", "PIZZA", "STEAK", "BROCOLI", "RICE", "PASTA", "BANANA"];
    }

    return words
  }

  const possibleWords = selectWords();

  const [word, setWord] = useState("");
  const [hidden, setHidden] = useState([]);
  const [attempts, setAttempts] = useState(startingAttempts);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);


  function resetGame() {
    const newWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    setWord(newWord);
    setHidden(Array(newWord.length).fill("_"));
    setAttempts(startingAttempts);
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
        const newAttempts = attempts - 1;
        setAttempts(newAttempts);
        if (newAttempts <= 0) {
          setGameOver(true);
          setHidden(word.split(""));
          alert(`You lost :(\n The correct word was "${word}"`);
        }
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
    <>
      <div className="intro-msg">Start guessing by typing letters on your keyboard</div>

      <h1 className="theme-title">Theme: {theme}</h1>

      <div className="game-container">

        <div className="game-box">

          <div className="hidden-word">{hidden.join(" ")}</div>

          <button className="restart-btn" onClick={resetGame}>Restart</button>

        </div>

        <div className="details">

          <div className="attempts">Attempts left: {attempts}</div>

          <div className="wrong-letters">Wrong letters: {wrongLetters.join(", ")}</div>

        </div>
      </div>
    </>
  );
}
