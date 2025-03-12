function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Type one --> ROCK, PAPER or SCISSORS! Let's play.")
    return humanChoice.toUpperCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanSelection, computerSelection) {
        if (computerSelection === humanSelection) {
            console.log(`It's a tie! ${computerSelection} is same as ${humanSelection}`);
            computerScore++;
            humanScore++;
        } else if ((humanSelection === "ROCK" && computerSelection === "PAPER") ||
        (humanSelection === "PAPER" && computerSelection==="SCISSORS") ||
        (humanSelection === "SCISSORS" && computerSelection==="ROCK")) {
            console.log(`You lose! computer chose ${computerSelection} beats human choice ${humanSelection}`);
            computerScore++;
        } else {
            console.log(`You win! human choice ${humanSelection} beatscomputer chose ${computerSelection}!`);
            humanScore++;
        }
    }

    for (let i=0; i <5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You won with score human: ${humanScore} and computer: ${computerScore}`);
    } else {
        console.log(`You lose with score human: ${humanScore} and computer: ${computerScore}`);
    }
}

playGame();