const rpsArray = ['Rock', 'Paper', 'Scissors'];
const random = Math.floor(Math.random() * 3);
let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    return rpsArray[random];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    

    if((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        playerWins++;
        return `You win, ${player} beats ${computer}!`
    }
    if((player===computer){
        return `This round was a draw!`
    }
    computerWins++;
    return `Computer wins, ${computer} beats ${player}`
}

function game(i=0) {
    if(i === 5) return;
    playRound('Rock', computerPlay())
    return game(i+1);
}
console.log(game)
console.log(playerWins);
console.log(computerWins);