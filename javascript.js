function getHumanChoice() {
    let humanChoice = prompt("enter your choice");
    return humanChoice;
}

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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice === "rock" && computerChoice === "scissors" ||
       humanChoice === "paper" && computerChoice === "rock" ||
       humanChoice === "scissors" && computerChoice === "paper") {
            humanScore = humanScore + 1;
            console.log("human beats computer");
            console.log("human score: " + humanScore);
            console.log("computer score: " + computerScore);
    } else if(computerChoice === "rock" && humanChoice === "scissors" ||
              computerChoice === "paper" && humanChoice === "rock" ||
              computerChoice === "scissors" && humanChoice === "paper") {
                    computerScore = computerScore + 1;
                    console.log("computer beats human");
                    console.log("human score: " + humanScore);
                    console.log("computer score: " + computerScore);
    } else {
            console.log("tie!");
            console.log("human score: " + humanScore);
            console.log("computer score: " + computerScore);
    }
}

function playGame(){
    let i = 0;
    for(i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log("human won the game");
    } else if(computerScore > humanScore){
        console.log("computer won the game");
    } else {
        console.log("game over with a tie");
    }
}