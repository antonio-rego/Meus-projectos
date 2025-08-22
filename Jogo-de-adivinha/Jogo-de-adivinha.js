const rulesBtn = document.getElementById("rules-btn");
    const rulesContainer = document.getElementById("rules-container");
    const guessInput = document.getElementById("guess-input");
    const tryBtn = document.getElementById("try-btn");
    const resultContainer = document.getElementById("result-container");

let rulesCreated = false;
let rulesElement;
    rulesBtn.addEventListener("click", () => {

      if (!rulesCreated) {

      rulesElement = document.createElement("p");
      rulesElement.classList.add("rules-paragraph")
      rulesElement.innerHTML = 'The game is very simple.<br>All you have to do is choose a number between 1 and 5, then, press the "Try out" button to see if the number you chose matches the number the computer chose.<br>Have fun!';
      rulesContainer.appendChild(rulesElement);
      rulesBtn.textContent = "Hide rules";
      rulesCreated = true

    } 

    else {
      rulesElement.remove();
      rulesBtn.textContent = "Click here to see the rules";
      rulesCreated = false;
      
    } 
      
    })

    tryBtn.addEventListener("click", () => {
      const userNumber = guessInput.value;
      const computerNumber = Math.floor((Math.random() * 5) + 1);
      const resultText = computerNumber === parseInt(userNumber) ? "Congratulations! You guessed right!" : "Better luck next time :(";
      resultContainer.innerHTML = `
      <p>You picked: <strong>${userNumber}</strong></p>
      <p>Computer picked: <strong>${computerNumber}</strong></p>
      <p>${resultText}</p>
      `
      tryBtn.style.display = "none";
      rulesBtn.style.display = "none";

      const resetButton = document.createElement("button");

      resetButton.textContent = "Click here to reset"
      resetButton.classList.add("reset-btn")
      document.body.appendChild(resetButton);

      resetButton.addEventListener("click", () => {
        resultContainer.innerHTML = "";
        guessInput.value = "1";
        tryBtn.style.display = "inline-block";
        rulesBtn.style.display = "inline-block";
        resetButton.remove()
      })

    })

