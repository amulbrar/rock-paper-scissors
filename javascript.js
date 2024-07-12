function getComputerChoice(){
    let num = Math.random(); 
    
    if(num >= 0 && num < 0.33) {
        return "rock";
    } else if (num >= 0.33 && num < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

let rockBtn = document.querySelector('#rock-btn');
let paperBtn = document.querySelector('#paper-btn');
let scissorsBtn = document.querySelector('#scissors-btn');

rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));

let resultDiv = document.querySelector('#results');
let scoresDiv = document.querySelector('#scores');

function playRound(humanChoice, computerChoice) {

    if(humanChoice === "rock" && computerChoice === "scissors" ||
       humanChoice === "paper" && computerChoice === "rock" ||
       humanChoice === "scissors" && computerChoice === "paper") {
            humanScore = humanScore + 1;
            resultDiv.textContent = "Human beats computer.";
    } else if(computerChoice === "rock" && humanChoice === "scissors" ||
              computerChoice === "paper" && humanChoice === "rock" ||
              computerChoice === "scissors" && humanChoice === "paper") {
                    computerScore = computerScore + 1;
                    resultDiv.textContent = "Computer beats human.";
    } else {
            resultDiv.textContent = "Tie.";
    }

    scoresDiv.textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5){
        announceWinner();
        resetGame();
    }
}

function announceWinner(){
    if(humanScore > computerScore){
        resultDiv.textContent = "Human won the game.";
    } else if(computerScore > humanScore){
        resultDiv.textContent = "Computer won the game.";
    } else {
        resultDiv.textContent = "Game over with a tie.";
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    scoresDiv.textContent = "";
}