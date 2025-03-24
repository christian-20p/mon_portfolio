let randomNumber = Math.floor(Math.random() * 100) + 1; // Génère un nombre entre 1 et 100
let attempts = 0;
let guessInput = document.getElementById("guess");
let submitButton = document.getElementById("submit-guess");
let feedback = document.getElementById("feedback");
let attemptsElement = document.getElementById("attempts");
let restartButton = document.getElementById("restart-btn");

submitButton.addEventListener("click", function() {
    let userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess)) {
        feedback.textContent = "Veuillez entrer un nombre valide.";
        feedback.style.color = "red";
        return;
    }

    attempts++;
    attemptsElement.textContent = attempts;
    
    if (userGuess === randomNumber) {
        feedback.textContent = `Bravo ! Vous avez deviné le nombre en ${attempts} tentatives.`;
        feedback.style.color = "green";
        restartButton.style.display = "inline-block";
        submitButton.disabled = true;
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Trop bas ! Essayez un nombre plus grand.";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Trop élevé ! Essayez un nombre plus petit.";
        feedback.style.color = "orange";
    }
    
    guessInput.value = "";
});

restartButton.addEventListener("click", restartGame);

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = "";
    feedback.textContent = "";
    attemptsElement.textContent = attempts;
    restartButton.style.display = "none";
    submitButton.disabled = false;
}
