const rpsArray = ['Rock', 'Paper', 'Scissors'];
// const random = Math.floor(Math.random() * 3);
let playerWins = 0;
let computerWins = 0;

function random(){
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    return rpsArray[random()];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    

    if((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        playerWins++;
        return `You win, ${player} beats ${computer}! Score is currently - Player:${playerWins} Computer:${computerWins}`
    }
    if(player===computer){
        return `This round was a draw, ${player} ties ${computer}! Score is currently - Player:${playerWins} Computer:${computerWins}`
    }
    computerWins++;
    return `Computer wins, ${computer} beats ${player}! Score is currently - Player:${playerWins} Computer:${computerWins}`
}

const playerChoice = prompt("What would you like to play? Please enter rock, paper, or scissors.");

function game(i=0) {
    if(i === 5) return;
    console.log(playRound(playerChoice, computerPlay()));
    return game(i+1);
}
console.log(game())
