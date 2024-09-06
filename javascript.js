let humanScore = 0;
let computerScore = 0;
const onWin = new Event("onWin");
// helper to get random integer between 0 and num, exclusive
function getRandInt(num) {
    return Math.floor(Math.random() * num);
}

// helper to determine winner between two choices
const determineWinner = (firstChoice, secondChoice) => {
    const r = "rock";
    const p = "paper";
    const s = "scissors";

    if (firstChoice == secondChoice) {
        return "tie";
    }

    if (
        ((firstChoice == r) && (secondChoice == p)) ||
        ((firstChoice == p) && (secondChoice == s)) ||
        ((firstChoice == s) && (secondChoice == r))
    ) {
        return "p2";
    }
    return "p1";
}

// main game logic
const playRound = (evt) => {
    const results = document.getElementById("results");
    const button = evt.target;
    let playerSelection = button.textContent;

    const getComputerChoice = () => {
        let choice = choices[getRandInt(3)];
        return choice.textContent;
    };

    let computerSelection = getComputerChoice();
    let winner = determineWinner(playerSelection, computerSelection);

    if (winner == "p1") {
        humanScore++;
    } else if (winner == "p2") {
        computerScore++;
    }

    if ((humanScore >= 5) || (computerScore >= 5)){
        results.parentElement.dispatchEvent(onWin);
        return;
    }
    results.textContent = `Player Score: ${humanScore} Computer Score: ${computerScore}`
    
    console.log(`round played, user chose ${playerSelection} pc chose ${computerSelection}`);
    // results.textContent 
}

// get reference to main container
const container = document.getElementById("container");

// create and append results div
const div = document.createElement("div");
div.setAttribute("id", "results");
container.appendChild(div);

// set up rock paper scissors buttons and text
const rock = document.createElement("button");
rock.textContent = "rock";

const paper = document.createElement("button");
paper.textContent = "paper";

const scissors = document.createElement("button");
scissors.textContent = "scissors";

// add button references to choices array
const choices = [rock, paper, scissors];

// add relevant event listeners to game buttons
choices.forEach((choice) => {
    choice.addEventListener("click", playRound);
    container.appendChild(choice);
});

// logic to restart the game after someone has won
const restart = () => {
    humanScore = 0;
    computerScore = 0;
    const resultsDiv = document.createElement("div");
    resultsDiv.setAttribute("id", "results");
    resultsDiv.textContent = `Player Score: ${humanScore} Computer Score: ${computerScore}`;
    container.replaceChildren(resultsDiv, rock, paper, scissors);
}

// add onWin event listener, remove the current buttons, add the restart button
container.addEventListener("onWin", () => {
    const winner = document.createElement("h1");
    if (humanScore >= 5) {
        winner.textContent = "Human wins!";
    } else if (computerScore >= 5) {
        winner.textContent = "Computer wins!";
    }

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Game";
    restartBtn.addEventListener("click", restart);
    container.replaceChildren(winner);
    container.append(restartBtn);
});


