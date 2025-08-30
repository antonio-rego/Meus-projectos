import { Rules } from "./Rules";
import { useNavigate } from "react-router";
import { Fragment, useState } from "react";

export function HomePage() {

  const navigate = useNavigate();
  function handleNext() {
    navigate("/challenge", { state: {attempts: selectedAttempts} })
  }

  const [selectedAttempts, setSelectedAttempts] = useState(6);

  const difficulties = [
    {id: "easy", label: "Easy", attempts: 8},
    {id: "medium", label: "Medium", attempts: 6},
    {id: "hard", label: "Hard", attempts: 4}
  ];

  return (
    <>
        <title>Jogo da Forca</title> {/* O resto? */}
        <h1>Hangman game</h1>
        <p className="intro-msg">
          Welcome to the hangman game!
        </p>
        <Rules />
      <div className="difficulty-container">
        <p>Select difficulty:</p>
        {difficulties.map(dif => {
          return (
          <Fragment key={dif.id}>
          <input 
          id={dif.id}
          type="radio"
          name="difficulty"
          value={dif.attempts}
          checked={selectedAttempts === dif.attempts}
          onChange={() => setSelectedAttempts(dif.attempts)}
          />
          <label htmlFor={dif.id}>
            {dif.label}
          </label>
          </Fragment>
          )
        })}
      </div>
      <button className="next-btn"
      onClick={handleNext}
      >Next</button>
    </>
  )
}