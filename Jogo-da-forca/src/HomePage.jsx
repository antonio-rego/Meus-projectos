import { Rules } from "./Rules";
import { useNavigate } from "react-router";
import { useState } from "react";
import './HomePage.css'

export function HomePage() {

  const navigate = useNavigate();
  function handleNext() {
    navigate("/challenge", { state: { attempts: selectedAttempts } })
  }

  const [selectedAttempts, setSelectedAttempts] = useState(7);

  const difficulties = [
    { id: "easy", label: "Easy", attempts: 8 },
    { id: "medium", label: "Medium", attempts: 7 },
    { id: "hard", label: "Hard", attempts: 6 }
  ];

  return (
    <>
      <title>Jogo da Forca</title> {/* O resto? */}
      <div className="home-container">
        <div className="home-text">
          <h1>Hangman game</h1>
          <p className="intro-msg">
            Welcome to the hangman game!
          </p>
          <Rules />
          <div className="difficulty-container">
            <h2>Select difficulty:</h2>
            {difficulties.map(dif => {
              return (
                <div key={dif.id} className="input-container">
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
                </div>
              )
            })}
          </div>
          <button className="next-btn"
            onClick={handleNext}
          >Next</button>
        </div>
      </div>
    </>
  )
}