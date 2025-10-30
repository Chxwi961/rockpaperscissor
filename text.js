const buttons = document.querySelectorAll("button")
const display = document.querySelector(".score")
const displayComputer = document.querySelector(".computer")
const displayWinner = document.querySelector(".winner")
const displayPlrScore = document.querySelector("#humanscore")
const displayComputerScore = document.querySelector("#computerscore")
let playerChoice;
let computerChoiced; 
let playerAmount = 0;
let computerAmount = 0;

function getComputerChoice() {
    let rand = Math.random() /* Generates from 0 to 1 */
    let computerChoice
    if (rand < 1/3) { /* 33% chance */
        computerChoice = 'rock'
    } else if (rand >= 1/3 && rand < 2/3) { /* 33% chance */
        computerChoice = 'paper'
    } else {    /* still 33% chance */
        computerChoice = 'scissor'
    }
    return computerChoice
}

function pRound(h, c) {
    let human = h
    let computer = c
    if (human == 'scissor' && computer == 'paper') {
        return "human"
    } else if (human == 'scissor' && computer == 'rock') {
        return "computer" 
    } else if (human == 'paper' && computer == 'rock') {
        return "human" 
    } else if (human == 'paper' && computer == 'scissor') {
        return "computer" 
    } else if (human == 'rock' && computer == 'scissor') {
        return "human" 
    } else if (human == 'rock' && computer == 'paper') {
        return "computer"
    } else {
        return 0
    }
}



buttons.forEach((button) =>{
    button.addEventListener("click", (e) => {
        display.textContent = "You picked: " + e.target.className
        playerChoice = e.target.className

        computerChoiced = getComputerChoice() 
        displayComputer.textContent = "Machine picked: " + computerChoiced

        let result = pRound(playerChoice, computerChoiced)
        if (result != 0) {
            displayWinner.textContent = result + " WINS!"
        } else {
            displayWinner.textContent = "No one wins! TIE!"
        }
        
        if (result == 'human') {
            playerAmount += 1 
        } else if (result == "computer") {
            computerAmount += 1 
        }

        displayComputerScore.innerHTML = "Computer score: <br> " + computerAmount
        displayPlrScore.innerHTML = "Human score: <br>" + playerAmount

        if (playerAmount == 5){ 
            displayPlrScore.textContent = "Human WINS!"
            displayComputerScore.textContent = "Select an action to play again"
            playerAmount = 0 
            computerAmount = 0 
        } else if (computerAmount == 5) {
            displayPlrScore.textContent = "Select an action to play again"
            displayComputerScore.textContent = "Computer WINS!"
            playerAmount = 0 
            computerAmount = 0 
        }
    })
})


