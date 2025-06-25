const container = document.querySelector('.container');
const roundResults = document.querySelector('.roundResults');
const score = document.querySelector('.score');
const gameOver = document.querySelector('.gameOver');

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

//function getHumanChoice() {
//    let humanChoice = prompt("Type one --> ROCK, PAPER or SCISSORS! Let's play.")
//    return humanChoice.toUpperCase();
//}

let humanScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('.choices');
buttons.forEach((btn) => {
    btn.addEventListener("click", playRound);
});

function playRound(event) {
    const humanSelection = event.target.id.toUpperCase();
    console.log(humanSelection);
    const computerSelection = getComputerChoice();
    if (computerSelection === humanSelection) {
        console.log(`It's a tie! ${computerSelection} is same as ${humanSelection}`);
        roundResults.textContent = "Draw Round";
        // No score increment on tie
    } else if (
        (humanSelection === "ROCK" && computerSelection === "PAPER") ||
        (humanSelection === "PAPER" && computerSelection === "SCISSORS") ||
        (humanSelection === "SCISSORS" && computerSelection === "ROCK")
    ) {
        console.log(`You lose! computer chose:  ${computerSelection} beats human choice:  ${humanSelection}`);
        roundResults.textContent = "You Lose this round!";
        computerScore += 1;
    } else {
        console.log(`You win! human choice:  ${humanSelection} beats computer chose: ${computerSelection}!`);
        roundResults.textContent = "You win this round!";
        humanScore += 1;
    }

    score.textContent = `You: ${humanScore} Computer: ${computerScore}`;
    if (humanScore === 5) {
        console.log(`You won with score: ${humanScore} vs ${computerScore}`);
        gameOver.textContent = "GAME OVER! You won the game!";
        container.style.display = 'none';
    } else if (computerScore === 5) {
        console.log(`You lose with score : ${humanScore} vs ${computerScore}`);
        gameOver.textContent = "GAME OVER! You lost the game!";
        container.style.display = 'none';
    }
}

// function playGame() {
//     // This function is not needed for button-based play
//     // Left here for reference
//     // for (let i=0; i <5; i++) {
//     //     const humanSelection = getHumanChoice();
//     //     const computerSelection = getComputerChoice();
//     //     playRound(humanSelection,computerSelection);
//     // }
// }