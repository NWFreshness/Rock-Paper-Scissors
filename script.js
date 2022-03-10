const rpsArray = ['Rock', 'Paper', 'Scissors'];
// const random = Math.floor(Math.random() * 3);

const container = document.querySelector('.container');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const rounds = document.querySelector('.rounds');
const startGame = document.querySelector('.startGame');
const computerScore = document.querySelector('.computerScore');
const playerScore = document.querySelector('.playerScore');
const compScore = document.querySelector('.compScore');
const playScore = document.querySelector('.playScore');
const winner = document.querySelector('.winner');
const numberRounds = document.querySelector('.numberRounds');
const roundWin = document.querySelector('.roundWinner');
const computerChoice = document.querySelector('.compChoice');
console.log(computerChoice)

let playerWins = 0;
let computerWins = 0;
let numRounds = 0;
let roundWinner = '';
let compChoice = ''

function random(){
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    compChoice = rpsArray[random()]
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    

    if((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        playerWins++;
        numRounds++;
        roundWinner = 'Player';
        return `You win, ${player} beats ${computer}! Score is currently - Player:${playerWins} Computer:${computerWins}`
    }
    if(player===computer){
        numRounds++;
        roundWinner = 'Draw';
        return `This round was a draw, ${player} ties ${computer}! Score is currently - Player:${playerWins} Computer:${computerWins}`;
    }
    computerWins++;
    numRounds++;
    roundWinner = 'Computer';
    return `Computer wins, ${computer} beats ${player}! Score is currently - Player:${playerWins} Computer:${computerWins}`
}

// const numPlayTo = +prompt("What do you want to play to?");

//const playerChoice = prompt("What would you like to play? Please enter rock, paper, or scissors.");
let numPlayTo = 0

function game() {
    
    
    if(playerWins === numPlayTo || computerWins === numPlayTo) {
        if(playerWins === numPlayTo){
            winner.textContent = 'Player Wins!'
        }else{
            winner.textContent = 'Computer Wins :('
        }
        return 'GAME OVER';
    }
    playRound(playerChoice, computerPlay());
    
    compScore.textContent = computerWins;
    playScore.textContent = playerWins;
    numberRounds.textContent = numRounds;
    roundWin.textContent = roundWinner;
    computerChoice.textContent = compChoice;
    
    setTimeout(()=>{
        return game();
    }, 1000)
    
}
// function game() {
    
//     console.log(playRound('rock', computerPlay()));
//     compScore.textContent = computerWins;
//     playScore.textContent = playerWins;
    
// }


let playerChoice = '';
rockButton.addEventListener('click',()=> {
    playerChoice = 'rock';
    rockButton.classList.toggle('active')
});

paperButton.addEventListener('click', ()=>{
    playerChoice = 'paper';
    paperButton.classList.toggle('active');
})

scissorsButton.addEventListener('click', ()=>{
    playerChoice = 'scissors';
    scissorsButton.classList.toggle('active');
})

startGame.addEventListener('click', ()=>{
    numPlayTo = +rounds.value;
    
    console.log(numPlayTo)
    
    game();
    
});


