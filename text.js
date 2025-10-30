const buttons = document.querySelectorAll("button")
const display = document.querySelector(".score")
const displayComputer = document.querySelector(".computer")
const displayWinner = document.querySelector(".winner")
let playerChoice;
let computerChoiced; 


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
    human = h
    computer = c
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
        return "No one! It's a tie!"
    }
}



buttons.forEach((button) =>{
    button.addEventListener("click", (e) => {
        display.textContent = "You picked: " + e.target.className
        playerChoice = e.target.className

        computerChoiced = getComputerChoice() 
        displayComputer.textContent = "Machine picked: " + computerChoiced

        let result = pRound(playerChoice, computerChoiced)
        displayWinner.textContent = "And the winner is... " + result

    })
})


