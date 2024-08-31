const choices = ["rock", "paper", "scissors"];

function getRandInt(num) {
    return Math.floor(Math.random() * num);
}

function getComputerChoice() {
    let choice = getRandInt(3);
    return choices[choice];
}

function getHumanChoice() {
    let choice = prompt("Your turn! Choose rock, paper, or scissors!");

    let tkn = choice.toLowerCase();

    if (!(choices.includes(tkn))) {
        console.log("Invalid move! Please choose a valid move!");
    } else {
        return tkn;
    }
}

function playGame(num) {
    let games = num;
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
            
        if (!(choices.includes(humanChoice))) {
            humanChoice = getHumanChoice();
        }

        if (humanChoice == computerChoice) {
            console.log("It's a tie!");
            return;
        }
        
        if (humanChoice == 'paper') {
            if (computerChoice == 'rock') {
                console.log("You win! " + humanChoice + " beats "
                    + computerChoice);
                humanScore++;
            } else {
                console.log("You lose! "+ computerChoice + " beats " + humanChoice);
                computerScore++;
            }
        } else if (humanChoice == 'rock') {
            if (computerChoice == 'scissors') {
                console.log("You win! " + humanChoice + " beats " + computerChoice);
                humanScore++;
            } else {
                console.log("You lose! "+ computerChoice + " beats " + humanChoice);
                computerScore++;
            }
        } else {
            if (computerChoice == 'paper') {
                console.log("You win! " + humanChoice + " beats " + computerChoice);
                humanScore++;
            } else {
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
                computerScore++;
            }
        }
    }

    while (games) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        games--;
    }

    if (humanScore == computerScore) {
        return "It's a tie!";
    } else if (humanScore > computerScore) {
        return "Human wins!";
    } else {
        return "Computer wins!";
    }
}


console.log(playGame(4));