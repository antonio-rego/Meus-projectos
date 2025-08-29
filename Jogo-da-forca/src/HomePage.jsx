import { Rules } from "./Rules";
import { useNavigate } from "react-router";

export function HomePage() {

  const navigate = useNavigate();
  function handleNext() {
    navigate("/challenge")
  }

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
        <input id="easy" type="radio" name="difficulty" />
        <label htmlFor="easy">Easy</label>
        <input id="medium" type="radio" name="difficulty" />
        <label htmlFor="medium">Medium</label>
        <input id="hard" type="radio" name="difficulty" />
        <label htmlFor="hard">Hard</label>
      </div>
      <button className="next-btn"
      onClick={handleNext}
      >Next</button>
    </>
  )
}