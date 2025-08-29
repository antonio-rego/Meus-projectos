import { useState } from "react";

export function Rules() {

  const [rules, setRules] = useState([]);

  function showRules() {
    setRules(
      <div className="rules">
          <ol>
            <li>The goal of the game is to guess the hidden word.</li>
            <li>On each turn, the player tries to guess one of the letters in the word.</li>
            <li>If the word contains the letter, it will be shown in the correct position.</li>
            <li>If the word DOES NOT contain the letter, the player loses a life.</li>
            <li>The number of lives varies, depending on the chosen difficulty.</li>
          </ol>
        </div>
    )

  }

  function hideRules() {
    setRules([]);
  }

  return (
    <div className="rules-container">
        <button className="rules-btn"
        onClick={showRules}
        >Click here to see the rules</button>
        {rules}
        <button className="discard-btn"
        onClick={hideRules}
        >Discard</button>
      </div>
  )
}